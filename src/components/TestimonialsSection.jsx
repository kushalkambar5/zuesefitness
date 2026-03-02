import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Harold Dsouza",
      role: "Member",
      review:
        "There is a friendly environment, instructors are great. They make you work hard and achieve your fitness goals.",
      rating: 5,
    },
    {
      id: 2,
      name: "Shreyas Bangera",
      role: "Member",
      review:
        "Gym atmosphere is really fine. Trainers are friendly and motivating. Equipment is modern.",
      rating: 5,
    },
    {
      id: 3,
      name: "Local Guide",
      role: "Google Reviewer",
      review:
        "Fantastic trainers. Very good place. Highly recommend to everyone in Surathkal looking for real results.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-24 bg-neutral-900 overflow-hidden relative"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            What Our <span className="text-accent">Members Say</span>
          </motion.h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-accent" />
            ))}
          </div>
          <p className="text-secondary/80 font-medium">
            4.6 Rating from 157+ Google Reviews
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative Quotes */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/5 z-0 hidden md:block">
            <Quote size={180} className="rotate-180" />
          </div>

          <div className="relative z-10 bg-base border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-secondary/90 leading-relaxed font-serif italic mb-8">
                    "{testimonials[currentIndex].review}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-sm text-accent">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
