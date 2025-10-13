"use client";
import React, { useState } from "react";
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
      name: "Al Mamzar Branch",
      address: "1st Floor, Al Jaseera Building, Opp. Al Mulla Plaza, Al Mamzar, Dubai",
      phone: "+971 54 250 8119",
      
      images: [
        "/images/AlMamzar/1.jpg",
        "/images/AlMamzar/2.jpg",
        "/images/AlMamzar/3.jpg",
        "/images/AlMamzar/4.jpg",
        "/images/AlMamzar/5.jpg",
        "/images/AlMamzar/6.jpg",
      ],
    },
   
   
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
  ];

  // Carousel state for each location
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    locations.map(() => 0)
  );

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

  return (
    <div className="min-h-screen bg-[var(--color-darker)]">
      {/* Simple Hero */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Locations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our fitness centers across Dubai. Each location offers premium facilities and expert training.
          </p>
        </div>
      </section>

      {/* 4 Horizontal Rows with Carousels */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((location, locationIndex) => (
            <section key={locationIndex} className="bg-[var(--color-card)] rounded-2xl p-8 shadow-lg">
              {/* Location Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {location.name}
                </h2>
                <p className="text-gray-300 text-lg">{location.address}</p>
              </div>

              {/* Image Carousel */}
              <div className="relative mb-8">
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={location.images[currentImageIndex[locationIndex]]}
                    alt={`${location.name} - Image ${currentImageIndex[locationIndex] + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevImage(locationIndex)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => nextImage(locationIndex)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
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
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                        currentImageIndex[locationIndex] === imageIndex
                          ? 'ring-2 ring-[var(--color-primary)] scale-105'
                          : 'ring-2 ring-gray-600 hover:ring-gray-400'
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
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${location.phone}`} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  
                
                  
               
                </div>

                {/* Facilities */}
              
              </div>

              {/* Action Buttons */}
              {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${location.phone}`}
                  className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors text-center"
                >
                  📞 Call Now
                </a>
                <a
                  href={`mailto:${location.email}`}
                  className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors text-center"
                >
                  ✉️ Send Email
                </a>
              </div> */}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
