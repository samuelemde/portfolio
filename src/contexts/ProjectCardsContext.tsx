import React, { createContext, useState } from "react";

type ProjectCardsContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectCardsContext = createContext<ProjectCardsContextType>({
  isOpen: false,
  setIsOpen: () => {
    throw new Error("setIsOpen function must be overridden by provider");
  },
});

export function ProjectCardsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProjectCardsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ProjectCardsContext.Provider>
  );
}
