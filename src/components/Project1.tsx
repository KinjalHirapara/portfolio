import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";

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
  sectionMaxWidthClass: string;
  cardBgClass: string;
  cardRadiusClass: string;
  pinnedHeightClass: string;
  imageHeightClass: string;
};

const PROJECT1_CONFIG: Project1Config = {
  initialYOffsetPercent: 70,
  inactiveScale: 0.7,
  inactiveBrightness: 0.75,
  transitionDuration: 1,
  zIndexLead: 2,
  zIndexSwapOffset: 0.01,
  scrollPaddingPercent: 20,
  minScrollPerCardPercent: 90,
  maxScrollPerCardPercent: 180,
  sectionMaxWidthClass: "max-w-6xl",
  cardBgClass: "bg-[#0e0e0e]",
  cardRadiusClass: "rounded-[clamp(18px,2.5vw,28px)]",
  pinnedHeightClass: "min-h-[100svh]",
  imageHeightClass: "min-h-[22rem] h-[clamp(22rem,70vh,48rem)]",
};

const Project1: React.FC = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

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
    if (reduceMotion) {
      return;
    }
    const pin = pinRef.current;
    if (!pin) {
      return;
    }
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
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
          zIndex: index + 1,
          opacity: 1,
          yPercent: index === 0 ? 0 : PROJECT1_CONFIG.initialYOffsetPercent,
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
  }, [reduceMotion]);

  return (
    <section
      ref={pinRef}
      id="projects"
      className={`relative z-10 min-h-[100dvh] ${PROJECT1_CONFIG.sectionMaxWidthClass} mx-auto flex flex-col px-4`}
    >
      <div className="text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-primary">
          <span className="numbered-heading">Projects</span>
        </h2>
        <p className="text-textLight/70 mt-2">
          Scroll to reveal each project card.
        </p>
      </div>

      <div
        className={`relative ${
          reduceMotion
            ? "flex flex-col gap-8"
            : `${PROJECT1_CONFIG.pinnedHeightClass} z-20 pt-4 md:pt-6`
        }`}
      >
        {projects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`${
              reduceMotion
                ? "relative"
                : "absolute left-1/2 top-0 -translate-x-1/2"
            } w-full ${PROJECT1_CONFIG.cardRadiusClass} overflow-hidden border border-white ${PROJECT1_CONFIG.cardBgClass} p-4`}
          >
            <div className={`relative ${PROJECT1_CONFIG.imageHeightClass}`}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 flex h-full items-end p-6 md:p-10">
                <div className="max-w-2xl">
                  <p className="text-4xl md:text-5xl font-bold text-textLight/90">
                    #{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-textLight mt-2">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm md:text-base mt-1">
                    {project.overline}
                  </p>
                  <p className="text-textLight/80 mt-4 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={`${tech}-${techIndex}`}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-textLight"
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
    </section>
  );
};

export default Project1;
