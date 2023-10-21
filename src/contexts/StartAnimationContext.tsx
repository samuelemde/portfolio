import React, { createContext, useState } from "react";

type StartAnimationContext = {
  isFirstLoad: boolean;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StartAnimationContext = createContext<StartAnimationContext>({
  isFirstLoad: true,
  setIsFirstLoad: () => {
    throw new Error("setIsFirstLoad function must be overridden by provider");
  },
});

export function StartAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  return (
    <StartAnimationContext.Provider value={{ isFirstLoad, setIsFirstLoad }}>
      {children}
    </StartAnimationContext.Provider>
  );
}
