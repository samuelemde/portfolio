import ProjectItem from "~/components/ProjectItem";
import Header from "~/components/Header";
import React from "react";
import { projects } from "~/lib/projects";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import { type GetServerSidePropsContext } from "next";

export default function ProjectsPage({
  isSsrMobile,
}: {
  isSsrMobile?: boolean;
}) {
  return (
    <>
      <Header initialTitle={"Samuel Emde"} />
      <div className="flex justify-center p-8 py-44">
        <div className="grid h-fit w-full grid-cols-1 items-center justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(projects).map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                src={project.previewImage}
                href={project.href}
                isSsrMobile={isSsrMobile}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const isSsrMobile = getIsSsrMobile(context);

  return { props: { isSsrMobile } };
}
