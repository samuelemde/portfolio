"use client";

import ProjectItem from "~/components/ProjectItem";
import Header from "~/components/Header";
import React from "react";
import { projects } from "~/lib/projects";
import Footer from "~/components/Footer";

export default function ProjectsPage({
  isSsrMobile,
}: {
  isSsrMobile: boolean;
}) {
  return (
    <>
      <Header initialTitle={"Samuel Emde"} isSsrMobile={isSsrMobile} />
      <div className="flex justify-center p-8 py-44">
        <div className="grid h-fit w-full grid-cols-1 items-center justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(projects).map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                alt={project.alt}
                src={project.previewImage}
                href={project.href}
                isSsrMobile={isSsrMobile}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
