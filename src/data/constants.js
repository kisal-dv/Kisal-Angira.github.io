export const Bio = {
  name: "Kisal Angira",
  roles: [
  "Full Stack Developer",
  "Software Engineer Intern",
  "DevOps Enthusiast",
  "Cloud & Automation Learner",
],
description: (
  <>
    <p>
      Passionate Software Engineering student with experience in full-stack
      development and growing knowledge in DevOps, cloud technologies,
      Linux, Docker, and CI/CD workflows.
    </p>

    <p>
      Skilled in React, Angular, and Spring Boot, with a strong interest in
      building scalable and efficient applications while continuously learning
      modern technologies.
    </p>

    <p>
      Open to internships, collaborations, and new tech opportunities.
    </p>
  </>
),
  github: "https://github.com/kisal-dv",
  resume: "https://drive.google.com/file/d/1oHzdseoLokdgaHy8CYPfhXeSscAvyat_/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/kisal-angira/",
 // twitter: "https://x.com/AngiraKisal",
 // insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  behance: "https://www.behance.net/kisalangira",
 // dribble: "https://dribbble.com/kavindu-dilshan",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", image: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", image: "https://skillicons.dev/icons?i=ts" },
      { name: "React", image: "https://skillicons.dev/icons?i=react" },
      { name: "Angular", image: "https://skillicons.dev/icons?i=angular" },
      { name: "Tailwind CSS", image: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Bootstrap", image: "https://skillicons.dev/icons?i=bootstrap" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Linux", image: "https://skillicons.dev/icons?i=linux" },
      { name: "Docker", image: "https://skillicons.dev/icons?i=docker" },
      { name: "Kubernetes", image: "https://skillicons.dev/icons?i=kubernetes" },
      { name: "Git", image: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", image: "https://skillicons.dev/icons?i=github" },
      { name: "Jenkins", image: "https://skillicons.dev/icons?i=jenkins" },
      { name: "CI/CD", image: "https://skillicons.dev/icons?i=githubactions" },
      { name: "GitLab CI", image: "https://skillicons.dev/icons?i=gitlab" },
      { name: "Nginx", image: "https://skillicons.dev/icons?i=nginx" },
      { name: "AWS", image: "https://skillicons.dev/icons?i=aws" },
      { name: "VMware", image: "https://via.placeholder.com/24" },
      { name: "Shell Scripting", image: "https://skillicons.dev/icons?i=bash" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", image: "https://skillicons.dev/icons?i=java" },
      { name: "Spring Boot", image: "https://skillicons.dev/icons?i=spring" },
      { name: "Node.js", image: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", image: "https://skillicons.dev/icons?i=express" },
      { name: "Python", image: "https://skillicons.dev/icons?i=python" },
      { name: "REST APIs", image: "https://via.placeholder.com/24" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", image: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", image: "https://skillicons.dev/icons?i=postgresql" },
      { name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Postman", image: "https://skillicons.dev/icons?i=postman" },
      { name: "VS Code", image: "https://skillicons.dev/icons?i=vscode" },
      { name: "IntelliJ IDEA", image: "https://skillicons.dev/icons?i=intellij" },
      { name: "Figma", image: "https://skillicons.dev/icons?i=figma" },
      { name: "Terraform", image: "https://skillicons.dev/icons?i=terraform" },
      { name: "Prometheus", image: "https://via.placeholder.com/24" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: require('../images/organic.jpg'),
    role: "Hotel Marketing Assistant",
    company: "The Organic Team",
    date: "December 2023 - November 2025",
    desc: "Managed end-to-end hotel bookings across 11 properties, executed targeted social media campaigns, and created promotional content. Enhanced customer engagement, improved online reputation, and contributed to increased direct bookings.",
    skills: ["Marketing", "Customer Engagement", "Social Media Management"],
    doc: "",
  },
  {
    id: 1,
    img: require('../images/legacyhealth.png'),
    role: "Operation - Executive",
    company: "Legacy Health LLC",
    date: "November, 2025 - March, 2026",
    desc: "Supported US healthcare RCM operations by handling daily tasks, maintaining accuracy, and collaborating with teams in a fast-paced, deadline-driven environment.",
    skills: ["RCM Operations", "Healthcare Processes", "Data Accuracy", "Team Collaboration", "Time Management", "Problem Solving"],
    doc: "",
  },
];


export const education = [
  {
    id: 0,
    img: require('../images/colombo-uni.png'),
    school: "University of Colombo School of Computing (UCSC)",
    date: "Jul 2023 - Present",
    grade: "",
    desc: "Pursuing Bachelor of Information Technology with practical experience in software development and full-stack applications, focusing on real-world project solutions.",
    degree: "Bachelor of Information Technology",
  },
  {
    id: 1,
    img: require('../images/ijse.png'),
    school: "IJSE - Institute of Software Engineering, Panadura",
    date: "2024",
    grade: "",
    desc: "Completed Comprehensive Master Java Developer (CMJD) program focusing on Java, Spring Boot, and full-stack application development.",
    degree: "CMJD - Comprehensive Master Java Developer",
  },
  {
    id: 2,
    img: null,
    school: "GCE Advanced Level - Mathematics Stream",
    date: "2022 - 2023",
    grade: "",
    desc: "Completed A/L in Mathematics stream.",
    degree: "Advanced Level (Mathematics Stream)",
  },
];

export const projects = [
  {
    id: 4,
    title: "Cloud-Based DevOps Pipeline Application",
    date: "2026",
    description: "Designed and implemented an automated CI/CD pipeline using Docker, Jenkins, and Terraform to build, test, and deploy containerized applications to AWS. Includes automated testing, infrastructure as code, and monitoring integration.",
    image: require('../images/devopspipeline.jpg'),
    tags: ["Docker", "CI/CD", "Jenkins", "Terraform", "AWS"],
    category: "web app",
    github: "https://github.com/kisal-dv/devops-pipeline-app",
    webapp: "https://devops-pipeline-app-production.up.railway.app/api/hello",
    member: [
      {
        name: "Kisal Angira",
        linkedin: "https://www.linkedin.com/in/kisal-angira/",
        github: "https://github.com/kisal-dv",
      },
    ],
  },
  {
    id: 0,
    title: "Lost and Found System",
    date: "2023",
    description: "Built a full-stack lost and found application with React, TypeScript, Tailwind CSS frontend, Spring Boot backend, MySQL database, JWT authentication, and REST APIs.",
    image: null,
    tags: ["React", "TypeScript", "Spring Boot", "MySQL", "JWT", "REST API"],
    category: "web app",
    github: "https://github.com/kisal-dv/LostAndFound",
    webapp: "",
    member: [
      {
        name: "Kisal Angira",
        img: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/kisal-angira/",
        github: "https://github.com/kisal-dv",
      },
    ],
  },
  {
    id: 1,
    title: "Library Management System",
    date: "2023",
    description: "Developed a backend system to manage books, members, and borrowing with Spring Boot, MySQL, JPA, ModelMapper, and REST APIs.",
    image: null,
    tags: ["Spring Boot", "MySQL", "JPA", "REST API", "Backend"],
    category: "web app",
    github: "https://github.com/kisal-dv/LibraryManagementSystem",
    webapp: "",
    member: [
      {
        name: "Kisal Angira",
        img: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/kisal-angira/",
        github: "https://github.com/kisal-dv",
      },
    ],
  },
  {
    id: 2,
    title: "Course Registration System",
    date: "2023",
    description: "Built a full-stack course registration system with Thymeleaf, Bootstrap frontend, Spring Boot backend, and MySQL database, featuring dynamic form handling and MVC architecture.",
    image: null,
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "MVC"],
    category: "web app",
    github: "https://github.com/kisal-dv/CourseRegistrationSystem",
    webapp: "",
    member: [
      {
        name: "Kisal Angira",
        img: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/kisal-angira/",
        github: "https://github.com/kisal-dv",
      },
    ],
  },
  {
    id: 3,
    title: "Supermarket System",
    date: "2023",
    description: "Built a desktop-based supermarket billing and inventory system using JavaFX and MySQL, with scene-based UI navigation and modular FXML views.",
    image: null,
    tags: ["JavaFX", "Java", "MySQL", "Desktop App"],
    category: "desktop app",
    github: "https://github.com/kisal-dv/SupermarketSystem",
    webapp: "",
    member: [
      {
        name: "Kisal Angira",
        img: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/kisal-angira/",
        github: "https://github.com/kisal-dv",
      },
    ],
  },
];