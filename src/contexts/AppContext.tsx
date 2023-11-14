"use client";

import React, { createContext, useState } from "react";

type AppCtxType = {
  isFirstLoad: boolean;
  fullBleedExpanded: boolean;
  projectsVisible: boolean;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setFullBleedExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppCtxType>({
  isFirstLoad: true,
  fullBleedExpanded: true,
  projectsVisible: true,
  setIsFirstLoad: () => {
    throw new Error("setIsFirstLoad function must be overridden by provider");
  },
  setFullBleedExpanded: () => {
    throw new Error(
      "setFullBleedExpanded function must be overridden by provider",
    );
  },
  setProjectsVisible: () => {
    throw new Error(
      "setProjectsVisible function must be overridden by provider",
    );
  },
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [fullBleedExpanded, setFullBleedExpanded] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isFirstLoad,
        fullBleedExpanded,
        projectsVisible,
        setIsFirstLoad,
        setFullBleedExpanded,
        setProjectsVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
