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
  const [spacing, setSpacing] = useState("tracking-[0.1rem]");
  const [transition, setTransition] = useState("transition-none");

  const animateTitle = (color?: string) => {
    if (color) setHeaderColor(color);

    if (title === "Samuel Emde") {
      setTitle("SE");
      setTransition("transition-none");
      setSpacing("tracking-[8.73rem] md:tracking-[10.32rem]");
      setTimeout(() => {
        setTransition("transition-spacing");
        setSpacing("tracking-[0.1rem]");
      }, 0);
    } else {
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
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
