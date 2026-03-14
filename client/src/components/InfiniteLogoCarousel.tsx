import { useCallback, useEffect, useMemo, useRef } from "react";
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
  slideWidth?: number;
  slideGap?: number;
  pauseOnHover?: boolean;
  showColorOnHover?: boolean;
  invertLogos?: boolean;
  className?: string;
}

export default function InfiniteLogoCarousel({
  logos,
  speed = 1,
  logoHeight = 40,
  slideWidth = 192,
  slideGap = 48,
  pauseOnHover = false,
  showColorOnHover = false,
  invertLogos = false,
  className = "",
}: InfiniteLogoCarouselProps) {
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(null);

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
        stopOnInteraction: true,
        stopOnMouseEnter: pauseOnHover,
      }),
    ]
  );

  const handlePointerUp = useCallback(() => {
    if (!emblaApi) return;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll) autoScroll.play();
    }, 2000);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerUp", handlePointerUp);
    return () => {
      emblaApi.off("pointerUp", handlePointerUp);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [emblaApi, handlePointerUp]);

  const getInvertFilter = (logo: Logo) => {
    if (!invertLogos) return undefined;
    if (logo.needsInvert) return "invert(1) grayscale(1)";
    return "brightness(0) invert(1)";
  };

  if (logos.length === 0) return null;

  return (
    <div className={`overflow-hidden cursor-grab active:cursor-grabbing ${className}`} ref={emblaRef}>
      <div className="flex" style={{ gap: slideGap }}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="shrink-0 flex items-center justify-center"
            style={{ width: slideWidth, height: logoHeight }}
          >
            {showColorOnHover && logo.website ? (
              <a
                href={logo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center w-full"
                style={{ height: logoHeight }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                    filter: logo.needsInvert
                      ? "invert(1) grayscale(1) contrast(1.1)"
                      : "grayscale(1) contrast(1.1)",
                  }}
                />
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="absolute inset-0 max-h-full max-w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-auto"
                  style={{
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                  }}
                />
              </a>
            ) : logo.website ? (
              <a
                href={logo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
                style={{ height: logoHeight }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                    filter: getInvertFilter(logo),
                  }}
                />
              </a>
            ) : (
              <div
                className="flex items-center justify-center w-full"
                style={{ height: logoHeight }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    transform: logo.scale ? `scale(${logo.scale})` : undefined,
                    filter: getInvertFilter(logo),
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
