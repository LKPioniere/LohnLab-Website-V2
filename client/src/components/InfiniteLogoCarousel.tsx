import { useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface Logo {
  name: string;
  src: string;
  scale?: number;
  website?: string;
  needsInvert?: boolean;
  needsBgRemove?: boolean;
}

interface InfiniteLogoCarouselProps {
  logos: Logo[];
  speed?: number;
  logoHeight?: number;
  pauseOnHover?: boolean;
  showColorOnHover?: boolean;
  className?: string;
}

export default function InfiniteLogoCarousel({
  logos,
  speed = 1,
  logoHeight = 40,
  pauseOnHover = true,
  showColorOnHover = false,
  className = "",
}: InfiniteLogoCarouselProps) {
  const duplicatedLogos = useMemo(() => {
    if (logos.length === 0) return [];
    const minSlides = 12;
    const repeats = Math.ceil(minSlides / logos.length);
    const result: Logo[] = [];
    for (let i = 0; i < repeats; i++) {
      result.push(...logos);
    }
    return result;
  }, [logos]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: pauseOnHover,
      }),
    ]
  );

  const handlePointerUp = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.play();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerUp", handlePointerUp);
    return () => {
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, handlePointerUp]);

  if (logos.length === 0) return null;

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="shrink-0 flex items-end justify-center px-4 md:px-6"
            style={{ minWidth: "33.333%", maxWidth: "25%" }}
          >
            {showColorOnHover && logo.website ? (
              <a
                href={logo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-end justify-center"
                style={{ height: logoHeight }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    maxHeight: logoHeight,
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                    filter: logo.needsInvert
                      ? "invert(1) brightness(0) contrast(1.2)"
                      : "brightness(0) contrast(1.2)",
                  }}
                />
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="absolute inset-0 h-full w-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto"
                  style={{
                    maxHeight: logoHeight,
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                  }}
                />
              </a>
            ) : (
              <div
                className="flex items-end justify-center"
                style={{ height: logoHeight }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain"
                  style={{
                    maxHeight: logoHeight,
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
