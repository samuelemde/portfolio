"use client";

import FullBleed from "~/components/FullBleed";
import dynamic from "next/dynamic";
import Video from "~/components/Video";
import Header from "~/components/Header";
import { projects } from "~/lib/data/projects";
import LightBoxImage from "~/components/LightBoxImage";
import Footer from "~/components/Footer";
import coverFull from "@/images/dreiundzwanzig/cover-full.png";
import { Suspense } from "react";

const BandcampPlayer = dynamic(() => import("~/components/BandcampPlayer"), {
  ssr: false,
});

type DreiundzwanzigPageProps = {
  isSsrMobile: boolean;
};

export default function DreiundzwanzigPage({
  isSsrMobile,
}: DreiundzwanzigPageProps) {
  return (
    <>
      <Suspense fallback={null}>
        <Header isSsrMobile={isSsrMobile} initialTitle="SE" />
        <FullBleed
          src={projects.dreiundzwanzig.image.coverImage}
          title={projects.dreiundzwanzig.title}
        />
      </Suspense>
      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">
            Description
          </h2>
          <Suspense fallback={null}>
            <BandcampPlayer />
          </Suspense>
          <p className="pt-4 text-lg tracking-wider">
            Recorded and released in 2014, the instrumental album
            &quot;Dreiundzwanzig&quot; (&quot;Twenty-Three&quot;) by my band
            Amorph consists of four interwoven parts blending into each other
            and forming an uninterrupted singular track with a playing time of
            exactly 23 minutes.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            As the guitarist of the band I recorded, mixed and mastered the
            album using the infrastructure at the University of Arts in Bern
            where I was a student at the time.
          </p>
        </div>
        <div className="relative h-full w-full">
          <LightBoxImage src={coverFull} alt={"Album cover"} sizes={"100vw"} />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">
            Release Show
          </h2>
          <p className="pt-4 text-lg tracking-wider">
            In November 2014 we played a release show at Hinterhof Basel
            together with Birdmask and When Saints go Machine where I also was
            responsible for mixing the live recording for the video below.
          </p>
        </div>
        <Suspense fallback={null}>
          <Video videoId="JAG4WF2SK_0" title="Dreiundzwanzig live" />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
