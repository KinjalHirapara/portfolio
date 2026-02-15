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
}) => {
  const galleryImages = useMemo(() => {
    return images.length > 0 ? images : [""];
  }, [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasControls = galleryImages.length > 1;
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  const goNext = () => {
    if (!hasControls) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    if (!hasControls) {
      return;
    }
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={activeImage}
        alt={`${title} preview ${activeIndex + 1}`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-contain ${imageClassName}`}
      />
      {hasControls && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white"
            aria-label={`Previous ${title} image`}
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white"
            aria-label={`Next ${title} image`}
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute right-0 top-0 z-10 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs text-white">
            {activeIndex + 1}/{galleryImages.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
