import ProjectItem from "~/components/ProjectItem";
import Header from "~/components/Header";
import React from "react";
import { projects } from "~/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header initialTitle={"Samuel Emde"} />
      <div className="flex justify-center p-8 py-44">
        <div className="grid h-fit w-full grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                src={project.src}
                href={project.href}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
