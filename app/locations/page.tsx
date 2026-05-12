"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

type Location = {
  name: string;
  shortName: string;
  address: string;
  phone: string;
  hours: string;
  is24_7?: boolean;
  images: string[];
};

const LOCATIONS: Location[] = [
  {
    name: "Al Raffa Branch",
    shortName: "Al Raffa",
    address: "Ground Floor, Al Rumaithy Building, Al Raffa, Dubai",
    phone: "+971 56 873 9633",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: [
      "/images/Alrafa/DSC08903.jpg",
      "/images/Alrafa/DSC08875.JPG",
      "/images/Alrafa/DSC08880.JPG",
      "/images/Alrafa/DSC08881.JPG",
      "/images/Alrafa/DSC08882.JPG",
      "/images/Alrafa/DSC08893.JPG",
      "/images/Alrafa/DSC08894.JPG",
      "/images/Alrafa/DSC08902.JPG",
    ],
  },
  {
    name: "Al Mankhool Branch",
    shortName: "Al Mankhool",
    address:
      "1st Floor, Al Jawhara Building (Next to ADCB Bank), Al Mankhool, Dubai",
    phone: "+971 56 891 0323",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: [
      "/images/AlMoukhool/DSC08922.JPG",
      "/images/AlMoukhool/DSC08918.JPG",
      "/images/AlMoukhool/DSC08919.JPG",
      "/images/AlMoukhool/DSC08921.JPG",
      "/images/AlMoukhool/DSC08925.JPG",
    ],
  },
  {
    name: "Al Garhoud Branch",
    shortName: "Al Garhoud",
    address: "2nd St – Al Garhoud, Dubai, United Arab Emirates",
    phone: "+971 54 250 8119",
    hours: "Open 24/7",
    is24_7: true,
    images: [
      "/images/Garhoud/DSC09192.JPG.jpeg",
      "/images/Garhoud/DSC04610.JPG.jpeg",
      "/images/Garhoud/DSC04612.JPG.jpeg",
      "/images/Garhoud/DSC04618.JPG.jpeg",
      "/images/Garhoud/DSC04621.JPG.jpeg",
      "/images/Garhoud/DSC09190.JPG.jpeg",
      "/images/Garhoud/DSC09191.JPG.jpeg",
      "/images/Garhoud/DSC09194.JPG.jpeg",
      "/images/Garhoud/DSC09200.JPG.jpeg",
      "/images/Garhoud/DSC09201.JPG.jpeg",
      "/images/Garhoud/DSC09206.JPG.jpeg",
      "/images/Garhoud/DSC09211.JPG.jpeg",
      "/images/Garhoud/DSC09213.JPG.jpeg",
      "/images/Garhoud/DSC09216.JPG.jpeg",
      "/images/Garhoud/DSC09222.JPG.jpeg",
    ],
  },
  {
    name: "Al Rolla Branch",
    shortName: "Al Rolla",
    address: "HC Floor, New Al Madina Supermarket Building, Al Rolla, Dubai",
    phone: "+971 54 245 7211",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: ["/images/AlRolla/AlRolla1.jpeg", "/images/AlRolla/AllRolla2.jpeg"],
  },
  {
    name: "Oudmehtha Branch",
    shortName: "Oudmehtha",
    address: "Street 9A – Oud Metha, Dubai, United Arab Emirates",
    phone: "+971 52 777 6353",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: [
      "/images/Oudmehtha/Oud1.jpeg",
      "/images/Oudmehtha/Oud2.jpeg",
      "/images/Oudmehtha/Oud3.jpeg",
      "/images/Oudmehtha/Oud4.jpeg",
      "/images/Oudmehtha/Oud5.jpeg",
      "/images/Oudmehtha/Oud6.jpeg",
      "/images/Oudmehtha/Oud7.jpeg",
      "/images/Oudmehtha/Oud8.jpeg",
      "/images/Oudmehtha/Oud9.jpeg",
      "/images/Oudmehtha/Oud10.jpeg",
      "/images/Oudmehtha/Oud11.jpeg",
      "/images/Oudmehtha/Oud12.jpeg",
    ],
  },
  {
    name: "Al Gubaiba Branch",
    shortName: "Al Gubaiba",
    address:
      "Opposite Hotel Hydepark – HC Floor, near Al Gubaiba Bus Station, Bur Dubai",
    phone: "+971 54 592 4155",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: [
      "/images/AlGubaiba/DSC09599 copy.jpg.jpeg",
      "/images/AlGubaiba/DSC09607 copy.jpg.jpeg",
      "/images/AlGubaiba/DSC09611.JPG.jpeg",
      "/images/AlGubaiba/DSC09619 copy.jpg.jpeg",
      "/images/AlGubaiba/DSC09626 copy.jpg.jpeg",
      "/images/AlGubaiba/DSC09633 copy.jpg.jpeg",
      "/images/AlGubaiba/DSC09646 copy.jpg.jpeg",
    ],
  },
  {
    name: "Silicon Oasis Branch",
    shortName: "Silicon Oasis",
    address:
      "SIT Tower, Silicon Oasis, 110, first floor SIT Tower – Nadd Hessa, Dubai Silicon Oasis, Dubai, UAE",
    phone: "+971 55 992 3356",
    hours: "Mon–Fri: 6:00 AM – 10:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
    images: ["/images/SiliconOasis/Oasis.jpeg"],
  },
];

