"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "~/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { links, projects } from "~/lib/data/projects";
import ProjectItem from "~/components/ProjectItem";
import useMouseMovement from "~/hooks/useMouseMovement";
import { HeaderContext } from "~/contexts/HeaderContext";
import useAnimatedValue from "~/hooks/useAnimatedValue";
import { scale } from "~/lib/utils";
import useScrollScaling from "~/hooks/useScrollScaling";
import { useTheme } from "next-themes";
import ProjectLink from "~/components/ProjectLink";
import NoCursorWindow from "~/components/NoCursorWindow";
import Footer from "~/components/Footer";
import { AppContext } from "~/contexts/AppContext";

export type HomeProps = {
  isSsrMobile: boolean;
  positions: { row: number; col: number }[];
};

const MIN_HOLE_SIZE = 20;
const MAX_HOLE_SIZE = 500;
const MIN_HIGHLIGHT_SIZE = 80;
const MAX_HIGHLIGHT_SIZE = 120;

// the bigger the diff in holeSize, the longer the transition
const getScaledDuration = (holeSize: number) => {
  const value = Math.abs(holeSize - MAX_HIGHLIGHT_SIZE);
  return scale(value, 0, MAX_HOLE_SIZE - MIN_HOLE_SIZE, 100, 300);
};

export default function HomePage({ isSsrMobile, positions }: HomeProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isFrozen, setIsFrozen] = useState(false);
  const [canScale, setCanScale] = useState(true);

  const { animateTitle } = useContext(HeaderContext);
  const { isFirstLoad, setIsFirstLoad, projectsVisible, setProjectsVisible } =
    useContext(AppContext);
  const { coordinates, setCoordinates } = useMouseMovement(isFrozen);
  const [multiplier, setMultiplier] = useAnimatedValue(1);
  const [holeSize, animateHoleSize] = useScrollScaling(
    canScale,
    MIN_HOLE_SIZE,
    MAX_HOLE_SIZE,
  );

  const isEyeOpen = searchParams.get("eyeOpen") === "true";

  useEffect(() => {
    setProjectsVisible(true);
    if (isFirstLoad) {
      setCanScale(false);
      animateHoleSize(40, 1500, window.innerHeight / 1.2);
      setCoordinates({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setTimeout(() => {
        setCanScale(true);
        setIsFirstLoad(false);
      }, 1500);
    }
  }, []);

  const handleItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setProjectsVisible(false);
    setIsFrozen(true);
    setMultiplier(0, 0);
    animateTitle();
    setTimeout(() => {
      router.push(href);
      setIsFrozen(false);
    }, 300);
  };

  const handleLinkEnter = () => {
    if (!canScale) return;
    setCanScale(false);
    const newHoleSize = scale(
      window.innerWidth,
      300,
      1024,
      MIN_HIGHLIGHT_SIZE,
      MAX_HIGHLIGHT_SIZE,
    );
    setMultiplier(newHoleSize / holeSize, getScaledDuration(holeSize));
  };

  const handleLinkLeave = () => {
    setCanScale(true);
    setMultiplier(1, getScaledDuration(holeSize));
  };

  const handleLinkClick = (e: React.MouseEvent, url: string, color: string) => {
    e.preventDefault();
    animateTitle(theme === "neon" ? color : undefined);
    setIsFrozen(true);
    animateHoleSize(0.01, 250);
    setTimeout(() => {
      router.push(`${url}?titleColor=${theme === "neon" ? color : "header"}`);
      setIsFrozen(false);
    }, 300);
  };

  return (
    <div className="relative">
      <Suspense fallback={null}>
        <Header
          onMouseEnter={() => !isFirstLoad && setMultiplier(0.01, 100)}
          onMouseLeave={() => setMultiplier(1, 100)}
          isSsrMobile={isSsrMobile}
          initialTitle="Samuel Emde"
        />
      </Suspense>
      <AnimatePresence mode="wait">
        {((isEyeOpen && projectsVisible) || isSsrMobile) && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center p-8"
          >
            <div className="grid h-fit w-full grid-cols-1 items-center justify-center gap-16 py-44 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(projects).map((project) => (
                <ProjectItem
                  key={project.title}
                  project={project}
                  onMouseEnter={() => setMultiplier(0.01, 0)}
                  onMouseLeave={() => !isFrozen && setMultiplier(1, 0)}
                  onClick={(e) => handleItemClick(e, project.href)}
                  isSsrMobile={isSsrMobile}
                />
              ))}
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      {!isEyeOpen && !isSsrMobile && (
        <div className="relative grid h-screen w-screen cursor-none grid-cols-8 grid-rows-7 items-center justify-center overflow-hidden bg-inversebg pt-24">
          <NoCursorWindow />
          {links.map((link, index) => {
            const { row, col } = positions[index]!;
            return (
              <ProjectLink
                key={link.title}
                link={link}
                col={col}
                row={row}
                onMouseEnter={handleLinkEnter}
                onMouseLeave={handleLinkLeave}
                onClick={(e, href, color) =>
                  handleLinkClick(e, href, color.toString())
                }
              />
            );
          })}
          <div
            id="flashlight-overlay"
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              backgroundImage: `radial-gradient(circle ${
                holeSize * multiplier
              }px at ${coordinates.x}px ${
                coordinates.y
              }px, transparent 90%, hsl(var(--background)))`,
            }}
          />
        </div>
      )}
    </div>
  );
}
