import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, Express js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - May 2024",
    role: "Frontend Developer Intern",
    company: "Electroweb Solutions",
    description: `Designed and developed user interfaces for web applications using Html , css and js. Worked closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "js", "mySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Whiteboard Web Application",
    image: project1,
    description:
      "A fully functional Whiteboard with features like pencil ,  pencil with different colors, eraser with sizes, sticky notes, sticky images and download boards .",
    technologies: ["HTML", "CSS", "javascript" ],
  },
  {
    title: "WanderWin",
    image: project2,
    description:
      "Developed a full-stack Booking web application Called WanderWin, It acts as a broker and charges a commission from each booking.",
    technologies: ["ejs", "nodejs" , "mongodb" , "expressjs"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "js", "Bootstrap"],
  },
  {
    title: "TradeOne ",
    image: project4,
    description:
      "Online stock brokerage platform for trading and investing in stocks, futures, options, commodities, currency, ETFs, mutual funds, and bonds..",
    technologies: ["React", "CSS",  "Express", "Mongodb","nodejs"],
  },
];

export const CONTACT = {
  address: "Gujarat , India ",
  phoneNo: "+91 9662331035 ",
  email: "devangpatel10505@gmail.com",
  resume : "resume",
};