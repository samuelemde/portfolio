import FullBleed from "~/components/FullBleed";
import Image from "next/image";
import { useRouter } from "next/router";
import { projectQuerySchema } from "~/lib/utils";
import Header from "~/components/Header";

export default function NamelessLandsPage() {
  const { query } = useRouter();
  let titleColor;
  const queryParseResult = projectQuerySchema.safeParse(query);
  if (queryParseResult.success) titleColor = queryParseResult.data.titleColor;

  return (
    <>
      <Header titleColorClass={titleColor} initialTitle={"SE"} />
      <FullBleed
        src={"/images/namelesslands/map-clean.jpg"}
        title={"Nameless Lands"}
        opacity={0.3}
        titleColorClass={titleColor}
      />

      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">
            DESCRIPTION
          </h2>
          <p className="text-sm italic">
            Developed by Michael Plüss, Manuel Rickli, Joel Gschwind and Samuel
            Emde - University of Basel
          </p>
          <p className="pt-4 text-lg tracking-wider">
            Nameless Lands is an engaging round-based multiplayer game, born out
            of the course Programmier Projekt at the University of Basel. Set on
            a randomly generated map players act as settlers aiming to colonize
            a nameless land.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            The game includes different factions to choose from and a variety of
            buildings, each with its own cost, resources per turn, and adjacency
            bonuses. For example, the Fusion Reactor is a marvel of advanced
            technology that produces more energy than anyone could wish for. The
            Extraction Drone is designed for gathering materials to gain an
            economic advantage. The Stock Exchange and Mall are centers for
            trading and selling products, resulting in a thriving economy.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            During gameplay, players manage resources and use strategic cards to
            gain advantages, such as revealing parts of the map, stealing
            production from a building, or even destroying an enemy building.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            The winner is the player who best manages their resources and
            successfully colonizes the nameless land.
          </p>
          <p className="text- pt-4 text-sm italic">
            exhibited at GLOBALE: inSonic2015 @ZKM Karlsruhe
          </p>
        </div>
        <div className={"relative w-2/3 flex-col items-center justify-center"}>
          <Image
            className={"!relative w-full object-contain"}
            src={"/images/namelesslands/gameplay.png"}
            alt={"Screenshot of Nameless Lands gameplay"}
            fill
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">PREMISE</h2>
          <p className="pt-4 text-lg tracking-wider">
            “The earth is overcrowded and its natural resources have almost been
            farmed to the last crumble. Luckily, scientists have found a new
            planet which is suitable for human life.
            <br /> Three nations dared the costly and difficult undertaking of
            colonizing the new world with its new, pure and yet unnamed lands
            with the goal of claiming as much of the planet as possible: Russia,
            China and the United States. All of them suspicious and eager to
            sabotage the others at any possible instance. You are in command of
            one of the colonies. It is your mission to spread your influence as
            quickly as possible! But be aware: others are near you. Try to halt
            their progress, or they will be able to claim the land as theirs!“
          </p>
        </div>
      </div>
    </>
  );
}
