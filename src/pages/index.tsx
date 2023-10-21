import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import useAnimatedValue from "~/lib/hooks/useAnimatedValue";
import { cn, projectColors, scale, shuffle } from "~/lib/utils";
import { useRouter } from "next/router";
import Header from "~/components/Header";
import { useTheme } from "next-themes";
import { HeaderContext } from "~/contexts/HeaderContext";
import { projects } from "~/lib/projects";
import { useIsMobile } from "~/lib/hooks/useIsMobile";
import { type GetServerSidePropsContext } from "next";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { StartAnimationContext } from "~/contexts/StartAnimationContext";

const MIN_HOLE_SIZE = 20;
const HIGHLIGHT_SIZE = 130;
const MAX_HOLE_SIZE = 600;

export type HomeProps = {
  positions: { row: number; col: number }[];
  colors: string[];
};

export default function Home({ positions }: HomeProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const [coordinates, setCoordinates] = useState({ x: -100, y: 0 });
  const [canScale, setCanScale] = useState(true);
  const [isFrozen, setIsFrozen] = useState(false);
  const { isFirstLoad, setIsFirstLoad } = useContext(StartAnimationContext);
  const { animate } = useContext(HeaderContext);

  const [holeSize, animateHoleSize, setHoleSize] = useAnimatedValue(40);
  const [multiplier, setMultiplier] = useAnimatedValue(1);

  if (isMobile) redirect("/projects", RedirectType.replace);

  useEffect(() => {
    if (isFirstLoad) {
      animateHoleSize(40, 1500, window.innerHeight / 1.2);
      setCoordinates({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setIsFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("cursor-none");

    return () => document.documentElement.classList.remove("cursor-none");
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (isFrozen) return;
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isFrozen]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!canScale) return;
      const delta = e.deltaY * 0.2;
      const newHoleSize = Math.max(
        MIN_HOLE_SIZE,
        Math.min(MAX_HOLE_SIZE, holeSize + delta),
      );
      setHoleSize(newHoleSize);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [holeSize, setHoleSize, canScale]);

  const handleClick = (
    e: React.MouseEvent,
    url: string,
    titleColor: string,
  ) => {
    e.preventDefault();
    animate();
    setIsFrozen(true);
    animateHoleSize(0, 250);
    setTimeout(() => {
      void router.push({
        pathname: url,
        query: theme === "neon" ? { titleColor } : {},
      });
      setIsFrozen(false);
    }, 250);
  };

  // the bigger the diff in holeSize, the longer the transition
  const getScaledDuration = () => {
    const value = Math.abs(holeSize - HIGHLIGHT_SIZE);
    return scale(value, 0, MAX_HOLE_SIZE - MIN_HOLE_SIZE, 100, 300);
  };

  return (
    <div className="relative">
      <Header
        initialTitle={"Samuel Emde"}
        onMouseEnter={() => setMultiplier(0, 100)}
        onMouseLeave={() => setMultiplier(1, 100)}
      />
      <div className="grid-rows-7 relative grid h-screen w-screen cursor-none grid-cols-8 items-center justify-center bg-inversebg pt-24">
        {Object.values(projects).map(({ title, href }, index) => {
          const { row, col } = positions[index]!;
          return (
            <Link
              dangerouslySetInnerHTML={{ __html: title }}
              key={title}
              href={href}
              className={cn(
                "col-span-2 cursor-none p-4 font-heading text-sm font-bold uppercase transition-all duration-700 ease-in-out hover:-skew-x-[22deg] md:text-2xl lg:text-3xl",
                { "break-words": col === 7 },
                projectColors[row - 1],
              )}
              style={{
                gridRowStart: row,
                gridColumnStart: col,
              }}
              onMouseEnter={() => {
                setCanScale(false);
                setMultiplier(HIGHLIGHT_SIZE / holeSize, getScaledDuration());
              }}
              onMouseLeave={() => {
                setCanScale(true);
                setMultiplier(1, getScaledDuration());
              }}
              onClick={(event) =>
                handleClick(event, href, projectColors[row - 1]!)
              }
            />
          );
        })}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage: `radial-gradient(circle ${
              holeSize * multiplier
            }px at ${coordinates.x}px ${
              coordinates.y
            }px, transparent 80%, hsl(var(--background)) 100%)`,
          }}
        />
      </div>
    </div>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const rows = shuffle(
    Array.from({ length: Object.keys(projects).length }, (_, i) => i + 1),
  );
  const cols = shuffle(
    Array.from({ length: Object.keys(projects).length }, (_, i) => i + 1),
  );
  const positions = rows.map((row, index) => ({ row, col: cols[index] }));

  const isSsrMobile = getIsSsrMobile(context);
  if (isSsrMobile)
    return {
      redirect: {
        destination: "/projects",
        permanent: false,
      },
    };
  return { props: { positions, isSsrMobile } };
}
