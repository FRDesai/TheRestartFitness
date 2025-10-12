import Image from "next/image";

export default function Trainers() {
  const trainers = [
    {
      name: "Ahmed Hassan",
      title: "Head Trainer & Nutrition Specialist",
      experience: "8 years",
      specialties: ["Weight Loss", "Muscle Building", "Nutrition Coaching", "HIIT Training"],
      certifications: ["NASM-CPT", "Precision Nutrition L1", "TRX Certified"],
      bio: "Ahmed is passionate about helping clients achieve sustainable lifestyle changes. With a background in sports science, he specializes in creating personalized programs that deliver real results.",
      image: "/images/trainers/ahmed.jpg"
    },
    {
      name: "Sarah Johnson",
      title: "Senior Personal Trainer",
      experience: "6 years",
      specialties: ["Women's Fitness", "Postpartum Recovery", "Functional Training", "Yoga"],
      certifications: ["ACSM-CPT", "Prenatal/Postnatal Specialist", "RYT-200"],
      bio: "Sarah brings a holistic approach to fitness, focusing on strength, flexibility, and mental well-being. She's particularly skilled at working with women at all stages of their fitness journey.",
      image: "/images/trainers/sarah.jpg"
    },
    {
      name: "Mohammed Al-Rashid",
      title: "Strength & Conditioning Coach",
      experience: "10 years",
      specialties: ["Powerlifting", "Athletic Performance", "Injury Prevention", "Olympic Lifting"],
      certifications: ["CSCS", "USAW Level 1", "FMS Certified"],
      bio: "Mohammed is a former competitive athlete who now helps others reach their peak performance. His expertise in strength training and movement mechanics makes him invaluable for serious athletes.",
      image: "/images/trainers/mohammed.jpg"
    },
    {
      name: "Fatima Al-Zahra",
      title: "Group Fitness Instructor",
      experience: "5 years",
      specialties: ["Zumba", "Pilates", "Cardio Dance", "Senior Fitness"],
      certifications: ["Zumba Instructor", "Pilates Mat Certified", "Senior Fitness Specialist"],
      bio: "Fatima brings energy and enthusiasm to every class. Her background in dance and movement therapy helps her create fun, effective workouts that keep clients coming back for more.",
      image: "/images/trainers/fatima.jpg"
    },
    {
      name: "David Chen",
      title: "Functional Movement Specialist",
      experience: "7 years",
      specialties: ["Corrective Exercise", "Mobility Training", "Pain Management", "Rehabilitation"],
      certifications: ["NASM-CES", "FMS Level 2", "Pain-Free Performance Specialist"],
      bio: "David specializes in helping clients move better and feel better. His approach focuses on addressing movement imbalances and building resilient, pain-free bodies.",
      image: "/images/trainers/david.jpg"
    },
    {
      name: "Aisha Mohammed",
      title: "Youth Fitness Coordinator",
      experience: "4 years",
      specialties: ["Youth Training", "Sports Conditioning", "Confidence Building", "Family Fitness"],
      certifications: ["Youth Fitness Specialist", "Sports Conditioning Coach", "Child Development"],
      bio: "Aisha is passionate about instilling healthy habits in young people. She creates safe, fun, and effective programs that help children and teens develop confidence and athleticism.",
      image: "/images/trainers/aisha.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Meet Our Trainers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our certified and experienced trainers are here to guide you on your fitness journey. Each trainer brings unique expertise and a passion for helping you achieve your goals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Trainer Image Placeholder */}
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-gray-500">Trainer Photo</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-lg text-[var(--color-primary)] font-semibold mb-2">{trainer.title}</p>
                  <p className="text-gray-600 mb-4">{trainer.experience} of experience</p>
                  
                  <p className="text-gray-700 mb-6">{trainer.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <ul className="space-y-1">
                      {trainer.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="text-gray-700 text-sm flex items-center">
                          <svg className="w-4 h-4 text-[var(--color-primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="block w-full text-center px-4 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-95 transition-opacity"
                  >
                    Book Session
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Trainers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Trainers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600">All our trainers hold nationally recognized certifications and continuously update their knowledge.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Our trainers have helped hundreds of clients achieve their fitness goals with measurable results.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Every training session is tailored to your specific needs, goals, and fitness level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Training?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a consultation with one of our expert trainers to discuss your goals and create a personalized plan.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg shadow-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
