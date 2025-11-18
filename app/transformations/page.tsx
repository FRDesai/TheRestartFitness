import Image from "next/image";
import Link from "next/link";

export default function Transformations() {

  const transformations = [
    {
      name: "Sarah Ahmed",
      age: 28,
      duration: "6 months",
      weightLoss: "25 kg",
      beforeImage: "/images/transformations/sarah-before.jpg",
      afterImage: "/images/transformations/sarah-after.jpg",
      testimonial: "RestartFitness completely changed my life. I never thought I could lose 25kg and feel this confident. The trainers are amazing and the community is so supportive!",
      program: "Personal Training + Nutrition Coaching"
    },
    {
      name: "Mohammed Hassan",
      age: 35,
      duration: "8 months",
      weightLoss: "30 kg",
      beforeImage: "/images/transformations/mohammed-before.jpg",
      afterImage: "/images/transformations/mohammed-after.jpg",
      testimonial: "After years of struggling with my weight, RestartFitness gave me the tools and motivation I needed. The personalized approach made all the difference.",
      program: "Group Classes + Personal Training"
    },
    {
      name: "Fatima Al-Zahra",
      age: 24,
      duration: "4 months",
      weightLoss: "18 kg",
      beforeImage: "/images/transformations/fatima-before.jpg",
      afterImage: "/images/transformations/fatima-after.jpg",
      testimonial: "I was skeptical at first, but the results speak for themselves. The trainers are professional and really care about your success. Highly recommended!",
      program: "HIIT Classes + Nutrition Program"
    },
    {
      name: "Ahmed Khalil",
      age: 42,
      duration: "10 months",
      weightLoss: "35 kg",
      beforeImage: "/images/transformations/ahmed-before.jpg",
      afterImage: "/images/transformations/ahmed-after.jpg",
      testimonial: "At 42, I thought it was too late to get in shape. RestartFitness proved me wrong. I feel 20 years younger and have energy I haven't had in decades.",
      program: "Personal Training + Lifestyle Coaching"
    }
  ];

  const testimonials = [
    {
      name: "Layla Mohammed",
      program: "Online Training",
      rating: 5,
      text: "The online training program is fantastic! I can work out from home while still getting personalized attention. The app makes tracking progress so easy."
    },
    {
      name: "Omar Al-Rashid",
      program: "Corporate Wellness",
      rating: 5,
      text: "Our company's wellness program with RestartFitness has been incredible. Employee morale is up, sick days are down, and everyone is more energetic."
    },
    {
      name: "Aisha Johnson",
      program: "Youth Programs",
      rating: 5,
      text: "My daughter loves the youth program! She's gained confidence, made friends, and learned healthy habits that will last a lifetime."
    },
    {
      name: "David Chen",
      program: "Functional Training",
      rating: 5,
      text: "After a back injury, I thought I'd never be able to exercise properly again. The functional training program helped me recover and get stronger than ever."
    },
    {
      name: "Nour Hassan",
      program: "Group Fitness",
      rating: 5,
      text: "The group classes are so much fun! The energy is amazing and I've made great friends. It doesn't feel like work when you're having this much fun."
    },
    {
      name: "Khalid Al-Mansouri",
      program: "Nutrition Coaching",
      rating: 5,
      text: "The nutrition coaching changed everything for me. I learned how to eat properly and sustainably. The weight loss was just a bonus - I feel healthier overall."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] to-[var(--color-dark)]">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat overflow-hidden min-h-[70vh] flex items-center">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-zoom-slow"
          style={{ backgroundImage: "url(/images/AlMoukhool/DSC08925.JPG)" }}
        ></div>

        {/* Thin Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Transformations &{" "}
            <span className="text-[var(--color-primary)]">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Real stories from real people who have transformed their lives with RestartFitness. 
            See the incredible results our clients have achieved and hear what they have to say about their journey.
          </p>
        </div>
      </section>

      {/* Transformations Section */}
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
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 relative inline-block">
              Amazing Transformations
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
              Witness the incredible journeys of our members who transformed their lives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{transformation.name}</h3>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">Age {transformation.age}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-2 border-2 border-white/10">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-gray-500 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-sm">Before</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-400">Before</p>
                  </div>
                  <div className="text-center">
                    <div className="h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-xl flex items-center justify-center mb-2 border-2 border-[var(--color-primary)]/30">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-[var(--color-primary)] text-sm">After</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-400">After</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-xl border border-[var(--color-primary)]/30">
                    <p className="text-3xl font-bold text-[var(--color-primary)]">{transformation.weightLoss}</p>
                    <p className="text-sm text-gray-300">Weight Loss</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-xl border border-[var(--color-primary)]/30">
                    <p className="text-3xl font-bold text-[var(--color-primary)]">{transformation.duration}</p>
                    <p className="text-sm text-gray-300">Duration</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Program:</p>
                  <p className="font-semibold text-white">{transformation.program}</p>
                </div>
                
                <blockquote className="text-gray-300 italic border-l-4 border-[var(--color-primary)] pl-4 py-2">
                  "{transformation.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-card)] via-[var(--color-darker)] to-[var(--color-card)]"></div>
        
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
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--color-primary)]/30 to-transparent rounded-bl-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[var(--color-primary)]/30 to-transparent rounded-tr-full blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 relative inline-block">
              What Our Clients Say
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
              Hear from our community of satisfied members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-primary)]">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-primary)] to-[var(--color-secondary)]"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, white 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 relative inline-block">
              Our Success by the Numbers
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl font-bold text-white mb-2">1000+</p>
              <p className="text-white/90">Pounds Lost</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl font-bold text-white mb-2">95%</p>
              <p className="text-white/90">Success Rate</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <p className="text-5xl font-bold text-white mb-2">5</p>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of people who have already transformed their lives with RestartFitness. 
            Your success story could be next!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  );
}
