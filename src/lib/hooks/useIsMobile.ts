import { useWindowSize } from "~/lib/hooks/useWindowSize";
import { useContext } from "react";
import { IsSsrMobileContext } from "~/contexts/SsrMobileContext";

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return isSsrMobile || isBrowserMobile;
};
