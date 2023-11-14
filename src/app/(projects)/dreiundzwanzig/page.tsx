import DreiundzwanzigPage from "~/app/(projects)/dreiundzwanzig/dreiundzwanzig-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";

export default function Page() {
  return <DreiundzwanzigPage isSsrMobile={getIsSsrMobile()} />;
}
