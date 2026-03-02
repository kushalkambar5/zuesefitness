import { motion } from "framer-motion";

const GallerySection = () => {
  // Using placeholders. In a real project, we would generate these images or use real ones.
  // For the generated landing page, we use stylized gradient blocks to represent gallery images.

  const galleryImages = [
    { id: 1, title: "Modern Equipment", delay: 0 },
    { id: 2, title: "Cardio Zone", delay: 0.1 },
    { id: 3, title: "Free Weights", delay: 0.2 },
    { id: 4, title: "Training Ground", delay: 0.3 },
  ];

  return (
    <section className="py-24 bg-base" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            See The <span className="text-accent">Environment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary/70 font-light"
          >
            Explore our state-of-the-art facility before you join.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
              alt="ZF INTERIOR"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-base/40 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-base to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-white font-bold text-lg">
                Main Workout Floor
              </h4>
              <p className="text-accent text-sm">Spacious & Motivating</p>
            </div>
          </motion.div>

          {/* Small Grid Images */}
          {galleryImages.map((img, index) => {
            const getImageUrl = (i) => {
              if (i === 0)
                return "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop";
              if (i === 1)
                return "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
              if (i === 2)
                return "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop";
              return "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop";
            };

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: img.delay }}
                className="relative aspect-square md:aspect-auto md:h-64 rounded-2xl overflow-hidden group"
              >
                <img
                  src={getImageUrl(index)}
                  alt={img.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-base/60 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-base to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white font-semibold text-md">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
