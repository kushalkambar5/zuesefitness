import { motion } from "framer-motion";
import { Activity, User, ActivitySquare, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "General Fitness Membership",
      icon: <Activity className="w-8 h-8 text-accent" />,
      features: [
        "Access to all gym equipment",
        "Flexible monthly plans",
        "Starting from ₹XXXX/month",
      ],
    },
    {
      id: 2,
      title: "Personal Training",
      icon: <User className="w-8 h-8 text-accent" />,
      features: [
        "1-on-1 customized workout plan",
        "Fat loss / Muscle gain focus",
        "Trainer accountability",
      ],
    },
    {
      id: 3,
      title: "Functional & Strength",
      icon: <ActivitySquare className="w-8 h-8 text-accent" />,
      features: [
        "Structured programs",
        "Mobility & endurance improvement",
        "Functional workout zone",
      ],
    },
    {
      id: 4,
      title: "Transformation Programs",
      icon: <Target className="w-8 h-8 text-accent" />,
      features: [
        "Goal-based training",
        "Body composition tracking",
        "Nutrition guidance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-neutral-900 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Services & <span className="text-accent">Membership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary/70 font-light"
          >
            We offer specialized programs designed to deliver real results.
            Choose the membership that exactly fits your ongoing journey.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-base rounded-2xl p-8 border border-white/5 hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-secondary/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-3 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            a
            href="#contact"
            className="inline-block bg-white text-base font-bold px-8 py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
          >
            Start Your Fitness Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
