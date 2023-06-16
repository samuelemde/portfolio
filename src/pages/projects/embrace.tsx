import FullBleed from "~/components/FullBleed";
import Link from "next/link";
import Image from "next/image";
import Video from "~/components/Video";
import { useRouter } from "next/router";
import { projectQuerySchema } from "~/lib/utils";
import Header from "~/components/Header";

const images = [
  { src: "/images/embrace/embrace-booklet.png", alt: "Embrace 1 - Booklet" },
  {
    src: "/images/embrace/embrace-pasquart.jpg",
    alt: "Embrace 1 - Centre d’art Pasquart",
  },
];

export default function EmbracePage() {
  const { query } = useRouter();
  const { titleColor } = projectQuerySchema.parse(query);

  return (
    <>
      <Header titleColorClass={titleColor} />
      <FullBleed
        src={"/images/embrace/embrace1.jpeg"}
        title={"Embrace"}
        titleColorClass={titleColor}
      />

      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">Embrace 1</h2>
          <p className="pt-4 text-lg tracking-wider">
            The audio-visual installation Embrace 1 turns the eyelids into
            projection screens, illuminating them with a play of coloured light.
            This work is an attempt at total sensory envelopment.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            A symphony of assorted whirring and humming noises establishes the
            foundation of the sonic tableau. Intrusively engaging passages are
            followed by parts of absolute relaxation, with the entire field of
            vision being taken up by the projections and immersed in colors.
            Beginning in absolute synchronicity, the visual domain gradually
            evolves into an autonomous medium, initiating a dialogue between
            light and sound.
          </p>
          <p className="text- pt-4 text-sm italic">
            exhibited at{" "}
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ieeexplore.ieee.org/document/9024397"
            >
              EXTENDED COMPOSITIONS
            </Link>{" "}
            - Kunsthaus Centre d’art Pasquart
          </p>
        </div>
        <Video videoId="31YTCDtHvyo" />
        {/* ------ Images ------*/}
        <div className="grid h-full w-full grid-cols-1 gap-12 gap-y-20 py-6 lg:grid-cols-2">
          {images.map((image) => (
            <div key={image.src} className="relative">
              <Image
                className={"!relative w-full object-cover"}
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes={"(min-width: 1024px) 50vw, 100vw"}
              />
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">Embrace 2</h2>
          <p className="pt-4 text-lg tracking-wider">
            Embrace 2 is an intimately engaging audio-visual installation that
            delves deeper into the symbiotic relationship between light and
            sound. Guided by a black funnel-like construction, visitors are
            drawn into an intimate encounter with the screen, their heads nearly
            touching it, whilst all ambient light is erased from the peripheral
            view.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            This experience is heightened by an intricate auditory layer,
            resulting in a rich sensory tapestry. The viewer doesn&apos;t merely
            observe this dialogue, but becomes an integral part, navigating the
            blurred boundaries between personal perception and the
            installation&apos;s universe of light and sound. Embrace 2 is an
            exploration of sensory perception, providing an intensely personal
            reflection on our interaction with the world around us.
          </p>
        </div>
        <Video videoId="XdFp7HbbmEs" />
      </div>
    </>
  );
}
