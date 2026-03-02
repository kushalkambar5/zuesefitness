import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const ContactFooter = () => {
  return (
    <footer
      className="bg-neutral-950 relative border-t border-white/5"
      id="contact"
    >
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Start Your <span className="text-accent">Transformation</span>
            </h2>
            <p className="text-lg text-secondary/70 mb-10 font-light pr-8">
              Visit us today to claim your free trial or talk to an expert
              trainer about your specific goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    Visit Us
                  </h4>
                  <p className="text-secondary/70">
                    2nd Floor, Athikari Complex
                    <br />
                    Opposite Surathkal Post Office
                    <br />
                    Mangaluru, Karnataka 575014
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-accent bg-accent/10">
                  <PhoneCall className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Call Us</h4>
                  <a
                    href="tel:08494973777"
                    className="text-accent hover:text-white transition-colors text-xl font-bold"
                  >
                    084949 73777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Hours</h4>
                  <p className="text-secondary/70">
                    Open Daily | Closes 9:30 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
          >
            {/* Embedded Google Map - Coordinates for Surathkal */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.769723636465!2d74.79838217481982!3d12.986575114550298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351ecefe037ef%3A0x72fce59cba14747f!2sZuese%20Fitness%20-%20Surathkal!5e0!3m2!1sen!2sin!4v1772457207523!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) contrast(1.1)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zuese Fitness Location"
              className="absolute inset-0 grayscale contrast-125"
            ></iframe>
            {/* Fallback styling for the embed */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10"></div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Base */}
      <div className="border-t border-white/5 pt-16 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo area */}
            <div className="text-center md:text-left">
              <span className="text-2xl font-serif font-bold text-secondary tracking-wide">
                ZUESE<span className="text-accent">FITNESS</span>
              </span>
              <p className="text-secondary/50 mt-2 text-sm italic">
                Built on Trust. Driven by Results.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                <span className="text-accent text-sm">
                  ⭐ 4.6 Rating from 157+ Members
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="#home"
                className="text-sm font-medium text-secondary/60 hover:text-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-secondary/60 hover:text-accent transition-colors"
              >
                Membership
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-secondary/60 hover:text-accent transition-colors"
              >
                Personal Training
              </a>
              <a
                href="#gallery"
                className="text-sm font-medium text-secondary/60 hover:text-accent transition-colors"
              >
                Gallery
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-secondary/40 border-t border-white/5 pt-8 font-light">
            © {new Date().getFullYear()} Zuese Fitness Surathkal. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
