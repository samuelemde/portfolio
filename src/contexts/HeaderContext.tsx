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
  const [spacing, setSpacing] = useState("0.1rem");
  const [transition, setTransition] = useState("none");

  const animate = () => {
    if (title === "Samuel Emde") {
      setTitle("SE");
      setSpacing("10.3rem");
      setTransition("none");
      setTimeout(() => {
        setSpacing("0.1rem");
        setTransition("letter-spacing 0.5s ease-in-out");
      }, 0);
    } else {
      setSpacing("10.3rem");
      setTimeout(() => {
        setTransition("none");
        setSpacing("0.1rem");
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
