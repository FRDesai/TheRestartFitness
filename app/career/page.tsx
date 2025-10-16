import Link from "next/link";

export default function Career() {
  const positions = [
    {
      title: "Personal Trainer",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      description: "We're looking for certified personal trainers to join our team. You'll work with clients to create personalized workout plans and help them achieve their fitness goals.",
      requirements: [
        "NASM, ACSM, or equivalent certification",
        "2+ years of personal training experience",
        "Excellent communication skills",
        "Passion for helping others achieve their goals",
        "CPR/AED certification"
      ],
      benefits: [
        "Competitive salary + commission",
        "Health insurance",
        "Continuing education allowance",
        "Flexible schedule",
        "Gym membership"
      ]
    },
    {
      title: "Group Fitness Instructor",
      location: "Multiple Locations",
      type: "Part-time/Full-time",
      experience: "1+ years",
      description: "Lead high-energy group fitness classes including HIIT, strength training, and cardio workouts. Create engaging and effective workout experiences for our members.",
      requirements: [
        "Group fitness certification (Zumba, Les Mills, etc.)",
        "1+ years of teaching experience",
        "High energy and motivational personality",
        "Ability to modify exercises for all fitness levels",
        "CPR/AED certification"
      ],
      benefits: [
        "Competitive hourly rate",
        "Flexible schedule",
        "Free gym membership",
        "Training and development opportunities",
        "Fun, supportive work environment"
      ]
    },
    {
      title: "Front Desk Associate",
      location: "Multiple Locations",
      type: "Part-time",
      experience: "Entry level",
      description: "Be the first point of contact for our members. Handle check-ins, answer questions, and provide excellent customer service in a fast-paced environment.",
      requirements: [
        "High school diploma or equivalent",
        "Customer service experience preferred",
        "Friendly and professional demeanor",
        "Basic computer skills",
        "Ability to work evenings and weekends"
      ],
      benefits: [
        "Competitive hourly wage",
        "Flexible schedule",
        "Free gym membership",
        "Employee discounts",
        "Growth opportunities"
      ]
    },
    {
      title: "Nutrition Coach",
      location: "Remote/Multiple Locations",
      type: "Part-time/Full-time",
      experience: "2+ years",
      description: "Provide nutrition guidance and meal planning services to our members. Help clients develop healthy eating habits and achieve their weight management goals.",
      requirements: [
        "Nutrition certification (Precision Nutrition, NASM, etc.)",
        "2+ years of nutrition coaching experience",
        "Knowledge of various dietary approaches",
        "Excellent communication and counseling skills",
        "Bachelor's degree in nutrition or related field preferred"
      ],
      benefits: [
        "Competitive salary",
        "Flexible schedule",
        "Remote work options",
        "Continuing education support",
        "Professional development opportunities"
      ]
    },
    {
      title: "Gym Manager",
      location: "Al Mamzar Branch",
      type: "Full-time",
      experience: "3+ years",
      description: "Oversee daily operations of our Al Mamzar location. Manage staff, ensure member satisfaction, and drive business growth through excellent service and community engagement.",
      requirements: [
        "3+ years of fitness industry management experience",
        "Strong leadership and communication skills",
        "Experience with staff scheduling and training",
        "Knowledge of fitness equipment and maintenance",
        "Bachelor's degree in business or related field preferred"
      ],
      benefits: [
        "Competitive salary + bonus potential",
        "Health insurance",
        "Paid time off",
        "Professional development budget",
        "Leadership development opportunities"
      ]
    },
    {
      title: "Marketing Coordinator",
      location: "Dubai Office",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop and execute marketing campaigns to promote our services and attract new members. Manage social media, create content, and coordinate community events.",
      requirements: [
        "2+ years of marketing experience",
        "Social media management skills",
        "Content creation abilities",
        "Event planning experience",
        "Bachelor's degree in marketing or related field"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work arrangements",
        "Creative freedom",
        "Professional development opportunities"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer competitive salaries and benefits packages that reflect your skills and experience."
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, certification support, and career advancement paths."
    },
    {
      title: "Flexible Schedule",
      description: "Work-life balance is important to us. We offer flexible scheduling options for most positions."
    },
    {
      title: "Supportive Environment",
      description: "Join a team that values collaboration, innovation, and mutual support."
    },
    {
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities to take on new challenges and responsibilities."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-darker)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-darker)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be part of a dynamic team that's passionate about helping people transform their lives through fitness. We're looking for dedicated professionals to join our growing RestartFitness family.
          </p>
        </div>
      </section>

   

      {/* Why Work With Us */}
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
              Why Work With Us?
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-75 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {index === 0 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index + 3} className="text-center p-6 max-w-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {index === 0 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-darker)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-dark)] font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-white/90">Send us your resume and cover letter through our contact form.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-dark)] font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Initial Interview</h3>
              <p className="text-white/90">We'll schedule a phone or video interview to learn more about you.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-dark)] font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Final Interview</h3>
              <p className="text-white/90">Meet the team in person and see if we're a good fit for each other.</p>
            </div>
          </div>
        </div>
      </section>

   

         {/* Open Positions */}
         <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-neutral-700)] mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-[var(--color-card)] rounded-lg shadow-lg p-8 hover:bg-[var(--color-card-hover)] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--color-neutral-700)] mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--color-neutral-500)] mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-[var(--color-neutral-500)] mb-6">{position.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <Link
                      href="/contact"
                      className="inline-block px-6 py-3 bg-[var(--color-primary)] text-[var(--color-dark)] font-semibold rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[var(--color-neutral-700)] mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-[var(--color-neutral-500)]">
                          <svg className="w-5 h-5 text-[var(--color-primary)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-neutral-700)] mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-[var(--color-neutral-500)]">
                          <svg className="w-5 h-5 text-[var(--color-primary)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
         {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-light)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-neutral-700)] mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-[var(--color-neutral-500)] mb-8">
            Don't see a position that matches your skills? We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-[var(--color-dark)] font-semibold rounded-lg shadow-lg hover:bg-[var(--color-secondary)] transition-all duration-300 transform hover:scale-105"
          >
            Send Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
