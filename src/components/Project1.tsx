import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Project1: React.FC = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
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
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) {
      return;
    }

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: index + 1,
          opacity: 1,
          yPercent: index === 0 ? 0 : 22,
          scale: index === 0 ? 1 : 0.98,
          filter: index === 0 ? "brightness(1)" : "brightness(0.85)",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${cards.length * 120}%`,
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
        const baseZ = cards.length + index + 2;
        timeline
          .to(
            card,
            {
              yPercent: -32,
              scale: 0.92,
              opacity: 1,
              filter: "brightness(0.75)",
              duration: 1,
              ease: "none",
            },
            index,
          )
          .set(card, { zIndex: baseZ - 1 }, index + 0.01)
          .set(next, { zIndex: baseZ }, index + 0.01)
          .to(
            next,
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              filter: "brightness(1)",
              duration: 1,
              ease: "none",
            },
            index,
          );
      });

      ScrollTrigger.refresh();
    }, pin);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      id="projects"
      className="relative z-10 min-h-[100dvh] max-w-6xl mx-auto flex flex-col px-4 py-[60px] lg:py-[40px] mobile-landscape-padding"
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
        ref={pinRef}
        className={`relative mt-10 ${
          reduceMotion
            ? "flex flex-col gap-8"
            : "h-[82vh] lg:h-[86vh] z-20"
        }`}
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`${
              reduceMotion
                ? "relative"
                : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            } w-full rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-[#0e0e0e]`}
          >
            <div className="relative h-[62vh] min-h-[380px] max-h-[520px]">
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
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
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
