import HomePage from "./home-page";
import { links as linkArray } from "~/lib/projects";
import { shuffle } from "~/lib/utils";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import ProjectsPage from "~/app/projects/projects-page";
import { projectColors } from "~/lib/projectColors";

export default function Page() {
  const isSsrMobile = getIsSsrMobile();

  const links = linkArray.concat([{ title: "About Me", href: "/about" }]);
  const rows = shuffle(Array.from({ length: links.length }, (_, i) => i + 1));
  const cols = shuffle(Array.from({ length: links.length }, (_, i) => i + 1));
  const positions = rows.map((row, index) => ({ row, col: cols[index] }));

  return isSsrMobile ? (
    <ProjectsPage isSsrMobile={isSsrMobile} />
  ) : (
    <HomePage
      positions={positions as { row: number; col: number }[]}
      links={links}
      colors={projectColors}
      isSsrMobile={isSsrMobile}
    />
  );
}
