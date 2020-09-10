import React, { useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

const viewportCss = {
  overflow: "hidden",
};
const containerCss = {
  display: "flex",
};
const slideCss = {
  position: "relative",
  minWidth: "100%",
};

export const EmblaCarousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  console.log(children);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div style={viewportCss} ref={emblaRef}>
      <div style={containerCss}>
        {children.map((child) => (
          <div key={child.key} style={slideCss}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