const mapsHref = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Hook: returns true once the element has entered the viewport (with margin),
// and stays true after that. Used to lazy-mount heavy gallery content.
function useHasBeenVisible<T extends Element>(rootMargin = "300px") {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return [ref, visible] as const;
}

// Hook: returns whether the element is currently intersecting (live).
function useIsVisible<T extends Element>(rootMargin = "200px") {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isVisible] as const;
}

// Fades the active carousel image in on load. The previous image stays
// painted underneath until the new one is ready.
function CarouselImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1100px"
      className={`object-cover transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      onLoad={() => setLoaded(true)}
    />
  );
}

// Lazy thumbnail using native <img loading="lazy">. With Next config
// `images.unoptimized: true`, Next/Image offers no transform — plain img
// loads less HTML/JS per thumbnail and respects the browser lazy heuristic.
function Thumb({
  src,
  alt,
  active,
  onClick,
}: {
  src: string;
  alt: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 w-20 h-16 sm:w-24 sm:h-[72px] rounded-lg overflow-hidden transition-all duration-300 border-2 ${
        active
          ? "border-[var(--color-primary)] scale-105 shadow-lg shadow-[var(--color-primary)]/30"
          : "border-white/10 hover:border-white/40 opacity-70 hover:opacity-100"
      }`}
      aria-label={alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="object-cover w-full h-full"
      />
    </button>
  );
}

