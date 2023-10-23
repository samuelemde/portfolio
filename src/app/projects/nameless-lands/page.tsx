import NamelessLandsPage from "~/app/projects/nameless-lands/nameless-lands-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";

export default function Page() {
  return <NamelessLandsPage isSsrMobile={getIsSsrMobile()} />;
}
