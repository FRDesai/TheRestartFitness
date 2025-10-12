import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
      price: "From $80/session"
    },
    {
      title: "Group Fitness Classes",
      description: "High-energy group workouts designed to motivate and challenge you.",
      features: ["HIIT Training", "Strength Training", "Cardio Blast", "Yoga & Pilates"],
      price: "From $25/class"
    },
    {
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition guidance to support your fitness goals.",
      features: ["Meal planning", "Macro tracking", "Supplement advice", "Lifestyle coaching"],
      price: "From $120/month"
    },
    {
      title: "Online Training",
      description: "Virtual training sessions and programs you can do from anywhere.",
      features: ["Live video sessions", "Recorded workouts", "App-based tracking", "24/7 support"],
      price: "From $60/month"
    },
    {
      title: "Corporate Wellness",
      description: "Fitness programs designed for businesses to improve employee health.",
      features: ["On-site classes", "Health assessments", "Team challenges", "Wellness workshops"],
      price: "Custom pricing"
    },
    {
      title: "Youth Programs",
      description: "Age-appropriate fitness programs for children and teenagers.",
      features: ["Fun activities", "Skill development", "Confidence building", "Safe environment"],
      price: "From $40/month"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-darker)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Services & Programs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals, whether you're just starting out or looking to take your fitness to the next level.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-card)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[var(--color-dark)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-lg font-semibold text-[var(--color-primary)] mb-4">{service.price}</p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-95 transition-opacity"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our fitness experts are here to help you choose the perfect program based on your goals, schedule, and preferences.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
