import { useEffect } from "react";

export default function useNoCursor() {
  useEffect(() => {
    document.documentElement.classList.add("cursor-none");

    return () => document.documentElement.classList.remove("cursor-none");
  }, []);
}
