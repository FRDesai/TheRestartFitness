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
      title: "Health & Wellness",
      description: "Comprehensive health insurance and free gym memberships for you and your family."
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
    <div className="min-h-screen bg-[var(--color-light)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be part of a dynamic team that's passionate about helping people transform their lives through fitness. We're looking for dedicated professionals to join our growing RestartFitness family.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
                    <p className="text-gray-700 mb-6">{position.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <Link
                      href="/contact"
                      className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-95 transition-opacity"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-[var(--color-primary)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-gray-700">
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

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-primary)] font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-white/90">Send us your resume and cover letter through our contact form.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-primary)] font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Initial Interview</h3>
              <p className="text-white/90">We'll schedule a phone or video interview to learn more about you.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-primary)] font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Final Interview</h3>
              <p className="text-white/90">Meet the team in person and see if we're a good fit for each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see a position that matches your skills? We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Send Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
