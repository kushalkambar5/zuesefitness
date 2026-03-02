import { motion } from "framer-motion";
import {
  PhoneCall,
  ArrowRight,
  UserCheck,
  Dumbbell,
  Target,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-base"
      id="home"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dark_gym_cinematic.png"
          alt="Zuese Fitness Gym Interior"
          className="w-full h-full object-cover object-center opacity-40 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="text-accent text-lg">⭐</span>
            <span className="text-sm font-medium text-secondary/90 tracking-wide uppercase">
              4.6 Rated | 157+ Happy Members
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Train Strong. <br className="hidden md:block" />
            Feel Confident. <br className="hidden md:block" />
            <span className="text-accent">Transform</span> at Zuese Fitness.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-10 max-w-2xl font-light"
          >
            Surathkal’s trusted fitness destination with expert trainers, modern
            equipment, and a motivating environment designed for real results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-base rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(163,255,18,0.4)]"
            >
              Book Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:08494973777"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 text-accent" />
              Call Now – 084949 73777
            </a>
          </motion.div>

          {/* Micro Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center gap-6 text-sm md:text-base text-secondary font-medium"
          >
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-accent" />
              Friendly Trainers
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/20"></div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-accent" />
              Modern Equipment
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary/20"></div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              Results Focused Programs
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
