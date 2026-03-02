import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-base relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Your Fitness Journey{" "}
              <span className="text-accent">Starts Here</span>
            </h2>

            <p className="text-lg text-secondary/80 leading-relaxed mb-6 font-light">
              Located in the heart of Surathkal, Zuese Fitness has built a
              strong reputation for providing a welcoming and motivating
              training environment. With expert instructors who genuinely care
              about your progress, we focus on helping you achieve your fitness
              goals — whether you're a beginner or experienced athlete.
            </p>

            <p className="text-lg text-secondary/80 leading-relaxed mb-10 font-light">
              Our trainers push you to improve, support you when you struggle,
              and celebrate your progress.
            </p>

            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                <MapPin className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-sm text-secondary/70">
                    Opposite Surathkal Post Office, Athikari Complex
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                <Clock className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Hours</h4>
                  <p className="text-sm text-secondary/70">
                    Open Daily
                    <br />
                    Closes 9:30 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent z-10"></div>

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="text-9xl font-serif font-bold text-white tracking-tighter">
                  ZF
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-[40px]"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-10 -left-10 bg-base/80 backdrop-blur-md p-6 border border-white/10 rounded-2xl shadow-xl z-20">
              <div className="text-4xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-secondary/80 font-medium">
                Result Oriented
                <br />
                Approach
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
