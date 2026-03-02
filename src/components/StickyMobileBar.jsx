import { motion } from "framer-motion";
import { PhoneCall, Calendar } from "lucide-react";

const StickyMobileBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-base/95 backdrop-blur-md border-t border-white/10 shadow-2xl p-3"
    >
      <div className="flex gap-3">
        <a
          href="tel:08494973777"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-2 rounded-xl text-sm font-bold transition-colors active:scale-95"
        >
          <PhoneCall size={18} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-accent text-base py-3 px-2 rounded-xl text-sm font-bold shadow-[0_4px_15px_rgba(163,255,18,0.3)] hover:bg-accent/90 transition-colors active:scale-95"
        >
          <Calendar size={18} />
          Book Free Trial
        </a>
      </div>
    </motion.div>
  );
};

export default StickyMobileBar;
