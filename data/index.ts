export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    description:
      "I have completed my Btech from International Institute of Information Technology, Bhubaneswar. I have developed a strong foundation in frontend technologies, including React, Next.js, JavaScript, TypeScript and Tailwind CSS. I had also worked on projects that allowed me to hone my skills in frontend development. As a passionate and motivated individual, I am eager to apply my skills to get hands-on work experience and i hope to expand my skill-set.",
    title: "Get to know me!",
    className: "lg:col-span-5 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/banner1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
  },

  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[500px] w-60 rounded-3xl",
    titleClassName: "justify-start md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Matrix Website",
    des: "Explore a curated list of Movies and TV shows and search for any Movie or TV using OMDB Api.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/vite.svg", "/tail.svg"],
    link: "https://github.com/bibhuti147/Movie_Matrix",
    livesite: "https://movie-matrix-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Odisha Weather - Blog Application",
    des: "A Blog app allow users to like & comment a post, email verification and CRUD operations for internal users.",
    img: "/p2.jpg",
    iconLists: ["/re.svg", "/vite.svg", "/tail.svg", "/fire.svg"],
    link: "https://github.com/bibhuti147/odisha-weather-app",
    livesite: "https://odishaweather.com/",
  },
  {
    id: 3,
    title: "Expense Tracker - Budget Management Application",
    des: "A budget management app where users can seamlessly create, edit, and manage budgets and expenses.",
    img: "/p3.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/c.svg", "/shadcn.svg", "/neon.svg"],
    link: "https://github.com/bibhuti147/Expense_Tracker",
    livesite: "https://expense-tracker-flax-psi.vercel.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/bibhuti147",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bibhuti-bhusan-nayak-200a64218",
  },
];
