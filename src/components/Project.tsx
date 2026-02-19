import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsChevronDoubleRight } from "react-icons/bs";
import { projects } from "../constants";
import ProjectGallery from "./ProjectGallery";

gsap.registerPlugin(ScrollTrigger);

type Project1Config = {
  initialYOffsetPercent: number;
  inactiveScale: number;
  inactiveBrightness: number;
  transitionDuration: number;
  zIndexLead: number;
  zIndexSwapOffset: number;
  scrollPaddingPercent: number;
  minScrollPerCardPercent: number;
  maxScrollPerCardPercent: number;
  contentMaxWidthClass: string;
  cardBgClass: string;
  cardRadiusClass: string;
  pinnedHeightClass: string;
  imageHeightClass: string;
};

const PROJECT1_CONFIG: Project1Config = {
  initialYOffsetPercent: 100,
  inactiveScale: 0.7,
  inactiveBrightness: 0.75,
  transitionDuration: 1,
  zIndexLead: 2,
  zIndexSwapOffset: 0.01,
  scrollPaddingPercent: 20,
  minScrollPerCardPercent: 90,
  maxScrollPerCardPercent: 180,
  contentMaxWidthClass: "max-w-6xl",
  cardBgClass: "bg-dark",
  cardRadiusClass: "rounded-[clamp(18px,2.5vw,28px)]",
  pinnedHeightClass: "min-h-[100svh]",
  imageHeightClass: "min-h-[22rem] h-[clamp(22rem,70vh,48rem)]",
};

const Project: React.FC = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const titleInView = useInView(titleRef, { amount: 0.4 });
  const titleControls = useAnimation();
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const shouldUseGsap = isLargeScreen && !reduceMotion;

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    );
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLargeScreen(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (!shouldUseGsap) {
      cards.forEach((card) => {
        gsap.set(card, { clearProps: "transform,filter,opacity,zIndex" });
      });
      return;
    }

    const pin = pinRef.current;
    if (!pin) {
      return;
    }
    if (!cards.length) {
      return;
    }

    const pinHeight = pin.clientHeight || window.innerHeight;
    const cardHeight = cards[0]?.clientHeight || pinHeight;
    const measuredScrollPerCard =
      (cardHeight / pinHeight) * 100 + PROJECT1_CONFIG.scrollPaddingPercent;
    const scrollPerCardPercent = gsap.utils.clamp(
      PROJECT1_CONFIG.minScrollPerCardPercent,
      PROJECT1_CONFIG.maxScrollPerCardPercent,
      measuredScrollPerCard,
    );

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: cards.length - index,
          opacity: 1,
          yPercent:
            index === 0 ? 0 : index * PROJECT1_CONFIG.initialYOffsetPercent,
          scale: 1,
          filter: "brightness(1)",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${cards.length * scrollPerCardPercent}%`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) {
          return;
        }
        const next = cards[index + 1];
        const baseZ = cards.length + index + PROJECT1_CONFIG.zIndexLead;
        timeline
          .to(
            card,
            {
              yPercent: 0,
              scale: PROJECT1_CONFIG.inactiveScale,
              opacity: 1,
              filter: `brightness(${PROJECT1_CONFIG.inactiveBrightness})`,
              duration: PROJECT1_CONFIG.transitionDuration,
              ease: "none",
            },
            index,
          )
          .set(
            card,
            { zIndex: baseZ - 1 },
            index + PROJECT1_CONFIG.zIndexSwapOffset,
          )
          .set(
            next,
            { zIndex: baseZ },
            index + PROJECT1_CONFIG.zIndexSwapOffset,
          )
          .to(
            next,
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              filter: "brightness(1)",
              duration: PROJECT1_CONFIG.transitionDuration,
              ease: "none",
            },
            index,
          );
      });
    }, pin);

    return () => ctx.revert();
  }, [shouldUseGsap]);

  return (
    <section
      ref={pinRef}
      id="projects"
      className="relative z-10 w-full bg-dark text-textDark"
    >
      <div
        className={`mx-auto flex min-h-[100dvh] w-full ${PROJECT1_CONFIG.contentMaxWidthClass} flex-col px-4 pt-[100px]`}
      >
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleControls}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-[30px] text-center"
        >
          <h2 className="numbered-heading uppercase text-2xl md:text-3xl font-bold text-primary">
            Projects
          </h2>
        </motion.div>

        <div
          className={`relative ${
            shouldUseGsap
              ? `${PROJECT1_CONFIG.pinnedHeightClass} z-20 pt-4 md:pt-6 overflow-hidden`
              : "flex flex-col gap-8"
          }`}
        >
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`${
                shouldUseGsap
                  ? "absolute left-1/2 top-0 -translate-x-1/2"
                  : "relative"
              } w-full ${PROJECT1_CONFIG.cardRadiusClass} overflow-hidden ${shouldUseGsap ? "border border-primary" : "border-0"} ${PROJECT1_CONFIG.cardBgClass} p-4`}
            >
              <div
                className={`relative ${shouldUseGsap ? PROJECT1_CONFIG.imageHeightClass : ""}`}
              >
                <div className="h-full flex flex-col lg:flex-row gap-6">
                  <ProjectGallery
                    title={project.title}
                    images={
                      project.gallery && project.gallery.length > 0
                        ? project.gallery
                        : [project.image]
                    }
                    externalLink={project.external}
                    disableGallery={Boolean(project.external)}
                    className={`${shouldUseGsap ? "h-full" : "min-h-[220px] aspect-[16/10]"} flex-1 w-full lg:w-[60%]`}
                  />
                  <div className="w-full lg:w-[40%] flex-shrink-0">
                    <h3 className="text-xl md:text-2xl font-bold text-textLight mt-2">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm md:text-base">
                      {project.overline}
                    </p>
                    <p className="text-textLight/80 mt-4 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    {project.contributions && project.contributions.length > 0 && (
                      <div className="mt-4">
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed text-textLight/80">
                          {project.contributions.map((item, idx) => (
                            <li
                              key={`${project.title}-contribution-${idx}`}
                              className="flex items-start gap-2 text-left"
                            >
                              <BsChevronDoubleRight className="mt-[5px] h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={`${tech}-${techIndex}`}
                          className="rounded-full border border-light/20 bg-light/10 px-3 py-1 text-xs text-textlight dark:text-textLight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
