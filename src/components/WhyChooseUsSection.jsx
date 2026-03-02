import { motion } from "framer-motion";
import { Heart, ActivitySquare, Smile, Zap, MapPin } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Friendly & Supportive Trainers",
      description:
        "Members consistently praise the motivating and caring instructors.",
      icon: <Heart className="w-6 h-6 text-base" />,
    },
    {
      id: 2,
      title: "Modern Equipment",
      description: "Well-maintained machines and professional workout setup.",
      icon: <ActivitySquare className="w-6 h-6 text-base" />,
    },
    {
      id: 3,
      title: "Comfortable Atmosphere",
      description:
        "No intimidation. Clean, welcoming, and energetic environment.",
      icon: <Smile className="w-6 h-6 text-base" />,
    },
    {
      id: 4,
      title: "Results-Oriented Approach",
      description: "Trainers ensure you work hard and see progress.",
      icon: <Zap className="w-6 h-6 text-base" />,
    },
    {
      id: 5,
      title: "Prime Surathkal Location",
      description: "Easily accessible near NITK & central Surathkal.",
      icon: <MapPin className="w-6 h-6 text-base" />,
    },
  ];

  return (
    <section className="py-24 bg-base relative overflow-hidden" id="why-us">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Why Choose <span className="text-accent">Zuese Fitness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary/70 font-light"
          >
            More than just a gym — it's a community dedicated to your
            transformation and well-being.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors ${
                index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
              } ${index === 4 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(163,255,18,0.3)]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
