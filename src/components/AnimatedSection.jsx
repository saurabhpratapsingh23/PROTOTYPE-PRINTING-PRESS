import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Define reusable animation variants
const animations = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up", // Default animation
  id,
}) => {
  const { ref, controls } = useScrollAnimation();
  const variant = animations[animation] || animations["fade-up"];

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: { ...variant.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
