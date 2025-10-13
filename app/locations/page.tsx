import Image from "next/image";

export default function Locations() {
  const locations = [
    {
      name: "Al Mamzar Branch",
      address: "Al Mamzar, Dubai",
      phone: "+971 4 XXX XXXX",
      email: "almamzar@restartfitness.com",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
      features: ["Personal Training", "Group Classes", "Cardio Zone", "Free Weights", "Locker Rooms"],
      image: "/images/AlMamzar/"
    },
    {
      name: "Al Moukhool Branch",
      address: "Al Moukhool, Dubai",
      phone: "+971 4 XXX XXXX",
      email: "almoukhool@restartfitness.com",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
      features: ["Personal Training", "Group Classes", "Cardio Zone", "Free Weights", "Sauna"],
      image: "/images/AlMoukhool/"
    },
    {
      name: "Al Rafa Branch",
      address: "Al Rafa, Dubai",
      phone: "+971 4 XXX XXXX",
      email: "alrafa@restartfitness.com",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
      features: ["Personal Training", "Group Classes", "Cardio Zone", "Free Weights", "Swimming Pool"],
      image: "/images/Alrafa/"
    },
    {
      name: "Al Rolla Branch",
      address: "Al Rolla, Dubai",
      phone: "+971 4 XXX XXXX",
      email: "alrolla@restartfitness.com",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM",
      features: ["Personal Training", "Group Classes", "Cardio Zone", "Free Weights", "Yoga Studio"],
      image: "/images/AlRolla/"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-light)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Our Locations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find a RestartFitness location near you. We have multiple branches across Dubai, each equipped with state-of-the-art facilities and expert trainers.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                {/* Location Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-400">Location Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">{location.email}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-gray-600">
                        <pre className="whitespace-pre-line font-sans">{location.hours}</pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Facilities & Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 text-center px-4 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-95 transition-opacity"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${location.email}`}
                      className="flex-1 text-center px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Find Us on the Map
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-400 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Use the contact information above to reach us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
