import { useWindowSize } from "~/lib/hooks/useWindowSize";
import { useContext } from "react";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width } = useWindowSize();
  const isBrowserMobile = !!width && width < 768;

  return isSsrMobile || isBrowserMobile;
};
