import HomePage from "./home-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import { getRandomPositions } from "~/lib/utils";

export default function Page() {
  const isSsrMobile = getIsSsrMobile();
  const positions = getRandomPositions(7);

  return <HomePage isSsrMobile={isSsrMobile} positions={positions} />;
}
