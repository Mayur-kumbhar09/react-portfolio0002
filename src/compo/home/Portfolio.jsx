import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  TextField,
  Typography,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";

import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AnimationIcon from "@mui/icons-material/Animation";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import porjectImgOne from "../images/c_p_manage.jpg";
import porjectImgTwo from "../images/s_dashboard.jpg";
import porjectImgThree from "../images/v_mouse.jfif.jpg";
import PortfolioImg from "../images/portfolio_img.png";
import manImg from "../images/ManImage.jpg";

const MotionBox = motion(Box);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    icon: <CodeIcon />,
    title: "Frontend Development",
    description:
      "I build fast, responsive and scalable web applications using React.js, JavaScript, HTML, CSS and modern frontend tools.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Material UI"],
  },
  {
    number: "02",
    icon: <DesignServicesIcon />,
    title: "UI / Web Design",
    description:
      "I create clean and modern user interfaces focused on usability, responsiveness and a smooth user experience.",
    tags: ["Responsive UI", "Figma", "Material UI", "Tailwind"],
  },
  {
    number: "03",
    icon: <AnimationIcon />,
    title: "Interactive Experiences",
    description:
      "I use modern animations and micro-interactions to make websites feel alive without sacrificing performance.",
    tags: ["Framer Motion", "CSS Animation", "UX", "Performance"],
  },
];

