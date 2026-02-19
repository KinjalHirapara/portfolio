import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Button";

type ProjectGalleryProps = {
  title: string;
  images: string[];
  externalLink?: string;
  disableGallery?: boolean;
  hideDotsOnSmall?: boolean;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  title,
  images,
  externalLink,
  disableGallery = false,
  hideDotsOnSmall = false,
  className = "",
  imageClassName = "",
  overlayClassName = "",
}) => {
  const galleryImages = useMemo(() => {
    return images.length > 0 ? images : [""];
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const hasControls = !disableGallery && galleryImages.length > 1;
  const activeImage = disableGallery
    ? galleryImages[0]
    : galleryImages[activeIndex] ?? galleryImages[0];

  const goNext = () => {
    if (!hasControls) {
      return;
    }
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    if (!hasControls) {
      return;
    }
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const setImageAt = (index: number) => {
    if (!hasControls || index === activeIndex) {
      return;
    }
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {hasControls ? (
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={`${title}-${activeIndex}`}
            src={activeImage}
            alt={`${title} preview ${activeIndex + 1}`}
            loading="lazy"
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`absolute inset-0 h-full w-full object-contain ${imageClassName}`}
          />
        </AnimatePresence>
      ) : (
        <img
          src={activeImage}
          alt={`${title} preview`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-contain ${imageClassName}`}
        />
      )}

      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl ${overlayClassName}`}
      />
      {externalLink && (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} project`}
          className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-black/55 text-white backdrop-blur transition-colors hover:border-primary hover:text-primary"
        >
          <FaExternalLinkAlt className="h-3.5 w-3.5" />
        </a>
      )}

      {hasControls && (
        <>
          <Button
            type="button"
            onClick={goPrev}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/55 text-white backdrop-blur"
            aria-label={`Previous ${title} image`}
          >
            <FaChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            onClick={goNext}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/55 text-white backdrop-blur"
            aria-label={`Next ${title} image`}
          >
            <FaChevronRight className="h-4 w-4" />
          </Button>
          <motion.div
            key={`${title}-counter-${activeIndex}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-3 z-20 rounded-full border border-white/35 bg-black/55 px-3 py-1 text-xs text-white backdrop-blur ${
              externalLink ? "right-12" : "right-3"
            }`}
          >
            {activeIndex + 1}/{galleryImages.length}
          </motion.div>
          <div
            className={`absolute bottom-3 left-1/2 z-20 -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 backdrop-blur ${
              hideDotsOnSmall ? "hidden lg:flex" : "flex"
            }`}
          >
            {galleryImages.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <Button
                  key={`${title}-dot-${index}`}
                  type="button"
                  onClick={() => setImageAt(index)}
                  className="group p-0.5"
                  aria-label={`Show ${title} image ${index + 1}`}
                >
                  <motion.span
                    animate={{
                      width: isActive ? 18 : 7,
                      opacity: isActive ? 1 : 0.6,
                      backgroundColor: isActive
                        ? "rgb(255 255 255)"
                        : "rgb(156 163 175)",
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="block h-1.5 rounded-full"
                  />
                </Button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
