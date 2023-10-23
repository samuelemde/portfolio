import AboutPage from "~/app/about/about-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";

export default function Page() {
  return <AboutPage isSsrMobile={getIsSsrMobile()} />;
}
