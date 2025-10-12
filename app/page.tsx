import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] to-[var(--color-dark)]">
      {/* Hero Section */}
      <section
  className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
>
  {/* Animated Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-zoom-slow"
    style={{ backgroundImage: 'url(/images/AlMoukhool/DSC08925.JPG)' }}
  ></div>

  {/* Thin Black Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
      Restart Your
      <span className="text-[var(--color-primary)]"> Fitness Journey</span>
    </h1>

    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
      Professional training, personalized programs, and a supportive community
      to help you achieve your fitness goals and transform your life.
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
    </div>
  </div>
</section>



      {/* Features Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-card)] to-[var(--color-primary)]/5"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
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
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Trainers</h3>
              <p className="text-gray-300 leading-relaxed">Certified professionals with years of experience to guide your fitness journey.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Programs</h3>
              <p className="text-gray-300 leading-relaxed">Customized workout plans tailored to your goals, fitness level, and schedule.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Supportive Community</h3>
              <p className="text-gray-300 leading-relaxed">Join a community of like-minded individuals on their fitness journey.</p>
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
            Join thousands of people who have already started their fitness journey with us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
