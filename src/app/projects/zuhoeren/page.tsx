import ZuhoerenPage from "~/app/projects/zuhoeren/zuhoeren-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";

export default function Page() {
  return <ZuhoerenPage isSsrMobile={getIsSsrMobile()} />;
}
