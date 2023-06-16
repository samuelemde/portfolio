import React, { useState, createContext } from "react";

type HeaderContextType = {
  animate: () => void;
  title: string;
  spacing: string;
  transition: string;
  expanded: boolean;
};

export const HeaderContext = createContext<HeaderContextType>({
  animate: () => {
    throw new Error("animate function must be overridden by provider");
  },
  title: "",
  spacing: "",
  transition: "",
  expanded: true,
});

export function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);
  const [title, setTitle] = useState("Samuel Emde");
  const [spacing, setSpacing] = useState("0.1rem");
  const [transition, setTransition] = useState("");

  const animate = () => {
    if (expanded) {
      setTitle("SE");
      setSpacing("10.3rem");
      setTransition("none");
      setTimeout(() => {
        setSpacing("0.1rem");
        setTransition("letter-spacing 0.5s ease-in-out");
        setExpanded(false);
      }, 0);
    } else {
      setSpacing("10.3rem");
      setTimeout(() => {
        setTransition("none");
        setSpacing("0.1rem");
        setTitle("Samuel Emde");
        setExpanded(true);
      }, 700);
    }
  };

  return (
    <HeaderContext.Provider
      value={{ animate, title, spacing, transition, expanded }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