// Full-screen lightbox with keyboard nav.
function Lightbox({
  images,
  index,
  alt,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} gallery`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white">
        <div className="text-sm sm:text-base font-medium opacity-80">
          {alt} · {index + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Close gallery"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 pb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[index]}
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="max-w-full max-h-full object-contain animate-fade-in"
          decoding="async"
        />

        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function LocationCard({
  location,
  index,
  onJump,
}: {
  location: Location;
  index: number;
  onJump: () => void;
}) {
  const hasImages = location.images.length > 0;
  return (
    <button
      onClick={onJump}
      className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] xl:w-[calc(25%-18px)] bg-white/[0.04] hover:bg-white/[0.08] rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/40 overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
        {hasImages ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={location.images[0]}
            alt={location.name}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
            Photos coming soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {location.is24_7 && (
          <div className="absolute top-3 right-3 bg-[var(--color-primary)] text-black px-2.5 py-1 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            24/7
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-primary)] font-semibold mb-1">
            Branch {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-bold text-white leading-tight">
            {location.shortName}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed min-h-[2.5rem]">
          {location.address}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[var(--color-primary)] text-xs font-semibold">
          <span>View details</span>
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

function LocationSection({
  location,
  index,
  sectionRef,
}: {
  location: Location;
  index: number;
  sectionRef: (el: HTMLElement | null) => void;
}) {
  const hasImages = location.images.length > 0;
  const hasMultiple = location.images.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lazy-mount thumbnails only when section is near viewport.
  const [thumbsRef, thumbsVisible] = useHasBeenVisible<HTMLDivElement>("400px");

  // Track visibility for auto-rotation gating.
  const [visibilityRef, isVisible] = useIsVisible<HTMLDivElement>("100px");

  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        location.images.length ? (i + 1) % location.images.length : 0
      ),
    [location.images.length]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        location.images.length
          ? (i - 1 + location.images.length) % location.images.length
          : 0
      ),
    [location.images.length]
  );

  useEffect(() => {
    if (!hasMultiple || paused || !isVisible) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [hasMultiple, paused, isVisible, next]);

  return (
    <section
      ref={(el) => {
        sectionRef(el);
      }}
      id={`branch-${slugify(location.shortName)}`}
      data-location-index={index}
      className="relative scroll-mt-24 bg-gradient-to-br from-white/[0.04] to-white/[0.02] rounded-3xl border border-white/10 overflow-hidden shadow-xl"
    >
      {/* Decorative accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold mb-2">
              Branch {String(index + 1).padStart(2, "0")}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {location.name}
            </h2>
          </div>
          {location.is24_7 && (
            <span className="self-start lg:self-auto bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Open 24/7
            </span>
          )}
        </div>

        {/* Main visual area */}
        <div
          ref={visibilityRef}
          className="relative mb-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {hasImages ? (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black/40">
              <CarouselImage
                src={location.images[activeIndex]}
                alt={`${location.name} – Image ${activeIndex + 1}`}
                priority={index < 2}
              />

              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                {activeIndex + 1} / {location.images.length}
              </div>

              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-3 left-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition"
                aria-label="View full gallery"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                Expand
              </button>
            </div>
          ) : (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
              <div className="text-center px-6">
                <svg
                  className="w-12 h-12 mx-auto text-gray-600 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-300 text-base font-medium">
                  Photos coming soon
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Visit us in person to experience the space.
                </p>
              </div>
            </div>
          )}

          {/* Thumbnail rail — only mounted when section is near viewport */}
          {hasMultiple && (
            <div ref={thumbsRef} className="mt-4 min-h-[72px] sm:min-h-[80px]">
              {thumbsVisible && (
                <div className="flex gap-2 overflow-x-auto py-1 px-1 scrollbar-thin">
                  {location.images.map((img, i) => (
                    <Thumb
                      key={img}
                      src={img}
                      alt={`${location.name} thumbnail ${i + 1}`}
                      active={activeIndex === i}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <a
            href={mapsHref(location.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[var(--color-primary)]/40 rounded-xl p-4 transition"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Address
              </div>
              <div className="text-gray-100 text-sm leading-relaxed">
                {location.address}
              </div>
              <div className="mt-1.5 text-[var(--color-primary)] text-xs font-semibold flex items-center gap-1 opacity-80 group-hover:opacity-100">
                Get directions
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>

          <a
            href={`tel:${location.phone.replace(/\s+/g, "")}`}
            className="group flex items-start gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[var(--color-primary)]/40 rounded-xl p-4 transition"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Phone
              </div>
              <div className="text-gray-100 text-sm font-semibold">
                {location.phone}
              </div>
              <div className="mt-1.5 text-[var(--color-primary)] text-xs font-semibold opacity-80 group-hover:opacity-100">
                Tap to call
              </div>
            </div>
          </a>

          <div className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-xl p-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Hours
              </div>
              <div className="text-gray-100 text-sm leading-relaxed">
                {location.hours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && hasImages && (
        <Lightbox
          images={location.images}
          index={activeIndex}
          alt={location.name}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

export default function Locations() {
  const locations = useMemo(() => LOCATIONS, []);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToLocation = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const totalImages = locations.reduce((sum, l) => sum + l.images.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] to-[var(--color-dark)]">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-card)] to-[var(--color-primary)]/5" />
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 1.5px, transparent 1.5px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[var(--color-primary)]/30 to-transparent rounded-br-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[var(--color-primary)]/25 to-transparent rounded-tl-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold tracking-[0.18em] uppercase mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Across Dubai
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
              Our{" "}
              <span className="text-[var(--color-primary)]">Locations</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Seven premium fitness centers across Dubai. Choose your nearest
              branch to explore the space, see hours, and get directions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {locations.length}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Premium Locations
                </div>
              </div>
              <div className="w-px bg-white/15 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {totalImages}+
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Gallery Photos
                </div>
              </div>
              <div className="w-px bg-white/15 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  At Al Garhoud
                </div>
              </div>
            </div>
          </div>

          {/* Quick-nav grid */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {locations.map((location, index) => (
              <LocationCard
                key={location.name}
                location={location}
                index={index}
                onJump={() => scrollToLocation(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <main className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {locations.map((location, index) => (
            <LocationSection
              key={location.name}
              location={location}
              index={index}
              sectionRef={(el) => {
                sectionRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Can&apos;t decide which branch?
          </h3>
          <p className="text-gray-400 mb-6">
            Reach out and our team will help you find the most convenient
            location for your routine.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--color-primary)]/30"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
