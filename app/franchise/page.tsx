import Link from "next/link";

export default function Franchise() {
  const franchiseBenefits = [
    {
      title: "Proven Business Model",
      description: "Join a successful fitness brand with a track record of helping franchisees build profitable businesses.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Comprehensive Training",
      description: "Receive extensive training on operations, marketing, and customer service to ensure your success.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Marketing Support",
      description: "Benefit from our established brand recognition and comprehensive marketing support to attract customers.",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
    },
    {
      title: "Ongoing Support",
      description: "Get continuous support from our experienced team to help you navigate challenges and grow your business.",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
    },
    {
      title: "Equipment & Setup",
      description: "We'll help you source the right equipment and set up your facility to meet our high standards.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Territory Protection",
      description: "Enjoy exclusive territory rights to protect your investment and ensure market exclusivity.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  const requirements = [
    "Minimum investment of AED 500,000",
    "Business experience preferred",
    "Passion for fitness and wellness",
    "Strong leadership and management skills",
    "Ability to follow established systems and procedures",
    "Commitment to maintaining brand standards",
    "Financial stability and creditworthiness",
    "Available for initial training period"
  ];

  const investmentBreakdown = [
    { item: "Franchise Fee", amount: "AED 150,000", description: "One-time fee for brand rights and initial training" },
    { item: "Equipment & Setup", amount: "AED 200,000", description: "Gym equipment, furniture, and facility setup" },
    { item: "Working Capital", amount: "AED 100,000", description: "Initial operating expenses and marketing" },
    { item: "Lease & Renovation", amount: "AED 50,000", description: "Facility lease deposit and renovations" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Contact us to express your interest and learn more about our franchise opportunity."
    },
    {
      step: "2",
      title: "Application & Review",
      description: "Submit your application and financial information for our review process."
    },
    {
      step: "3",
      title: "Discovery Day",
      description: "Visit our headquarters to meet the team and learn more about our operations."
    },
    {
      step: "4",
      title: "Franchise Agreement",
      description: "Sign the franchise agreement and begin the setup process."
    },
    {
      step: "5",
      title: "Training & Launch",
      description: "Complete comprehensive training and launch your RestartFitness location."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Own a RestartFitness Franchise
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join the growing fitness industry and become part of the RestartFitness family. Own your own successful fitness business with our proven model and comprehensive support system.
          </p>
        </div>
      </section>

      {/* Why Franchise With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Franchise With RestartFitness?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Investment Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Breakdown</h3>
              <div className="space-y-4">
                {investmentBreakdown.map((item, index) => (
                  <div key={index} className="border-l-4 border-[var(--color-primary)] pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.item}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-[var(--color-primary)]">{item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[var(--color-primary)]/10 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total Investment</span>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">AED 500,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Franchise Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Become a Franchisee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Franchisee Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmed Al-Mansouri</h3>
              <p className="text-[var(--color-primary)] font-semibold mb-3">Al Mamzar Branch Owner</p>
              <blockquote className="text-gray-700 italic">
                "Opening my RestartFitness franchise was the best business decision I've made. The support from the corporate team has been incredible, and I've been profitable within 8 months. The brand recognition and proven systems make all the difference."
              </blockquote>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-[var(--color-primary)] font-semibold mb-3">Al Rafa Branch Owner</p>
              <blockquote className="text-gray-700 italic">
                "As someone new to the fitness industry, I was nervous about starting my own business. But RestartFitness provided everything I needed - from training to marketing support. My location is thriving and I couldn't be happier."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Financial Performance Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">AED 2.5M</p>
              <p className="text-white/90">Average Annual Revenue</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">25%</p>
              <p className="text-white/90">Average Profit Margin</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">18</p>
              <p className="text-white/90">Months to Break Even</p>
            </div>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            * Financial performance varies by location and market conditions. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Franchise Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards owning your own RestartFitness location. Our franchise development team is ready to help you explore this exciting opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
            >
              Request Information
            </Link>
            <a
              href="tel:+971-4-XXX-XXXX"
              className="inline-block px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
