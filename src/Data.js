export const projects = [
  {
    id: 1,
    title: "Grogin - Online Grocery Marketplace",
    badge: "Best",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647374/grogin-1_wagggh.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647408/grogin-2_sg9lmw.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647433/grogin-3_qsubej.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647452/grogin-4_wbpyvt.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647474/grogin-5_mnfltz.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647490/grogin-6_tafnav.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647514/grogin-7_axqcqt.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647557/grogin-8_mcd7ew.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647576/grogin-9_yer26h.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647597/grogin-10_teb2yt.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647615/grogin-11_rgiyzq.png",
    ],
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755699738/Grogin_Video_30mb_gyntkz.mov",
    description:
      "Grogin is an integrated and advanced e-commerce platform specialized in selling fresh and packaged food products. The project aims to provide a seamless and secure shopping experience for users, enabling them to browse and filter products intelligently, manage their shopping carts and favorites easily, and access food-related articles and tips through the blog section.",
    technicals: [
      "React",
      "React Router",
      "Redux",
      "Sass",
      "Axios",
      "MUI",
      "HTML5",
      "React Toastify",
    ],
    techStack: [
      {
        id: 1,
        key: "frontend development",
        value:
          "React, React Router (to manage navigation between pages such as Home, Shop, Cart).",
      },
      {
        id: 2,
        key: "state managemnet",
        value:
          "Redux (to centrally and efficiently manage complex application state such as cart, product, and user).",
      },
      { id: 3, key: "core function", value: "JavaScript(ES6+), HTML5" },
      {
        id: 4,
        key: "Ui/Design",
        value:
          "MUI, Sass (for full design control and customization, and create responsve layouts using Flexbox/Grid).",
      },
      {
        id: 5,
        key: "error boundaries",
        value:
          "(to check and handle errors in React, components elegantly and prevent the entire interface from collapsing).",
      },
      {
        id: 6,
        key: "Algorithm",
        value:
          "Quick Sort (has been implemented to efficiently implement the Sort function for products (by price or rate) on the client-side)",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "user experience",
        value:
          "Browse products add/remove items from cart, favorites and compare.",
      },
      {
        id: 2,
        key: "product discovery",
        value:
          "Advanced filtering system by price, category, reviews, and Sort system for products.",
      },
      {
        id: 3,
        key: "account management",
        value:
          "Create a new account, login, and manage user data. (Formik & Yub)",
      },
      {
        id: 4,
        key: "content",
        value: "Blogs section to view related articles.",
      },
      {
        id: 5,
        key: "performance",
        value:
          "The app is built with performance in mind with technologies like lazy loading and memorization.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/grogin/",
    github: "https://github.com/Amr-Elmasry3/grogin",
  },
  {
    id: 2,
    title: "Amazing - All In One Marketplace",
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755699386/Amazing_main_sdcftl.mp4",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647658/amazing-1_bknb6k.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647766/amazing-3_py8vjn.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647751/amazing-2_wjnhvs.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647788/amazing-4_m8yfjn.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647807/amazing-5_zbgcvv.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647826/amazing-6_dgjjts.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647848/amazing-7_dckvye.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647869/amazing-8_rcnu69.png",
    ],
    description:
      "Amazing is a one-stop online store that offers a unique shopping experience for a wide range of products that include apparel, (such as laptops and phones), food, and more. The platform is built to be a one-stop destination that caters to all users needs, with a focus on a modern and seamless user interface and ease of product discovery).",
    technicals: [
      "React",
      "React Router",
      "Redux",
      "Axios",
      "HTML5",
      "CSS3",
      "Tailwind Css",
      "MUI",
      "React Toastify",
    ],
    techStack: [
      {
        id: 1,
        key: "frontend development",
        value:
          "React, React Router (to manage navigation between pages such as Home, Shop, Cart).",
      },
      {
        id: 2,
        key: "state managemnet",
        value:
          "Redux (to centrally and efficiently manage complex application state such as cart, product, and user).",
      },
      { id: 3, key: "core function", value: "JavaScript(ES6+), HTML5, CSS3" },
      {
        id: 4,
        key: "UI/Design",
        value:
          "Tailwind Css (as a core framework for building fast-developing, customized, and responsive user interface using utility-first classes)",
      },
      {
        id: 5,
        key: "server conection",
        value: "Axios (to connect with the DummyJSON API to fetch data).",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "integrated shopping experience",
        value: "Browse a variety of products from multiple categories.",
      },
      {
        id: 2,
        key: "advanced search & filtering",
        value:
          "Product search system, with multiple filering capabilities by category, rate, and price.",
      },
      {
        id: 3,
        key: "user managment",
        value: "Create an account login, and logout.",
      },
      {
        id: 4,
        key: "user menus",
        value:
          "Dynamically add and remove products from cart, wishlist, and compare list.",
      },
      {
        id: 5,
        key: "interactive interface",
        value: "Resonsive design that works on all devices.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/amazing/",
    github: "https://github.com/Amr-Elmasry3/amazing",
  },
  {
    id: 3,
    title: "EduLearn - Smart Learning Platform",
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755649350/Edulearn_Video_eytnev.mp4",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647905/edulearn-1_mgmxci.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647905/edulearn-2_q2kpbn.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647906/edulearn-4_s9fsxd.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647907/edulearn-3_xopfgq.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647916/edulearn-5_qyqtz5.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647917/edulearn-6_jrd9lv.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647920/edulearn-7_srshyf.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647924/edulearn-8_k2tm8h.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647925/edulearn-9_ebs3ez.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647928/edulearn-10_shlp2p.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647930/edulearn-11_cwovmd.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647936/edulearn-12_mxajir.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647941/edulearn-13_lkii0d.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647941/edulearn-14_jpjinm.png",
    ],
    description:
      "EduLearn is is an learning platform that aims to connect learners with the best educational courses in various fields. The platform provides a personlized and easy user experience to discover the right courses based on their skills and interests. The site features high-quality educational content organzied through an advanced filtering and classifcation system, in addition to a community of learners through blog and FAQS pages.",
    technicals: [
      "React",
      "React Router",
      "Content API",
      "HTML5",
      "Sass",
      "MUI",
    ],
    techStack: [
      {
        id: 1,
        key: "frontend development",
        value:
          "React, React Router (to manage navigation between pages such as Home, Shop, Cart).",
      },
      {
        id: 2,
        key: "state managemnet",
        value:
          "useReducer + Context API (to centrally and efficiently manage complex application state such as cart, product, and user).",
      },
      { id: 3, key: "core function", value: "JavaScript(ES6+), HTML5, Sass" },
      {
        id: 4,
        key: "Ui/Design",
        value:
          "MUI, Sass (for full design control and customization, and create responsve layouts using Flexbox/Grid).",
      },
      {
        id: 5,
        key: "data source",
        value: "Fake data stored locally within the project.",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "discover courses",
        value:
          "Browse a comprehensive list of courses with a filtering system (search, category, level, online or offline).",
      },
      {
        id: 2,
        key: "course details",
        value:
          "A dedicated page for each course that displayes the price, duration, content (chapters), and full instructor information.",
      },
      {
        id: 3,
        key: "profile managment",
        value:
          "A user page that allows you to keep track of the courses you are enrolled in and control your account settings.",
      },
      {
        id: 4,
        key: "community support",
        value:
          "Blogs and FAQS sections to provide support and enrichment for learners.",
      },
      {
        id: 5,
        key: "content",
        value: "Members page to showcase to learning community.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/edulearn/",
    github: "https://github.com/Amr-Elmasry3/edulearn",
  },
  {
    id: 4,
    title: "Advanced Todo List",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755647983/todo-1_zuhoqd.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648010/todo-2_ywaufz.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648011/todo-3_fjp8wg.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648013/todo-4_npminf.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648020/todo-5_tunttd.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648021/todo-6_ufymeo.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648025/todo-7_ul6lxk.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648030/todo-8_lpsihs.png",
    ],
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755648628/Todo_List_Video_hmrggv.mp4",
    description:
      "Todo List is a task management app that goes beyond the concept of traditional to-do lists. The app not only adds and removes tasks, but also organize them into specific categories (personal, education, health) to help the user focus on different aspects of their life. The app features full Arabic and English language support and provides the user with full control over their account and personalized experience.",
    technicals: ["React", "Redux", "i18next", "HTML5", "CSS3"],
    techStack: [
      { id: 1, key: "frontend development", value: "React." },
      {
        id: 2,
        key: "state managemnet",
        value:
          "Redux (centralized and secure management of user data, all tasks, classes, language and interface settings).",
      },
      {
        id: 3,
        key: "internationalization",
        value:
          "i18next (a standard and professional library for internationlization of React applications, allowing for dynamic language switching and efficient translation file managemant).",
      },
      { id: 4, key: "core functions", value: "JavaScript[ES6+], HTML5, CSS3." },
      {
        id: 5,
        key: "styling",
        value:
          "a beautiful, responsive user interface bulit from scratch for complete control over the visaul experience and integration with RTL-LTR languages.",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "task managemnet by category",
        value:
          "Creat, view, and organize tasks in custom categories (Health, Education, Personal), with a separate page for each category.",
      },
      {
        id: 2,
        key: "multilingual experience",
        value:
          "Seamless and complete interface switching between Arabic and English.",
      },
      {
        id: 3,
        key: "profile management",
        value:
          "Simple login, the ability o change the username and profile picture, and delete the entire account with all associated tasks.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/Todo-List/",
    github: "https://github.com/Amr-Elmasry3/Todo-List",
  },
  {
    id: 5,
    title: "Speed Test App",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648073/type-speed-1_kta8op.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648074/type-speed-2_qbct48.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648077/type-speed-3_w2fbip.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648083/type-speed-4_ywqmwd.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648084/type-speed-5_wq8nqk.png",
    ],
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755648434/Speed_Test_Video_gerzzn.mp4",
    description:
      "Speed Test is an exciting and interactive web game designed to test the speed and accuracy of typing. The game is based on the principle of challenge against time, where the player must type the words presented to him before the time allotted for each word expires, The game offers three levels of difficulty (easy, medium, hard) to suit beginners and professionals, making it suitable for everyone.",
    technicals: ["HTML5, CSS3", "JavaScript[ES6+]"],
    techStack: [
      {
        id: 1,
        key: "core development",
        value:
          "Vanilla JavaScript(ES6+), HTML5, CSS3 (the application was built entirely with Pure Javascript without any framework).",
      },
      {
        id: 2,
        key: "data management",
        value:
          "LocalStorage (to storing user data localyly on the browser, such as user scores).",
      },
      {
        id: 3,
        key: "Styling",
        value:
          "CSS3 (an attractive, interactive and responsive user interface  to optimize the gameplay experience).",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "level system",
        value:
          "Three difficulty levels (Easy: 8 seconds per word, Medium: 6 seconds per word, hard: 4 seconds per word).",
      },
      {
        id: 2,
        key: "game mechanism",
        value:
          "Words appear sequentially, and each word must be typed correctly before its time expires to move on to the next word.",
      },
      {
        id: 3,
        key: "end of game",
        value:
          "The round ends if the time runs out before the word is completed.",
      },
      {
        id: 4,
        key: "scoring",
        value:
          "At the end of the round, the score (number of words typed correctly) and the difficulty level are displayed.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/typing-speed-app/",
    github: "https://github.com/Amr-Elmasry3/typing-speed-app",
  },
  {
    id: 6,
    title: "Questions Challenge App",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648091/questions-1_tkvviz.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648092/questions-2_uc3pxa.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648098/questions-3_tkibhz.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648099/questions-4_eysrhl.png",
    ],
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755648535/Questions_Challenge_Video_zmp4ql.mp4",
    description:
      "Question Challenge is an interactive web application in the form of a trivia game that tests the user is kowledge and intuition. The app presents the player with a series of questions within a specific time limit and challenges them to answer them correctly and as quickly as possible. The app features a visual design that shows the player is progress in real time through colorful indicators, creating an engaging and exciting game experience.",
    technicals: ["HTML5", "CSS3", "JavaScript(ES6+)"],
    techStack: [
      {
        id: 1,
        key: "core development",
        value:
          "Vanilla JavaScript(ES6+), HTML5, CSS3 (the application was built entirely with Pure Javascript without any framework).",
      },
      {
        id: 2,
        key: "data management",
        value:
          "Array and Objects (to load and manage the questions and answer set).",
      },
      {
        id: 3,
        key: "Styling",
        value:
          "CSS3 (an attractive, interactive and responsive user interface  to optimize the gameplay experience).",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "time challenge",
        value:
          "Play against the clock to answer as many questions as possible.",
      },
      {
        id: 2,
        key: "answer tracking",
        value:
          "A visual bullets (points) system that displays the player`s answer history (true/false) with a different color for each answer (green for true, red for false).",
      },
      {
        id: 3,
        key: "smooth experience",
        value:
          "Automatic transition to the next question once the current question is answered.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/question-app/",
    github: "https://github.com/Amr-Elmasry3/question-app",
  },
  {
    id: 7,
    title: "Hungmaun Game",
    images: [
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648105/hungman-1_s3jgaq.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648109/hangman-2_tqaepn.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648113/hungman-3_z8r7nh.png",
      "https://res.cloudinary.com/dqymivlkf/image/upload/v1755648115/hungman-4_auwgwp.png",
    ],
    video:
      "https://res.cloudinary.com/dqymivlkf/video/upload/v1755648580/Hungman_Video_wivfbk.mp4",
    description:
      "Hungman is an interactive web application that offers a digital version of the popular classic game /Guessing/ or /Hungman/. The game aims to test the player`s vocabulary and ability to guess under pressuer. A random word is chosen from specific category (soccer players, movies, ect, and the player has guess its letters before the hangman`s drwaing is completed.",
    technicals: ["HTML5", "CSS3", "JavaScript(ES6+)"],
    techStack: [
      {
        id: 1,
        key: "core development",
        value:
          "Vanilla JavaScript(ES6+), HTML5, CSS3 (the application was built entirely with Pure Javascript without any framework).",
      },
      {
        id: 2,
        key: "data management",
        value:
          "Array and Objects (to load and manage the questions and answer set).",
      },
      {
        id: 3,
        key: "Styling",
        value:
          "CSS3 (an attractive, interactive and responsive user interface  to optimize the gameplay experience).",
      },
    ],
    basicFunctions: [
      {
        id: 1,
        key: "categories",
        value:
          "Word organized into various categories (players, movies) to enrich the content and diversify the challenge.",
      },
      {
        id: 2,
        key: "virtual keyboard",
        value:
          "Display all the letters of the English language for the player to choose them.",
      },
      {
        id: 3,
        key: "smart guess",
        value:
          "When a letter is tapped, all positions of that letter in the target worf are revealed if it exists.",
      },
      {
        id: 4,
        key: "error tracking",
        value:
          "Each wrong guess brings the player closer to losing by adding a part the Hungman graphic.",
      },
      {
        id: 5,
        key: "endgame",
        value:
          "The player wins if they guess the entire word before the drawing is completed, and loss if the drawing is completed first.",
      },
    ],
    demo: "https://amr-elmasry3.github.io/hungman-game-app/",
    github: "https://github.com/Amr-Elmasry3/hungman-game-app",
  },
];
