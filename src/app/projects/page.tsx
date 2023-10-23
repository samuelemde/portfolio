import { getIsSsrMobile } from "~/lib/mobileDetect";
import ProjectsPage from "~/app/projects/projects-page";

export default function Page() {
  return <ProjectsPage isSsrMobile={getIsSsrMobile()} />;
}
