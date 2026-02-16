import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ProjectGalleryProps = {
  title: string;
  images: string[];
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  title,
  images,
  className = "",
  imageClassName = "",
  overlayClassName = "",
}) => {
  const galleryImages = useMemo(() => {
    return images.length > 0 ? images : [""];
  }, [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const hasControls = galleryImages.length > 1;
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

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
    if (index === activeIndex) {
      return;
    }
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={`${title}-${activeIndex}`}
          src={activeImage}
          alt={`${title} preview ${activeIndex + 1}`}
          loading="lazy"
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 28 : -28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction > 0 ? -28 : 28, scale: 0.98 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 h-full w-full object-contain ${imageClassName}`}
        />
      </AnimatePresence>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25 ${overlayClassName}`}
      />
      {hasControls && (
        <>
          <motion.button
            type="button"
            onClick={goPrev}
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/55 text-white backdrop-blur"
            aria-label={`Previous ${title} image`}
          >
            <FaChevronLeft className="h-4 w-4" />
          </motion.button>
          <motion.button
            type="button"
            onClick={goNext}
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/55 text-white backdrop-blur"
            aria-label={`Next ${title} image`}
          >
            <FaChevronRight className="h-4 w-4" />
          </motion.button>
          <motion.div
            key={`${title}-counter-${activeIndex}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute right-3 top-3 z-20 rounded-full border border-white/35 bg-black/55 px-3 py-1 text-xs text-white backdrop-blur"
          >
            {activeIndex + 1}/{galleryImages.length}
          </motion.div>
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 backdrop-blur">
            {galleryImages.map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
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
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
