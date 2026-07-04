import type { Variants } from 'framer-motion'

/* ============================================
   FRAMER MOTION ANIMATION VARIANTS
   ============================================ */

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const scaleUp: Variants = {
  hidden: { scale: 0.95 },
  visible: {
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Individual item in stagger
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Slide animations
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Hover animations
export const hoverScale: Variants = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
}

export const hoverLift: Variants = {
  whileHover: {
    y: -10,
    transition: { duration: 0.3, ease: 'easeOut' },
    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)',
  },
}

export const hoverRotate: Variants = {
  whileHover: { rotate: 5, transition: { duration: 0.3 } },
}

// Rotation animation
export const rotateInfinite: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 8, repeat: Infinity, ease: 'linear' },
  },
}

// Floating animation
export const floating: Variants = {
  animate: {
    y: [-20, 0, -20],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const floatingDelayed = (delay: number): Variants => ({
  animate: {
    y: [-20, 0, -20],
    transition: { duration: 6, delay, repeat: Infinity, ease: 'easeInOut' },
  },
})

// Pulse animation
export const pulsing: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Glow animation
export const glowing: Variants = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(37, 99, 235, 0.5)',
      '0 0 30px rgba(37, 99, 235, 0.8)',
      '0 0 10px rgba(37, 99, 235, 0.5)',
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const glowingGold: Variants = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(251, 191, 36, 0.5)',
      '0 0 30px rgba(251, 191, 36, 0.8)',
      '0 0 10px rgba(251, 191, 36, 0.5)',
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Profile rotation animation
export const profileRotate: Variants = {
  animate: {
    rotateY: [0, 10, -10, 0],
    rotateZ: [0, -2, 2, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Mobile menu animation
export const mobileMenuVariant: Variants = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export const mobileMenuItemVariant: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
}

// Card flip animation
export const cardFlip: Variants = {
  hidden: { rotateY: 0 },
  hover: {
    rotateY: 180,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

// Contact form animations
export const contactFormVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

// Counter animation with scale and glow
export const counterBounce: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Enhanced count-up animation with scale
export const countUpAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  }),
}

// Blob morph animation with smooth transitions
export const blobMorph: Variants = {
  animate: {
    borderRadius: [
      '30% 70% 70% 30% / 30% 30% 70% 70%',
      '70% 30% 46% 54% / 30% 30% 46% 70%',
      '33% 67% 34% 66% / 33% 33% 67% 67%',
      '30% 70% 70% 30% / 30% 30% 70% 70%',
    ],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Nav item hover with glow effect
export const navItemHover: Variants = {
  whileHover: {
    color: '#FBBF24',
    textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

// Button animations
export const buttonHover: Variants = {
  whileHover: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
}

export const buttonGoldHover: Variants = {
  whileHover: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
}

// Scroll-triggered animations
export const inViewAnimation = (
  threshold = 0.2
): {
  initial: string
  whileInView: string
  viewport: { once: boolean; amount: number }
} => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: threshold },
})

// Count-up number animation with stagger
export const countUpNumber: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const countUpContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Enhanced profile pulse with gold glow
export const profileGlow: Variants = {
  animate: {
    boxShadow: [
      '0 0 30px rgba(251, 191, 36, 0.2)',
      '0 0 60px rgba(251, 191, 36, 0.4)',
      '0 0 30px rgba(251, 191, 36, 0.2)',
    ],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Profile image morphing blob effect
export const profileMorphBlob: Variants = {
  animate: {
    borderRadius: [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '40% 60% 60% 30% / 60% 40% 40% 70%',
      '60% 40% 30% 70% / 60% 30% 70% 40%',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Navbar link glow effect
export const navbarGlow: Variants = {
  whileHover: {
    color: '#FBBF24',
    textShadow: [
      '0 0 0px rgba(251, 191, 36, 0)',
      '0 0 10px rgba(251, 191, 36, 0.6)',
      '0 0 20px rgba(251, 191, 36, 0.4)',
    ],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Mobile navbar slide animation
export const mobileNavSlide: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// Badge pop-in animation
export const badgePopIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}
