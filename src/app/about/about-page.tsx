"use client";

import FullBleed from "~/components/FullBleed";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Header from "~/components/Header";
import { useSearchParams } from "next/navigation";
import samuelEmde from "@/images/samuelemde.jpg";

type AboutPageProps = {
  isSsrMobile: boolean;
};

export default function AboutPage({ isSsrMobile }: AboutPageProps) {
  const searchParams = useSearchParams();
  const titleColor = searchParams.get("titleColor");

  return (
    <>
      <Header titleColorClass={titleColor} isSsrMobile={isSsrMobile} />
      <FullBleed src={samuelEmde} title={""} />
      <div className="flex flex-col items-center justify-center gap-20 p-6 pb-40 pt-10">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-5xl uppercase italic">
            Software Engineer With A Background In Media Art
          </h2>
          <p className="pt-4 text-lg tracking-wide">
            As a graduate of the University of Basel and the Bern University of
            the Arts with degrees in Computer Science as well as Music and Media
            Arts, I bring a unique combination of creativity and technical
            know-how. With over three years of experience as a backend and lead
            developer for a fintech startup, I have gained a deep understanding
            of software development and have proven my ability to learn new
            technologies quickly and efficiently. I strive to create pragmatic
            solutions in a rapidly evolving technological landscape and enjoy
            environments that challenge my analytical thinking and creative
            problem solving skills.
          </p>
          <p className="text- pt-4 text-sm italic">
            <Link className="underline" href="mailto:samuel.emde@gmail.com">
              samuel.emde@gmail.com
            </Link>
          </p>
        </div>
        <div className={"flex flex-row gap-4"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelemde"
          >
            <GitHubLogoIcon className="h-7 w-7" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/samuel-emde-799b17179/"
          >
            <LinkedInLogoIcon className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      headerExpanded: false,
    },
  };
}
