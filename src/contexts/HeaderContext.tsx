import React, { useState, createContext } from "react";
import { useRouter } from "next/router";

type HeaderContextType = {
  animate: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  spacing: string;
  transition: string;
};

export const HeaderContext = createContext<HeaderContextType>({
  animate: () => {
    throw new Error("animate function must be overridden by provider");
  },
  setTitle: () => {
    throw new Error("setTitle function must be overridden by provider");
  },
  title: "",
  spacing: "",
  transition: "",
});

export function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(
    router.pathname === "/" || router.pathname === "/projects"
      ? "Samuel Emde"
      : "SE",
  );
  const [spacing, setSpacing] = useState("tracking-[0.1rem]");
  const [transition, setTransition] = useState("transition-none");

  const animate = () => {
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
      }, 700);
    }
  };

  return (
    <HeaderContext.Provider
      value={{ animate, title, setTitle, spacing, transition }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
