import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CssBaseline,
  Drawer,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ApiIcon from "@mui/icons-material/Api";

import porjectImgOne from "../images/c_p_manage.jpg";
import porjectImgTwo from "../images/s_dashboard.jpg";
import porjectImgThree from "../images/v_mouse.jfif.jpg";
import PortfolioImg from "../images/portfolio_img.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiSpring,
} from "react-icons/si";

const MotionBox = motion(Box);

const theme = {
  background: "#090909",
  surface: "#101010",
  surfaceLight: "#151515",
  text: "#f4f4f4",
  muted: "#9a9a9a",
  accent: "#b7ff3c",
  border: "rgba(255,255,255,0.12)",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Frontend Development",
    icon: <CodeIcon />,
    description:
      "Building responsive, scalable and user-friendly web applications using modern frontend technologies and reusable component architecture.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "UI Engineering",
    icon: <DesignServicesIcon />,
    description:
      "Creating clean interfaces that focus on responsive behavior, usability, consistency and a better experience across devices.",
    tags: ["Material UI", "Responsive UI", "CSS", "UX"],
  },
  {
    number: "03",
    title: "API Integration",
    icon: <ApiIcon />,
    description:
      "Connecting frontend applications with backend services and REST APIs while maintaining smooth data flow and reliable user experiences.",
    tags: ["REST APIs", "Node.js", "Spring Boot", "MySQL"],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Material UI",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    number: "02",
    title: "React Development",
    skills: [
      "Reusable Components",
      "React Hooks",
      "Component Architecture",
      "State Management",
      "React Router",
    ],
  },
  {
    number: "03",
    title: "Web Engineering",
    skills: [
      "REST APIs",
      "API Integration",
      "Cross-Browser Compatibility",
      "Performance Optimization",
      "Responsive Layouts",
    ],
  },
  {
    number: "04",
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    number: "05",
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Debugging",
      "Testing",
      "Troubleshooting",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Customer Product Manager",
    image: porjectImgOne,
    category: "Full Stack Application",
    description:
      "A web application designed to manage customers and products through a centralized interface with structured data management and user-friendly workflows.",
    tech: ["React.js", "Node.js", "Database"],
    link: "https://user-product-manager.vercel.app/",
  },
  {
    number: "02",
    title: "Student Dashboard",
    image: porjectImgTwo,
    category: "Dashboard Application",
    description:
      "A responsive dashboard application for organizing student information, academic workflows and important activities through a clean interface.",
    tech: ["React.js", "Material UI", "Node.js"],
    link: "#",
  },
  {
    number: "03",
    title: "Virtual Mouse",
    image: porjectImgThree,
    category: "Machine Learning",
    description:
      "A computer vision based project that enables touch-free cursor control using hand gestures and real-time image processing.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "#",
  },
  {
    number: "04",
    title: "Personal Portfolio",
    image: PortfolioImg,
    category: "Frontend Development",
    description:
      "A modern responsive portfolio showcasing professional experience, technical skills and selected development projects.",
    tech: ["React.js", "Material UI", "Framer Motion"],
    link: "#",
  },
];
const skillsGridItems = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Java", icon: <FaJava />, color: "#EA2D2E" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Express", icon: <SiExpress />, color: "#000000" },
  { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" },
];


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =========================================================
// INLINE SVG MESH / WAVE GRADIENT BACKGROUND (Hero section)
// Dark abstract mesh with soft motion-blur glow, in brand colors
// =========================================================
const HeroMeshBackground = () => (
  <Box
    component="svg"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
    sx={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}
  >
    <defs>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#b7ff3c" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#b7ff3c" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#b7ff3c" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3cffb7" stopOpacity="0.22" />
        <stop offset="60%" stopColor="#3cffb7" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#3cffb7" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#b7ff3c" stopOpacity="0.18" />
        <stop offset="70%" stopColor="#b7ff3c" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#b7ff3c" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="base" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#090909" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="blurHeavy" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="90" />
      </filter>
      <filter id="blurMed" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="60" />
      </filter>
    </defs>

    <rect width="1920" height="1080" fill="url(#base)" />

    <ellipse
      cx="1500"
      cy="250"
      rx="520"
      ry="420"
      fill="url(#glow1)"
      filter="url(#blurHeavy)"
    />
    <ellipse
      cx="250"
      cy="850"
      rx="480"
      ry="380"
      fill="url(#glow2)"
      filter="url(#blurHeavy)"
    />
    <ellipse
      cx="1000"
      cy="950"
      rx="600"
      ry="300"
      fill="url(#glow3)"
      filter="url(#blurMed)"
    />
    <ellipse
      cx="1750"
      cy="900"
      rx="350"
      ry="300"
      fill="url(#glow1)"
      filter="url(#blurMed)"
    />

    <g opacity="0.05" stroke="#ffffff" strokeWidth="1">
      <line x1="0" y1="0" x2="1920" y2="1080" />
      <line x1="1920" y1="0" x2="0" y2="1080" />
    </g>
  </Box>
);
const SkillsBentoGrid = () => {
  return (
    <Box
      sx={{
        display: "grid",
        maxWidth: 720,
        mx: "auto",
        gap: { xs: 1.5, md: 2 },
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, minmax(70px, 1fr))",
        gridTemplateAreas: {
          xs: `
            "big1 big1 s1 s2"
            "big1 big1 s3 s4"
            "s5 s6 big2 big2"
            "s7 s8 big2 big2"
          `,
        },
      }}
    >
      {skillsGridItems.map((skill) => {
        const isBig = skill.area?.startsWith("big");

        return (
          <MotionBox
            key={skill.name}
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            sx={{
              gridArea: skill.area,
              background: "#f4f4f4",
              borderRadius: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 14px 34px rgba(0,0,0,0.35)",
              },
            }}
          >
            <MotionBox
              whileHover={{ scale: 1.15, rotate: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              sx={{
                fontSize: isBig
                  ? { xs: 46, md: 68 }
                  : { xs: 22, md: 30 },
                color: skill.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {skill.icon}
            </MotionBox>

            {isBig && (
              <Typography
                sx={{
                  color: "#111",
                  fontWeight: 800,
                  fontSize: { xs: 13, md: 15 },
                }}
              >
                {skill.name}
              </Typography>
            )}
          </MotionBox>
        );
      })}
    </Box>
  );
};
export default function Portfolio() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (process.env.NODE_ENV === "development") {
      console.log("Contact form:", formData);
    }

    /*
      CONNECT YOUR FORM HERE

      Recommended options:
      1. EmailJS
      2. Web3Forms
      3. Formspree
      4. Your Node.js backend API

      Example:
      fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    */

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          background: theme.background,
          color: theme.text,
          overflowX: "hidden",
          fontFamily: "'Inter', Arial, sans-serif",
        }}
      >
        {/* ===================================================== */}
        {/* NAVBAR */}
        {/* ===================================================== */}

        <Box
          component="header"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: 76,
            zIndex: 1000,
            borderBottom: `1px solid ${theme.border}`,
            background: "rgba(9,9,9,0.85)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
              height: "100%",
              px: { xs: 2, md: 5 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="a"
              href="#home"
              sx={{
                color: theme.text,
                textDecoration: "none",
                fontSize: { xs: 22, md: 27 },
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              MAYUR
              <span style={{ color: theme.accent }}>.</span>
            </Typography>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 3,
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: theme.muted,
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "0.3s ease",
                    "&:hover": {
                      color: theme.accent,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}

              <Button
                href="#contact"
                sx={{
                  ml: 2,
                  background: theme.accent,
                  color: "#000",
                  borderRadius: 0,
                  px: 2.5,
                  py: 1,
                  fontWeight: 800,
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                Let's Talk
              </Button>
            </Box>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: theme.text,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* MOBILE MENU */}
        {/* ===================================================== */}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: 430,
              background: theme.background,
              color: theme.text,
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 8,
              }}
            >
              <Typography fontSize={26} fontWeight={900}>
                MAYUR
                <span style={{ color: theme.accent }}>.</span>
              </Typography>

              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: theme.text,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {navItems.map((item, index) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  display: "block",
                  color: theme.text,
                  textDecoration: "none",
                  fontWeight: 900,
                  fontSize: 36,
                  mb: 2.5,
                  "&:hover": {
                    color: theme.accent,
                  },
                }}
              >
                <span
                  style={{
                    color: theme.accent,
                    fontSize: 14,
                    marginRight: 12,
                  }}
                >
                  0{index + 1}
                </span>

                {item.label}
              </Typography>
            ))}
          </Box>
        </Drawer>

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            pt: { xs: 16, md: 14 },
            px: { xs: 2, md: 5 },
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inline SVG mesh/wave gradient background */}
          <HeroMeshBackground />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          />

          <MotionBox
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: theme.accent,
              filter: "blur(180px)",
              opacity: 0.1,
              top: "20%",
              right: "-180px",
            }}
          />

          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
          >
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <MotionBox variants={fadeUp}>
                <Typography
                  sx={{
                    color: theme.accent,
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: 2,
                    mb: 3,
                  }}
                >
                  REACT.JS DEVELOPER / FRONTEND ENGINEER
                </Typography>
              </MotionBox>

              <MotionBox variants={fadeUp}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      sm: "6rem",
                      md: "9rem",
                      lg: "11rem",
                    },
                    fontWeight: 900,
                    lineHeight: 0.8,
                    letterSpacing: "-0.075em",
                    mb: 5,
                  }}
                >
                  BUILDING
                  <br />
                  DIGITAL
                  <br />
                  <span style={{ color: theme.accent }}>EXPERIENCES.</span>
                </Typography>
              </MotionBox>

              <MotionBox
                variants={fadeUp}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 4,
                  alignItems: "end",
                  maxWidth: 1100,
                }}
              >
                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: {
                      xs: 17,
                      md: 21,
                    },
                    lineHeight: 1.7,
                    maxWidth: 600,
                  }}
                >
                  I'm Mayur Kumbhar, a React.js Developer focused on building
                  responsive, modern and high-performance web applications with
                  clean UI and reliable user experiences.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: {
                      xs: "flex-start",
                      md: "flex-end",
                    },
                  }}
                >
                  <Button
                    href="#work"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      background: theme.accent,
                      color: "#000",
                      borderRadius: 0,
                      px: 3,
                      py: 1.5,
                      fontWeight: 800,
                      "&:hover": {
                        background: "#fff",
                      },
                    }}
                  >
                    View Work
                  </Button>

                  <Button
                    href="#contact"
                    sx={{
                      color: theme.text,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 0,
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        borderColor: theme.accent,
                        color: theme.accent,
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </MotionBox>
            </MotionBox>
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* ABOUT */}
        {/* ===================================================== */}

        <Box
          id="about"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ ABOUT ME ]
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1.25fr 0.75fr",
                },
                gap: {
                  xs: 6,
                  md: 12,
                },
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2.8rem",
                      md: "5.5rem",
                    },
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: "-0.06em",
                    mb: 4,
                  }}
                >
                  BUILDING CLEAN.
                  <br />
                  <span style={{ color: theme.accent }}>BUILDING USEFUL.</span>
                  <br />
                  BUILDING FAST.
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: {
                      xs: 17,
                      md: 20,
                    },
                    lineHeight: 1.8,
                    maxWidth: 750,
                    mb: 3,
                  }}
                >
                  I'm Mayur Kumbhar, a React.js Developer with professional
                  experience building responsive, high-performance and
                  user-friendly web applications.
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: {
                      xs: 17,
                      md: 20,
                    },
                    lineHeight: 1.8,
                    maxWidth: 750,
                    mb: 3,
                  }}
                >
                  My core expertise includes React.js, JavaScript, HTML5, CSS3,
                  Material UI and responsive frontend development. I enjoy
                  building reusable components, integrating REST APIs and
                  improving application performance across different devices and
                  browsers.
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: {
                      xs: 17,
                      md: 20,
                    },
                    lineHeight: 1.8,
                    maxWidth: 750,
                  }}
                >
                  I also have hands-on knowledge of Node.js, Express.js, Java,
                  Spring Boot, Python and databases, helping me understand
                  complete application workflows beyond the frontend.
                </Typography>
              </Box>

              {/* <MotionBox
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                sx={{
                  position: "relative",
                  maxWidth: 480,
                  width: "100%",
                  justifySelf: {
                    xs: "center",
                    md: "end",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 15,
                    border: `1px solid ${theme.accent}`,
                    transform: "translate(18px, 18px)",
                    opacity: 0.5,
                  }}
                />

                <Box
                  component="img"
                  src={manImg}
                  alt="Mayur Kumbhar"
                  sx={{
                    width: "100%",
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                    filter: "grayscale(20%) contrast(1.05)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 2,
                    width: "100%",
                    p: 3,
                    pt: 10,
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,.95))",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.accent,
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: 2,
                    }}
                  >
                    REACT.JS DEVELOPER
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    MAYUR KUMBHAR
                  </Typography>
                </Box>
              </MotionBox> */}
              <SkillsBentoGrid />
            </Box>
          </MotionBox>
        </Box>

        {/* ===================================================== */}
        {/* SERVICES */}
        {/* ===================================================== */}

        <Box
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 16 },
            background: theme.surface,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ WHAT I DO ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "6rem",
                },
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.07em",
                mb: 8,
              }}
            >
              WHAT I
              <br />
              <span style={{ color: theme.accent }}>BUILD.</span>
            </Typography>

            {services.map((service) => (
              <MotionBox
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 10,
                }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "100px 1fr 1.4fr",
                  },
                  gap: 4,
                  py: 5,
                  borderTop: `1px solid ${theme.border}`,
                }}
              >
                <Typography
                  sx={{
                    color: theme.accent,
                    fontWeight: 800,
                  }}
                >
                  [{service.number}]
                </Typography>

                <Box>
                  <Box
                    sx={{
                      color: theme.accent,
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 26,
                        md: 36,
                      },
                      fontWeight: 900,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: theme.muted,
                      fontSize: 17,
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    {service.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          color: theme.text,
                          background: "transparent",
                          border: `1px solid ${theme.border}`,
                          borderRadius: 0,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* SKILLS */}
        {/* ===================================================== */}

        <Box
          id="skills"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ TECHNICAL SKILLS ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3.2rem",
                  md: "6.5rem",
                },
                fontWeight: 900,
                letterSpacing: "-0.07em",
                lineHeight: 0.9,
                mb: 10,
              }}
            >
              MY TECH
              <br />
              <span style={{ color: theme.accent }}>TOOLKIT.</span>
            </Typography>

            <Box>
              {skillGroups.map((group, index) => (
                <MotionBox
                  key={group.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "120px 0.8fr 1.5fr",
                    },
                    gap: {
                      xs: 2,
                      md: 5,
                    },
                    py: {
                      xs: 4,
                      md: 5,
                    },
                    borderTop: `1px solid ${theme.border}`,
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(183,255,60,0.03)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.accent,
                      fontWeight: 800,
                    }}
                  >
                    [{group.number}]
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 24,
                        md: 32,
                      },
                      fontWeight: 900,
                      lineHeight: 1.1,
                    }}
                  >
                    {group.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.2,
                    }}
                  >
                    {group.skills.map((skill) => (
                      <MotionBox
                        key={skill}
                        whileHover={{
                          y: -4,
                        }}
                        sx={{
                          border: `1px solid ${theme.border}`,
                          px: 2,
                          py: 1,
                          color: theme.muted,
                          fontSize: {
                            xs: 13,
                            md: 15,
                          },
                          cursor: "default",
                          transition: "0.3s",
                          "&:hover": {
                            borderColor: theme.accent,
                            color: theme.accent,
                          },
                        }}
                      >
                        {skill}
                      </MotionBox>
                    ))}
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* PROJECTS */}
        {/* ===================================================== */}

        <Box
          id="work"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
            background: theme.surface,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ SELECTED WORK ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "6.5rem",
                },
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.07em",
                mb: 10,
              }}
            >
              PROJECTS
              <br />
              <span style={{ color: theme.accent }}>THAT MATTER.</span>
            </Typography>

            {projects.map((project, index) => (
              <MotionBox
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.8fr 1.2fr",
                  },
                  gap: {
                    xs: 3,
                    md: 7,
                  },
                  py: {
                    xs: 5,
                    md: 8,
                  },
                  borderTop: `1px solid ${theme.border}`,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <MotionBox
                    component="img"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: theme.accent,
                        fontWeight: 800,
                        mb: 2,
                      }}
                    >
                      ({project.number}) — {project.category}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 34,
                          md: 60,
                        },
                        lineHeight: 1,
                        fontWeight: 900,
                        letterSpacing: "-0.05em",
                        mb: 3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: theme.muted,
                        fontSize: 17,
                        lineHeight: 1.7,
                        maxWidth: 650,
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {project.tech.map((tech) => (
                        <Typography
                          key={tech}
                          sx={{
                            color: theme.muted,
                            border: `1px solid ${theme.border}`,
                            px: 1.5,
                            py: 0.7,
                            fontSize: 13,
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Button
                    href={project.link}
                    target={
                      project.link?.startsWith("http") ? "_blank" : undefined
                    }
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      mt: 5,
                      alignSelf: "flex-start",
                      color: theme.text,
                      borderRadius: 0,
                      px: 0,
                      pb: 1,
                      borderBottom: `1px solid ${theme.accent}`,
                      "&:hover": {
                        color: theme.accent,
                        background: "transparent",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* EXPERIENCE */}
        {/* ===================================================== */}

        <Box
          id="experience"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
          }}
        >
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ PROFESSIONAL EXPERIENCE ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "6rem",
                },
                fontWeight: 900,
                letterSpacing: "-0.07em",
                lineHeight: 0.9,
                mb: 10,
              }}
            >
              EXPERIENCE
              <br />
              <span style={{ color: theme.accent }}>THAT BUILDS.</span>
            </Typography>

            <Box
              sx={{
                borderTop: `1px solid ${theme.border}`,
                borderBottom: `1px solid ${theme.border}`,
                py: {
                  xs: 4,
                  md: 6,
                },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.2fr 1fr 0.35fr",
                  },
                  gap: 4,
                  mb: 6,
                }}
              >
                <Typography
                  sx={{
                    color: theme.accent,
                    fontWeight: 800,
                  }}
                >
                  [ 01 ]
                </Typography>

                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 28,
                        md: 48,
                      },
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      mb: 1,
                    }}
                  >
                    Web Designer / Developer
                  </Typography>

                  <Typography
                    sx={{
                      color: theme.accent,
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    LPC Advisors Pvt. Ltd.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: theme.muted,
                    textAlign: {
                      xs: "left",
                      md: "right",
                    },
                    lineHeight: 1.7,
                  }}
                >
                  AUG 2023 — PRESENT
                  <br />
                  INDIA
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.2fr 1fr",
                  },
                  gap: 4,
                }}
              >
                <Box />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    maxWidth: 900,
                  }}
                >
                  {[
                    "Build and maintain responsive web applications using React.js, JavaScript, HTML5, CSS3, Material UI and REST API integrations.",
                    "Develop reusable and responsive UI components to improve consistency, usability and maintainability across web applications.",
                    "Integrate frontend interfaces with REST APIs and support smooth data flow between frontend and backend systems.",
                    "Test applications, identify and debug frontend issues, and support troubleshooting and production fixes.",
                    "Improve website usability, responsive behavior, cross-browser compatibility and frontend performance.",
                    "Collaborate on web development tasks while following responsive design and user-focused UI development practices.",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.accent,
                          fontWeight: 900,
                        }}
                      >
                        —
                      </Typography>

                      <Typography
                        sx={{
                          color: theme.muted,
                          fontSize: {
                            xs: 16,
                            md: 18,
                          },
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Box>

        {/* ===================================================== */}
        {/* CONTACT - EXACT 50 / 50 */}
        {/* ===================================================== */}

        <Box
          id="contact"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
            background: theme.surface,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 800,
                mb: 3,
              }}
            >
              [ LET'S TALK ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3.4rem",
                  md: "7rem",
                },
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: "-0.07em",
                mb: 8,
              }}
            >
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span style={{ color: theme.accent }}>GREAT.</span>
            </Typography>

            {/* EXACT TWO EQUAL PARTS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                border: `1px solid ${theme.border}`,
              }}
            >
              {/* LEFT CONTACT INFO */}

              <MotionBox
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                sx={{
                  p: {
                    xs: 3,
                    md: 6,
                  },
                  borderRight: {
                    xs: "none",
                    md: `1px solid ${theme.border}`,
                  },
                  borderBottom: {
                    xs: `1px solid ${theme.border}`,
                    md: "none",
                  },
                  minHeight: {
                    md: 650,
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 30,
                        md: 46,
                      },
                      fontWeight: 900,
                      lineHeight: 1,
                      mb: 3,
                    }}
                  >
                    Start a conversation.
                  </Typography>

                  <Typography
                    sx={{
                      color: theme.muted,
                      fontSize: 17,
                      lineHeight: 1.7,
                      maxWidth: 500,
                    }}
                  >
                    Whether you have a job opportunity, project idea or want to
                    collaborate, feel free to send me a message.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    mt: 6,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <EmailIcon
                      sx={{
                        color: theme.accent,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: theme.muted,
                          fontSize: 12,
                          letterSpacing: 1.5,
                          mb: 0.5,
                        }}
                      >
                        EMAIL
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 16,
                        }}
                      >
                        YOUR_EMAIL@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        color: theme.accent,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: theme.muted,
                          fontSize: 12,
                          letterSpacing: 1.5,
                          mb: 0.5,
                        }}
                      >
                        LOCATION
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 16,
                        }}
                      >
                        Bhuinj, Satara, Maharashtra, India
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      mt: 2,
                    }}
                  >
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/mayur-kumbhar-b27523201"
                      target="_blank"
                      aria-label="LinkedIn profile"
                      sx={{
                        color: theme.text,
                        border: `1px solid ${theme.border}`,
                        borderRadius: 0,
                        "&:hover": {
                          background: theme.accent,
                          color: "#000",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="https://github.com/Mayur-kumbhar09"
                      target="_blank"
                      aria-label="GitHub profile"
                      sx={{
                        color: theme.text,
                        border: `1px solid ${theme.border}`,
                        borderRadius: 0,
                        "&:hover": {
                          background: theme.accent,
                          color: "#000",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Box>
              </MotionBox>

              {/* RIGHT CONTACT FORM */}

              <MotionBox
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                sx={{
                  p: {
                    xs: 3,
                    md: 6,
                  },
                  minHeight: {
                    md: 650,
                  },
                  background: theme.surfaceLight,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 30,
                      md: 46,
                    },
                    fontWeight: 900,
                    lineHeight: 1,
                    mb: 5,
                  }}
                >
                  Tell me about it.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                  }}
                >
                  <TextField
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputLabelProps={{
                      sx: {
                        color: theme.muted,
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: theme.text,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "& fieldset": {
                          borderColor: theme.border,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.accent,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.accent,
                        },
                      },
                    }}
                  />

                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    InputLabelProps={{
                      sx: {
                        color: theme.muted,
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: theme.text,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "& fieldset": {
                          borderColor: theme.border,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.accent,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.accent,
                        },
                      },
                    }}
                  />

                  <TextField
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                      sx: {
                        color: theme.muted,
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: theme.text,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "& fieldset": {
                          borderColor: theme.border,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.accent,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.accent,
                        },
                      },
                    }}
                  />

                  <TextField
                    name="message"
                    label="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    fullWidth
                    InputLabelProps={{
                      sx: {
                        color: theme.muted,
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: theme.text,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "& fieldset": {
                          borderColor: theme.border,
                        },
                        "&:hover fieldset": {
                          borderColor: theme.accent,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.accent,
                        },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    endIcon={<SendIcon />}
                    sx={{
                      alignSelf: "flex-start",
                      background: theme.accent,
                      color: "#000",
                      borderRadius: 0,
                      px: 4,
                      py: 1.5,
                      fontWeight: 900,
                      "&:hover": {
                        background: "#fff",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* ===================================================== */}
        {/* FOOTER */}
        {/* ===================================================== */}

        <Box
          sx={{
            px: { xs: 2, md: 5 },
            py: 4,
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                color: theme.muted,
                fontSize: 14,
              }}
            >
              © {new Date().getFullYear()} Mayur Kumbhar. All rights reserved.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              <Typography
                component="a"
                href="https://github.com/Mayur-kumbhar09"
                target="_blank"
                sx={{
                  color: theme.muted,
                  textDecoration: "none",
                  fontSize: 14,
                  "&:hover": {
                    color: theme.accent,
                  },
                }}
              >
                GitHub
              </Typography>

              <Typography
                component="a"
                href="https://www.linkedin.com/in/mayur-kumbhar-b27523201"
                target="_blank"
                sx={{
                  color: theme.muted,
                  textDecoration: "none",
                  fontSize: 14,
                  "&:hover": {
                    color: theme.accent,
                  },
                }}
              >
                LinkedIn
              </Typography>
            </Box>
          </Box>
        </Box>

        <Snackbar
          open={success}
          autoHideDuration={4000}
          onClose={() => setSuccess(false)}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setSuccess(false)}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
