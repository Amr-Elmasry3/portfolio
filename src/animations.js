// ********************* Profile Section *********************
// Fade Up Animation
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// Social Icons Animation
export const socialVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
    },
  },
};

// Buttons Animation
export const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  },
};

// ********************* About Section *********************
export const aboutContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const aboutWord = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
    },
  },
};

// ********************* Skills Section *********************
// Each skill animation
export const boxVariantsSkills = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 40,
    rotate: -8,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ********************* Projects Section *********************
// Each project animation
export const boxVariantsProjects = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ********************* Contacts Section *********************
// [1] => Contact Info
export const item = {
  hidden: { opacity: 0, y: 20 },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const left = {
  hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
// [2] => Contact Form
export const field = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const right = {
  hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ********************* Project Details Section *********************
export const backdropProjectDetails = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const panelProjectDetails = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const itemProjectDetails = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};
