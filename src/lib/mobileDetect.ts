import MobileDetect from "mobile-detect";
import { type GetServerSidePropsContext } from "next";

export const getIsSsrMobile = (context: GetServerSidePropsContext) => {
  const md = new MobileDetect(context.req.headers["user-agent"]!);

  return Boolean(md.mobile());
};
