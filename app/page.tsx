"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] to-[var(--color-dark)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-zoom-slow"
            style={{ filter: "brightness(0.4)" }}
          >
            <source src="/images/Alrafa/alrafavideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className=" flex justify-center">
            <Image
              src="/logo/HeroLogo.png"
              alt="RestartFitness Logo"
              width={400}
              height={400}
              className="w-38 h-38 sm:w-40 sm:h-40 md:w-48 md:h-48"
            />


          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Restart Your
            <span className="text-[var(--color-primary)]">
              {" "}
              Fitness Journey
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional training, personalized programs, and a supportive
            community to help you achieve your fitness goals and transform your
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
            >
              Explore Programs
            </Link>
            <Link
              href="/transformations"
              className="inline-block px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link
              href="/locations"
              className="inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Find Nearest Location
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-card)] to-[var(--color-primary)]/5"></div>

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
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--color-primary)]/20 to-transparent rounded-tl-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
              Why Choose RestartFitness?
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-75 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
            </h2>
            {/* <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover what makes us the perfect choice for your fitness transformation
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Expert Trainers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Certified professionals with years of experience to guide your
                fitness journey.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Personalized Programs
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Customized workout plans tailored to your goals, fitness level,
                and schedule.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Supportive Community
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Join a community of like-minded individuals on their fitness
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of people who have already started their fitness
            journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/locations"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Find Nearest Location
            </Link>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-darker)] via-[var(--color-card)] to-[var(--color-darker)]"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
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
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 relative inline-block">
              Meet Our Founders
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
            </h2>
          </div>

          {/* Founders in One Row */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 animate-fade-in-up mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Founder 1 - Ansar Kuttiyil */}
              <div className="text-center">
                <div className="relative w-full max-w-sm mx-auto mb-6">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[var(--color-primary)]/30 group">
                    <Image
                      src="/images/Founders/Ansar Kuttiyil.jpeg"
                      alt="Ansar Kuttiyil - Co-Founder"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                    Ansar Kuttiyil
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"></span>
                  </h3>
                </div>
                <p className="text-[var(--color-primary)] font-semibold text-base md:text-lg">
                  Co-Founder & Fitness Expert
                </p>
              </div>

              {/* Founder 2 - Subin Babu */}
              <div className="text-center">
                <div className="relative w-full max-w-sm mx-auto mb-6">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[var(--color-primary)]/30 group">
                    <Image
                      src="/images/Founders/SubinBabu.JPG"
                      alt="Subin Babu - Co-Founder"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                    Subin Babu
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"></span>
                  </h3>
                </div>
                <p className="text-[var(--color-primary)] font-semibold text-base md:text-lg">
                  Co-Founder & Training Specialist
                </p>
              </div>
            </div>
            
            {/* Common Introduction Paragraph */}
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                The visionaries behind RestartFitness, dedicated to transforming lives through fitness. 
                With years of combined experience in the fitness industry, our founders bring innovative 
                training methodologies, personalized program design, and a deep commitment to helping 
                individuals achieve their fitness goals. Together, they have built RestartFitness into 
                a trusted community where fitness dreams become reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
