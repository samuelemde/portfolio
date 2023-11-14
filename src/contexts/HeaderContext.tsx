"use client";

import React, { createContext, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderContextType = {
  title: string;
  headerColor?: string;
  spacing: string;
  transition: string;
  animateTitle: (color?: string) => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  isEyeVisible: boolean;
};

export const HeaderContext = createContext<HeaderContextType>({
  title: "",
  headerColor: undefined,
  spacing: "",
  transition: "",
  animateTitle: () => {
    throw new Error("animate function must be overridden by provider");
  },
  setTitle: () => {
    throw new Error("setTitle function must be overridden by provider");
  },
  isEyeVisible: true,
});

export function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [title, setTitle] = useState(
    pathname === "/" || pathname === "/projects" ? "Samuel Emde" : "SE",
  );
  const [headerColor, setHeaderColor] = useState<string | undefined>(undefined);
  const [isEyeVisible, setIsEyeVisible] = useState(true);
  const [spacing, setSpacing] = useState("tracking-[0.1rem]");
  const [transition, setTransition] = useState("transition-none");

  const animateTitle = (color?: string) => {
    if (color) setHeaderColor(color);

    if (title === "Samuel Emde") {
      setIsEyeVisible(false);
      setTitle("SE");
      setTransition("transition-none");
      setSpacing("tracking-[8.73rem] md:tracking-[10.32rem]");
      setTimeout(() => {
        setTransition("transition-spacing");
        setSpacing("tracking-[0.1rem]");
      }, 0);
    } else {
      setIsEyeVisible(true);
      setSpacing("tracking-[8.73rem] md:tracking-[10.32rem]");
      setTimeout(() => {
        setTransition("transition-none");
        setSpacing("tracking-[0.1rem]");
        setTitle("Samuel Emde");
      }, 300);
    }
  };

  return (
    <HeaderContext.Provider
      value={{
        title,
        headerColor: headerColor,
        spacing,
        transition,
        animateTitle,
        setTitle,
        isEyeVisible,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
