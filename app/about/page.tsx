export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-neutral-700)] mb-8">
            About RestartFitness
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--color-neutral-500)] leading-relaxed mb-6">
              At RestartFitness, we believe that everyone deserves the opportunity to transform their life through fitness. 
              Our mission is to provide professional, personalized training programs that help you achieve your health and fitness goals.
            </p>
            <p className="text-lg text-[var(--color-neutral-500)] leading-relaxed mb-6">
              With years of experience in the fitness industry, our certified trainers are dedicated to helping you build 
              strength, improve your health, and boost your confidence. We offer a variety of programs tailored to different 
              fitness levels and goals.
            </p>
            <p className="text-lg text-[var(--color-neutral-500)] leading-relaxed">
              Join our community of fitness enthusiasts and start your transformation journey today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