const projects = [
  {
    number: "01",
    title: "Customer Product Manager",
    image: porjectImgOne,
    category: "Full Stack Application",
    description:
      "A web-based application that helps businesses manage products and customer feedback in one centralized platform.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://user-product-manager.vercel.app/",
  },
  {
    number: "02",
    title: "Student Dashboard",
    image: porjectImgTwo,
    category: "Dashboard Application",
    description:
      "A centralized student platform for managing academic progress, tasks and learning resources.",
    tech: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    number: "03",
    title: "Virtual Mouse",
    image: porjectImgThree,
    category: "Machine Learning Project",
    description:
      "A touch-free computer interaction system that controls the cursor using hand gestures and computer vision.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "#",
  },
  {
    number: "04",
    title: "Personal Portfolio",
    image: PortfolioImg,
    category: "Frontend Development",
    description:
      "A responsive personal portfolio designed to showcase projects, technical skills and professional experience.",
    tech: ["React", "Material UI", "Framer Motion"],
    link: "#",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Material UI",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Vercel",
];

const sectionAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
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

  const theme = useMemo(
    () => ({
      background: "#0a0a0a",
      surface: "#111111",
      surfaceLight: "#161616",
      text: "#f5f5f5",
      muted: "#9b9b9b",
      accent: "#b7ff3c",
      border: "rgba(255,255,255,0.12)",
    }),
    [],
  );

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    /*
      CUSTOMIZATION OPTIONS:

      1. EmailJS
      2. Formspree
      3. Your Node.js backend
      4. Firebase
      5. Web3Forms

      Replace this function with your preferred API.
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
          background: theme.background,
          color: theme.text,
          minHeight: "100vh",
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ========================= */}
        {/* NAVIGATION */}
        {/* ========================= */}

        <Box
          component="header"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
            backdropFilter: "blur(18px)",
            background: "rgba(10,10,10,0.72)",
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <Box
            sx={{
              maxWidth: 1500,
              mx: "auto",
              px: { xs: 2, md: 5 },
              height: 76,
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
                fontWeight: 900,
                fontSize: { xs: 22, md: 28 },
                letterSpacing: "-1px",
              }}
            >
              MAYUR<span style={{ color: theme.accent }}>.</span>
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
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
                    transition: "0.3s",
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
                  color: "#0a0a0a",
                  background: theme.accent,
                  borderRadius: 0,
                  px: 2.5,
                  fontWeight: 800,
                  "&:hover": {
                    background: "#ffffff",
                  },
                }}
              >
                Let's Talk
              </Button>
            </Box>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: theme.text,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* ========================= */}
        {/* MOBILE MENU */}
        {/* ========================= */}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: 420,
              background: "#0a0a0a",
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
              <Typography fontWeight={900} fontSize={26}>
                MAYUR<span style={{ color: theme.accent }}>.</span>
              </Typography>

              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ color: theme.text }}
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
                  fontSize: 38,
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                <span
                  style={{
                    color: theme.accent,
                    fontSize: 15,
                    marginRight: 15,
                  }}
                >
                  0{index + 1}
                </span>
                {item.label}
              </Typography>
            ))}
          </Box>
        </Drawer>

        {/* ========================= */}
        {/* HERO */}
        {/* ========================= */}

        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            pt: { xs: 16, md: 14 },
            px: { xs: 2, md: 5 },
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background Grid */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.12,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "linear-gradient(to bottom, black 10%, transparent 90%)",
            }}
          />

          {/* Animated Accent Circle */}
          <MotionBox
            animate={{
              x: [0, 70, 0],
              y: [0, -50, 0],
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
              opacity: 0.12,
              right: "-200px",
              top: "20%",
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                sx={{
                  color: theme.accent,
                  fontSize: 14,
                  letterSpacing: 2,
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                FRONTEND DEVELOPER / WEB DESIGNER
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "4rem",
                    sm: "6rem",
                    md: "9rem",
                    lg: "11rem",
                  },
                  fontWeight: 900,
                  lineHeight: 0.82,
                  letterSpacing: "-0.07em",
                  maxWidth: 1250,
                  mb: 5,
                }}
              >
                BUILDING
                <br />
                DIGITAL
                <br />
                <span style={{ color: theme.accent }}>
                  EXPERIENCES.
                </span>
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 4,
                  alignItems: "end",
                  maxWidth: 1050,
                }}
              >
                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: { xs: 17, md: 21 },
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  I'm Mayur Kumbhar, a passionate Frontend Developer and Web
                  Designer creating responsive, modern and high-performance web
                  experiences using React.js and modern technologies.
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
                    See My Work
                  </Button>

                  <Button
                    href="#contact"
                    variant="outlined"
                    sx={{
                      color: theme.text,
                      borderColor: theme.border,
                      borderRadius: 0,
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        borderColor: theme.accent,
                        color: theme.accent,
                      },
                    }}
                  >
                    Start a Project
                  </Button>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </Box>

        {/* ========================= */}
        {/* ABOUT */}
        {/* ========================= */}

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
            variants={sectionAnimation}
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 700,
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
                  md: "1.2fr 0.8fr",
                },
                gap: { xs: 6, md: 12 },
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2.8rem",
                      md: "5rem",
                    },
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    mb: 4,
                  }}
                >
                  I turn ideas into
                  <br />
                  <span style={{ color: theme.accent }}>
                    modern digital products.
                  </span>
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: 18,
                    lineHeight: 1.8,
                    maxWidth: 700,
                  }}
                >
                  I am a Computer Science & Engineering graduate and currently
                  working as an Executive Web Designer. I have hands-on
                  experience in building responsive interfaces, modern web
                  applications and user-friendly digital experiences.
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: 18,
                    lineHeight: 1.8,
                    mt: 2,
                    maxWidth: 700,
                  }}
                >
                  My primary focus is frontend development with React.js, but I
                  also work with backend technologies such as Node.js, Express,
                  Java Spring Boot and databases including MySQL and MongoDB.
                </Typography>
              </Box>

              <MotionBox
                whileHover={{
                  scale: 1.02,
                }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${theme.border}`,
                  aspectRatio: "4/5",
                  maxWidth: 500,
                  justifySelf: {
                    xs: "center",
                    md: "end",
                  },
                }}
              >
                <Box
                  component="img"
                  src={manImg}
                  alt="Mayur Kumbhar"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(20%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    p: 2,
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,.9))",
                    pt: 8,
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.accent,
                      fontWeight: 700,
                    }}
                  >
                    MAYUR KUMBHAR
                  </Typography>
                </Box>
              </MotionBox>
            </Box>
          </MotionBox>
        </Box>

        {/* ========================= */}
        {/* SERVICES */}
        {/* ========================= */}

        <Box
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 16 },
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <Box sx={{ maxWidth: 1500, mx: "auto" }}>
            <Typography
              sx={{
                color: theme.accent,
                fontSize: 14,
                fontWeight: 700,
                mb: 2,
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
                letterSpacing: "-0.06em",
                lineHeight: 0.95,
                mb: 8,
              }}
            >
              WHAT I
              <br />
              <span style={{ color: theme.accent }}>
                BRING.
              </span>
            </Typography>

            {services.map((service) => (
              <MotionBox
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 12,
                }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "120px 1fr 1.5fr",
                  },
                  gap: 4,
                  py: 5,
                  borderTop: `1px solid ${theme.border}`,
                  cursor: "default",
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
                        xs: 28,
                        md: 38,
                      },
                      fontWeight: 800,
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

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
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

        {/* ========================= */}
        {/* SKILLS */}
        {/* ========================= */}

        <Box
          id="skills"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 16 },
            background: "#0d0d0d",
          }}
        >
          <Box sx={{ maxWidth: 1500, mx: "auto" }}>
            <Typography
              sx={{
                color: theme.accent,
                fontWeight: 700,
                mb: 3,
              }}
            >
              [ TECH STACK ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "6rem",
                },
                fontWeight: 900,
                letterSpacing: "-0.06em",
                mb: 7,
              }}
            >
              TOOLS I USE
              <span style={{ color: theme.accent }}>.</span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              {skills.map((skill, index) => (
                <MotionBox
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                    backgroundColor: theme.accent,
                    color: "#000",
                  }}
                  sx={{
                    px: { xs: 2, md: 3 },
                    py: 1.5,
                    border: `1px solid ${theme.border}`,
                    fontWeight: 700,
                    cursor: "default",
                  }}
                >
                  {skill}
                </MotionBox>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ========================= */}
        {/* PROJECTS */}
        {/* ========================= */}

        <Box
          id="work"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
          }}
        >
          <Box sx={{ maxWidth: 1500, mx: "auto" }}>
            <Typography
              sx={{
                color: theme.accent,
                fontWeight: 700,
                mb: 2,
              }}
            >
              [ SELECTED WORK ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "6rem",
                },
                fontWeight: 900,
                letterSpacing: "-0.06em",
                lineHeight: 0.95,
                mb: 10,
              }}
            >
              BUILT TO
              <br />
              <span style={{ color: theme.accent }}>
                PERFORM.
              </span>
            </Typography>

            {projects.map((project, index) => (
              <MotionBox
                key={project.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.8fr 1.2fr",
                  },
                  gap: { xs: 3, md: 7 },
                  py: { xs: 5, md: 8 },
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
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      ({project.number}) — {project.category}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 35,
                          md: 65,
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
                            fontSize: 13,
                            color: theme.muted,
                            border: `1px solid ${theme.border}`,
                            px: 1.5,
                            py: 0.7,
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
                      project.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      mt: 5,
                      alignSelf: "flex-start",
                      color: theme.text,
                      borderBottom: `1px solid ${theme.accent}`,
                      borderRadius: 0,
                      px: 0,
                      pb: 1,
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

        {/* ========================= */}
        {/* EXPERIENCE */}
        {/* ========================= */}

        <Box
          id="experience"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 16 },
            background: "#0d0d0d",
          }}
        >
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnimation}
            sx={{
              maxWidth: 1500,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                color: theme.accent,
                fontWeight: 700,
                mb: 3,
              }}
            >
              [ EXPERIENCE ]
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "0.8fr 1.2fr",
                },
                gap: 5,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "3rem",
                    md: "5.5rem",
                  },
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.06em",
                }}
              >
                MAKING IDEAS
                <br />
                <span style={{ color: theme.accent }}>
                  REAL.
                </span>
              </Typography>

              <Box
                sx={{
                  borderTop: `1px solid ${theme.border}`,
                  pt: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 25,
                        md: 35,
                      },
                      fontWeight: 800,
                    }}
                  >
                    Executive Web Designer
                  </Typography>

                  <Typography
                    sx={{
                      color: theme.accent,
                      fontWeight: 700,
                    }}
                  >
                    2+ YEARS
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: 18,
                    lineHeight: 1.8,
                  }}
                >
                  At LPC Advisors Pvt. Ltd., I work on web design and frontend
                  development, building responsive interfaces and improving
                  digital experiences. My work includes HTML, CSS, JavaScript,
                  React.js and modern UI development practices.
                </Typography>
              </Box>
            </Box>
          </MotionBox>
        </Box>

        {/* ========================= */}
        {/* CUSTOM CONTACT SECTION */}
        {/* ========================= */}

        <Box
          id="contact"
          sx={{
            px: { xs: 2, md: 5 },
            py: { xs: 10, md: 18 },
            position: "relative",
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
                fontWeight: 700,
                mb: 3,
              }}
            >
              [ LET'S TALK ]
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3.5rem",
                  md: "8rem",
                },
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: "-0.07em",
                mb: 8,
              }}
            >
              READY TO
              <br />
              BUILD YOUR
              <br />
              <span style={{ color: theme.accent }}>
                NEXT IDEA?
              </span>
            </Typography>

            {/* EXACT 50 / 50 CONTACT LAYOUT */}
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
              {/* LEFT SIDE */}
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                sx={{
                  p: {
                    xs: 3,
                    md: 6,
                  },
                  borderRight: {
                    md: `1px solid ${theme.border}`,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 30,
                      md: 45,
                    },
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Start a conversation.
                </Typography>

                <Typography
                  sx={{
                    color: theme.muted,
                    fontSize: 17,
                    lineHeight: 1.7,
                    mb: 5,
                  }}
                >
                  Have a project, job opportunity or collaboration in mind?
                  Send me a message and I will get back to you.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <EmailIcon sx={{ color: theme.accent }} />

                    <Box>
                      <Typography
                        sx={{
                          color: theme.muted,
                          fontSize: 12,
                          letterSpacing: 1,
                        }}
                      >
                        EMAIL
                      </Typography>

                      <Typography>
                        mayur.kumbhar@example.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ color: theme.accent }} />

                    <Box>
                      <Typography
                        sx={{
                          color: theme.muted,
                          fontSize: 12,
                          letterSpacing: 1,
                        }}
                      >
                        LOCATION
                      </Typography>

                      <Typography>
                        Bhuinj, Satara, Maharashtra, India
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/mayur-kumbhar-b27523201"
                      target="_blank"
                      sx={{
                        color: theme.text,
                        border: `1px solid ${theme.border}`,
                        borderRadius: 0,
                        "&:hover": {
                          color: "#000",
                          background: theme.accent,
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>

                    <IconButton
                      component="a"
                      href="https://github.com/Mayur-kumbhar09"
                      target="_blank"
                      sx={{
                        color: theme.text,
                        border: `1px solid ${theme.border}`,
                        borderRadius: 0,
                        "&:hover": {
                          color: "#000",
                          background: theme.accent,
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Box>
              </MotionBox>

              {/* RIGHT SIDE FORM */}
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                sx={{
                  p: {
                    xs: 3,
                    md: 6,
                  },
                  background: "#0d0d0d",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 30,
                      md: 45,
                    },
                    fontWeight: 800,
                    mb: 4,
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                    label="Your Name"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    label="Email Address"
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
                    value={formData.subject}
                    onChange={handleChange}
                    label="What's this about?"
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    label="Tell me about your project..."
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
                      mt: 1,
                      alignSelf: "flex-start",
                      background: theme.accent,
                      color: "#000",
                      borderRadius: 0,
                      px: 4,
                      py: 1.5,
                      fontWeight: 800,
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

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

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
              © {new Date().getFullYear()} Mayur Kumbhar. Built with React.
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
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
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}