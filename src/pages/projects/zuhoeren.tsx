import FullBleed from "~/components/FullBleed";
import Video from "~/components/Video";
import { useRouter } from "next/router";
import { projectQuerySchema } from "~/lib/utils";
import Header from "~/components/Header";

export default function ZuhoerenPage() {
  const { query } = useRouter();
  const { titleColor } = projectQuerySchema.parse(query);

  return (
    <>
      <Header titleColorClass={titleColor} />
      <FullBleed
        src={"/images/zuhoeren/headphones2.jpeg"}
        title={"Zuhören"}
        titleColorClass={titleColor}
      />

      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">Summary</h2>
          <p className="pt-4 text-lg tracking-wider">
            With a camera installed on the ceiling and a little LED mounted on
            top of the headphones, this installation uses color tracking to
            record the listeners path which then determines the sounds they
            here.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            Each visitor creates their own composition consisting of various
            soundscapes recorded throughout Switzerland using binaural
            microphones.
          </p>
          <p className="text- pt-4 text-sm italic">
            exhibited at GLOBALE: inSonic2015 @ZKM Karlsruhe
          </p>
        </div>
        <Video videoId="VK81aU05yFs" />
      </div>
    </>
  );
}
