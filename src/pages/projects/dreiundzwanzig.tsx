import FullBleed from "~/components/FullBleed";
import Image from "next/image";
import dynamic from "next/dynamic";
import Video from "~/components/Video";
import { useRouter } from "next/router";
import { projectQuerySchema } from "~/lib/utils";
import Header from "~/components/Header";
import { projects } from "~/lib/projects";

const BandcampPlayer = dynamic(() => import("~/components/BandcampPlayer"), {
  ssr: false,
});

export default function DreiundzwanzigPage() {
  const { query } = useRouter();
  let titleColor;
  const queryParseResult = projectQuerySchema.safeParse(query);
  if (queryParseResult.success) titleColor = queryParseResult.data.titleColor;

  return (
    <>
      <Header titleColorClass={titleColor} initialTitle={"SE"} />
      <FullBleed
        src={projects.dreiundzwanzig.coverImage}
        title={projects.dreiundzwanzig.title}
        titleColorClass={titleColor}
      />
      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">
            Description
          </h2>
          <BandcampPlayer />
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
          <Image
            className={"!relative w-full object-contain"}
            src={"/images/dreiundzwanzig/cover-full.png"}
            alt={"Album cover full"}
            fill
            loading="lazy"
            sizes="100vw"
          />
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
        <Video videoId="JAG4WF2SK_0" />
      </div>
    </>
  );
}
