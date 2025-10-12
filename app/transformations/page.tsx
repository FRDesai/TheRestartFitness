import Image from "next/image";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Transformations & Testimonials
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives with RestartFitness. See the incredible results our clients have achieved and hear what they have to say about their journey.
          </p>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Amazing Transformations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{transformation.name}</h3>
                    <span className="text-sm text-gray-500">Age {transformation.age}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-2">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-gray-500 text-sm">Before</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Before</p>
                    </div>
                    <div className="text-center">
                      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-2">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-gray-500 text-sm">After</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">After</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-[var(--color-primary)]/10 rounded-lg">
                      <p className="text-2xl font-bold text-[var(--color-primary)]">{transformation.weightLoss}</p>
                      <p className="text-sm text-gray-600">Weight Loss</p>
                    </div>
                    <div className="text-center p-3 bg-[var(--color-primary)]/10 rounded-lg">
                      <p className="text-2xl font-bold text-[var(--color-primary)]">{transformation.duration}</p>
                      <p className="text-sm text-gray-600">Duration</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Program:</p>
                    <p className="font-semibold text-gray-900">{transformation.program}</p>
                  </div>
                  
                  <blockquote className="text-gray-700 italic border-l-4 border-[var(--color-primary)] pl-4">
                    "{transformation.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-primary)]">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Success by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">1000+</p>
              <p className="text-white/90">Pounds Lost</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">95%</p>
              <p className="text-white/90">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">5</p>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of people who have already transformed their lives with RestartFitness. Your success story could be next!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
}
