import ProjectItem from "~/components/ProjectItem";
import Header from "~/components/Header";
import React from "react";

const projects = [
  {
    title: "Named\nFunction\nNetworking",
    src: "/images/nfn/dispmap3.jpg",
    href: "projects/nfn",
  },
  {
    title: "Embrace",
    src: "/images/embrace/embrace1.jpeg",
    href: "projects/embrace",
  },
  {
    title: "Arduist",
    src: "/images/arduist/arduist.png",
    href: "projects/arduist",
  },
  {
    title: "Zuhören",
    src: "/images/zuhoeren/headphones2.jpeg",
    href: "projects/zuhoeren",
  },
  {
    title: "Nameless\nLands",
    src: "/images/namelesslands/map.jpg",
    href: "projects/nameless-lands",
  },
  {
    title: "Dreiund\nzwanzig",
    src: "/images/dreiundzwanzig/cover-clean.jpg",
    href: "projects/dreiundzwanzig",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
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
