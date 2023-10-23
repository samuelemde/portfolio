import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

export const getIsSsrMobile = () => {
  const userAgent = headers().get("user-agent");
  if (!userAgent) return false;

  const md = new MobileDetect(userAgent);
  return Boolean(md.mobile());
};
