"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Locations() {
  const locations = [
    {
      name: "Al Raffa Branch",
      address: "Ground Floor, Al Rumaithy Building, Al Raffa, Dubai",
      phone: "+971 56 873 9633",
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
      address: "1st Floor, Al Jawhara Building (Next to ADCB Bank), Al Mankhool, Dubai",
      phone: "+971 56 891 0323",
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
      address: "2nd St - Al Garhoud - Dubai - United Arab Emirates",
      phone: "+971 54 250 8119",
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
    // {
    //   name: "Al Mamzar Branch",
    //   address: "1st Floor, Al Jaseera Building, Opp. Al Mulla Plaza, Al Mamzar, Dubai",
    //   phone: "+971 54 250 8119",
    //   images: [
    //     "/images/AlMamzar/1.jpg",
    //     "/images/AlMamzar/2.jpg",
    //     "/images/AlMamzar/3.jpg",
    //     "/images/AlMamzar/4.jpg",
    //     "/images/AlMamzar/5.jpg",
    //     "/images/AlMamzar/6.jpg",
    //   ],
    // },
    {
      name: "Al Rolla Branch",
      address: "HC Floor, New Al Madina Supermarket Building, Al Rolla, Dubai",
      phone: "+971 54 245 7211",
      images: [
        "/images/AlRolla/1.jpg",
        "/images/AlRolla/2.jpg",
        "/images/AlRolla/3.jpg",
        "/images/AlRolla/4.jpg",
        "/images/AlRolla/5.jpg",
        "/images/AlRolla/6.jpg",
      ],
    },
    {
      name: "Oudmehtha Branch",
      address: "Street 9A - Oud Metha - Dubai - United Arab Emirates",
      phone: "+971 52 777 6353",
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
      address: "Opposite Hotel Hydepark - HC Floor - Near Al Gubaiba Bus Station, Bur Dubai",
      phone: "+971 54 592 4155",
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
  ];

  // Refs for scrolling to each location
  const locationRefs = useRef<(HTMLElement | null)[]>([]);

  // Carousel state for each location
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    locations.map(() => 0)
  );

  // Auto-rotation state
  const [isPaused, setIsPaused] = useState<boolean[]>(
    locations.map(() => false)
  );

  // Scroll to location function
  const scrollToLocation = (index: number) => {
    locationRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const nextImage = (locationIndex: number) => {
    setCurrentImageIndex(prev => 
      prev.map((index, i) => 
        i === locationIndex 
          ? (index + 1) % locations[locationIndex].images.length 
          : index
      )
    );
  };

  const prevImage = (locationIndex: number) => {
    setCurrentImageIndex(prev => 
      prev.map((index, i) => 
        i === locationIndex 
          ? (index - 1 + locations[locationIndex].images.length) % locations[locationIndex].images.length 
          : index
      )
    );
  };

  // Auto-rotation effect
  useEffect(() => {
    const intervals = locations.map((_, locationIndex) => {
      return setInterval(() => {
        setCurrentImageIndex(prev => 
          prev.map((index, i) => {
            if (i === locationIndex && !isPaused[locationIndex]) {
              return (index + 1) % locations[locationIndex].images.length;
            }
            return index;
          })
        );
      }, 2500);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isPaused]);

  // Pause/resume functions
  const pauseRotation = (locationIndex: number) => {
    setIsPaused(prev => prev.map((paused, i) => i === locationIndex ? true : paused));
  };

  const resumeRotation = (locationIndex: number) => {
    setIsPaused(prev => prev.map((paused, i) => i === locationIndex ? false : paused));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] to-[var(--color-dark)]">
      {/* Hero Section with All Locations */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-card)] to-[var(--color-primary)]/10"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[var(--color-primary)]/30 to-transparent rounded-br-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[var(--color-primary)]/30 to-transparent rounded-tl-full blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-[var(--color-primary)]">Locations</span>
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Discover our premium fitness centers across Dubai. Click on any location to view details and gallery.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
                <div className="text-gray-300 text-sm md:text-base">Premium Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-sm md:text-base">Expert Training</div>
              </div>
            </div>
          </div>

          {/* All Locations Grid - flex + justify-center so last row (2 cards) is centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => scrollToLocation(index)}
                className="w-full md:w-[calc(50%-12px)] lg:w-72 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:scale-105 text-left group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={location.images[0]}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {location.is24_7 && (
                    <div className="absolute top-3 right-3 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      24/7
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
                    {location.name}
                  </h3>
                  {location.is24_7 && (
                    <span className="bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-0.5 rounded text-xs font-semibold">
                      24/7
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{location.address}</p>
                <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Location Sections with Carousels */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((location, locationIndex) => (
            <section 
              key={locationIndex} 
              ref={(el) => {
                locationRefs.current[locationIndex] = el;
              }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-300"
            >
              {/* Location Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {location.name}
                  </h2>
                  {location.is24_7 && (
                    <span className="bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      24/7 Available
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-lg">{location.address}</p>
              </div>

              {/* Image Carousel */}
              <div 
                className="relative mb-8"
                onMouseEnter={() => pauseRotation(locationIndex)}
                onMouseLeave={() => resumeRotation(locationIndex)}
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border-2 border-white/10">
                  <Image
                    src={location.images[currentImageIndex[locationIndex]]}
                    alt={`${location.name} - Image ${currentImageIndex[locationIndex] + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevImage(locationIndex)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => nextImage(locationIndex)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex[locationIndex] + 1} / {location.images.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="mt-4 flex justify-center gap-2 overflow-x-auto py-2">
                  {location.images.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => setCurrentImageIndex(prev => 
                        prev.map((index, i) => 
                          i === locationIndex ? imageIndex : index
                        )
                      )}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                        currentImageIndex[locationIndex] === imageIndex
                          ? 'border-[var(--color-primary)] scale-105'
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${location.name} thumbnail ${imageIndex + 1}`}
                        width={80}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Details */}
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${location.phone}`} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors font-semibold">
                    {location.phone}
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
