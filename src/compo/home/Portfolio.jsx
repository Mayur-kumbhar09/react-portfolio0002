import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CssBaseline,
  Link,
  Divider,
  Modal,
  Fade,
  Paper,
  Backdrop,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import porjectImgOne from "../images/c_p_manage.jpg";
import porjectImgTwo from "../images/s_dashboard.jpg";
import porjectImgThree from "../images/v_mouse.jfif.jpg";
import backImg from "../images/head-back-thumb.jpg";
import manImg from "../images/ManImage.jpg";
import AnimatedBackground from "./AnimatedBackground";
import HTMLImg from "../images/HTML.png";
import CSSImg from "../images/CSS.jfif";
import JSImg from "../images/JS-LOGO.png";
import ReactImg from "../images/React.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PortfolioImg from "../images/portfolio_img.png";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BtnTxt = ["GITHUB", "LINKED-IN", "TWEETER"];
const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#about", active: true },
  { name: "Contact", href: "#contact", active: true },
];

const projects = [
  {
    id: 1,
    projectName: "Customer Product Manager",
    projectImage: porjectImgOne,
    projectDesc:
      "Customer Product Manager is a web-based tool that helps businesses manage product development based on customer feedback.",
    techStack: {
      frontend: "React",
      backend: "Node.js",
      database: "MongoDB",
    },
    viewPreview: (
      <Link
        href="https://user-product-manager.vercel.app/"
        sx={{ textDecoration: "none", color: "#f2f2f2" }}
        target="_blank"
        rel="noreferrer"
      >
        View
      </Link>
    ),
  },
  {
    id: 2,
    projectName: "Student Dashboard",
    projectImage: porjectImgTwo,
    projectDesc:
      "Student Dashboard is an intuitive platform for students to track their academic progress, manage tasks, and access learning resources in one centralized place.",
    techStack: {
      frontend: "React",
      backend: "Node.js",
      database: "MySQL",
    },
    viewPreview: (
      <Link
        href=""
        sx={{ textDecoration: "none", color: "#f2f2f2" }}
        target="_blank"
        rel="noreferrer"
      >
        View
      </Link>
    ),
  },
  {
    id: 3,
    projectName: "Virtual Mouse",
    projectImage: porjectImgThree,
    projectDesc:
      "Virtual Mouse enables users to control the cursor using hand gestures and a webcam, enhancing accessibility and providing a touch-free interface experience.",
    techStack: {
      frontend: "HTML/CSS/JS",
      backend: "Python (OpenCV)",
      database: "None",
    },
    viewPreview: (
      <Link
        href=""
        sx={{ textDecoration: "none", color: "#f2f2f2" }}
        target="_blank"
        rel="noreferrer"
      >
        View
      </Link>
    ),
  },
  {
    id: 4,
    projectName: "Personal Portfolio",
    projectImage: PortfolioImg,
    projectDesc:
      "Personal Portfolio is a responsive website showcasing a developer's skills, projects, and contact information, designed with modern UI and smooth user experience.",
    techStack: {
      frontend: "React",
      backend: "None",
      database: "None",
    },
    viewPreview: (
      <Link
        href="#"
        sx={{ textDecoration: "none", color: "#f2f2f2" }}
        target="_blank"
        rel="noreferrer"
      >
        View
      </Link>
    ),
  },
];

const logos = [
  { src: HTMLImg, left: "10%", size: 60, delay: 0, name: "HTML" },
  { src: CSSImg, left: "30%", size: 50, delay: 2, name: "CSS" },
  { src: JSImg, left: "50%", size: 70, delay: 4, name: "JavaScript" },
  { src: ReactImg, left: "70%", size: 60, delay: 6, name: "React.js" },
  { src: HTMLImg, left: "85%", size: 50, delay: 8, name: "HTML" },
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
      staggerChildren: 0.15,
    },
  },
};
export default function Portfolio() {
  // const [hover, setHover] = React.useState(false);
  const colors = useMemo(
    () => ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"],
    [],
  ); // Blue, Green, Orange, Purple, Pink
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [colors]);

  const handleOpen = (project) => {
    console.log("The project btn id is: ", project);
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AnimatedBackground />
      <Box
        sx={{
          minHeight: "50vh",
          height: "100%",
          // background: "linear-gradient(180deg,#071029 0%, #0f1724 100%)",
          backgroundImage: `url(${backImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#e6eef6",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'",
        }}
      >
        <CssBaseline />

        {/* Header */}
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none", px: 4, pt: 2 }}
        >
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg,#fff,#bde9d6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: 24,
              }}
            >
              MK.
            </Typography>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" }, // Show only on md and up
              }}
            >
              {navLinks.map(({ name, href, active }) => (
                <Link
                  key={name}
                  href={href}
                  underline="none"
                  sx={{
                    ml: 2,
                    px: active ? 1.5 : 0,
                    py: active ? 1 : 0,
                    borderRadius: 2,
                    color: active ? "#e6eef6" : "#e6eef6aa",
                    background: active
                      ? "rgba(255,255,255,0.04)"
                      : "transparent",
                    backdropFilter: active ? "blur(6px)" : "none",
                    "&:hover": {
                      background: "#e6eef6",
                      color: "#071029",
                    },
                  }}
                >
                  {name}
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile Nav */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { background: "#0b1c2c", color: "#fff", width: 250 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Menu
            </Typography>
            <List>
              {navLinks.map(({ name, href, active }) => (
                <ListItem
                  button
                  key={name}
                  component="a"
                  href={href}
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    key={name}
                    href={href}
                    underline="none"
                    sx={{
                      ml: 2,
                      px: active ? 1.5 : 0,
                      py: active ? 1 : 0,
                      borderRadius: 2,
                      color: active ? "#e6eef6" : "#e6eef6aa",
                      background: active ? "transparent" : "transparent",
                      backdropFilter: active ? "blur(6px)" : "none",
                      "&:hover": {
                        background: "#e6eef6",
                        color: "#071029",
                      },
                    }}
                  >
                    {name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Hero Section */}
        {/* HERO SECTION */}
        <Box
          sx={{
            minHeight: "85vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Video Background */}
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              opacity: 0.22,
            }}
          >
            <source src="/videos/developer-bg.mp4" type="video/mp4" />
          </Box>

          {/* Dark Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, rgba(5,12,25,.95), rgba(8,25,45,.75))",
              zIndex: 1,
            }}
          />

          {/* Animated Glow */}
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            sx={{
              position: "absolute",
              width: 450,
              height: 450,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(96,165,250,.35), transparent 70%)",
              right: "-100px",
              top: "20%",
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: 1300,
              mx: "auto",
              px: { xs: 3, md: 6 },
            }}
          >
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              sx={{
                maxWidth: 850,
              }}
            >
              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  color: "#6ee7b7",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                HELLO, I'M MAYUR KUMBHAR
              </Typography>

              <Typography
                component={motion.h1}
                variants={fadeUp}
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "5.5rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  mb: 3,
                  background: "linear-gradient(90deg,#ffffff,#6ee7b7,#60a5fa)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                I Build Modern
                <br />
                Digital Experiences.
              </Typography>

              <Typography
                component={motion.p}
                variants={fadeUp}
                sx={{
                  color: "#aab4c4",
                  fontSize: {
                    xs: 17,
                    md: 21,
                  },
                  lineHeight: 1.8,
                  maxWidth: 650,
                  mb: 4,
                }}
              >
                Frontend Developer & Web Designer focused on building
                high-performance, responsive and visually engaging web
                experiences.
              </Typography>

              <Box
                component={motion.div}
                variants={fadeUp}
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  href="#projects"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    background: "linear-gradient(90deg,#6ee7b7,#60a5fa)",
                    color: "#06111f",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 15px 35px rgba(96,165,250,.35)",
                    },
                  }}
                >
                  Explore Projects
                </Button>

                <Button
                  href="#contact"
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.3)",
                    "&:hover": {
                      borderColor: "#6ee7b7",
                      background: "rgba(110,231,183,.08)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Projects */}
        <Box sx={{ pb: 8, textAlign: "center", px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 650, fontSize: { xs: 32, sm: 40, md: 48 } }}
          >
            Projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {projects.map((data, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 16px)",
                    md: "1 1 calc(33.333% - 16px)",
                  },
                  maxWidth: { xs: "100%", sm: "calc(50% - 16px)", md: 425 },
                  minWidth: 0,
                }}
              >
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -12,
                  }}
                  sx={{
                    position: "relative",
                    maxWidth: 425,
                    margin: "0 auto",
                    borderRadius: "22px",
                    overflow: "hidden",
                    minHeight: 380,

                    background:
                      "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",

                    backdropFilter: "blur(20px)",

                    border: "1px solid rgba(255,255,255,.1)",

                    boxShadow: "0 15px 40px rgba(0,0,0,.35)",

                    transition: "all .4s ease",

                    "&:hover": {
                      boxShadow: "0 25px 60px rgba(96,165,250,.25)",
                    },
                  }}
                >
                  {/* Background Image */}
                  <Box
                    className="hover-bg"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${data.projectImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0,
                      transform: "scale(1)",
                      transition: "all 0.5s ease-in-out",
                      zIndex: 1,
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      zIndex: 2,
                    }}
                  />

                  {/* Foreground Content */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: 120,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                      }}
                    >
                      <Typography
                        className="project-title"
                        variant="h5"
                        sx={{
                          color: "#6ee7b7",
                          margin: "auto",
                          fontWeight: 700,
                          textAlign: "center",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {data.projectName}
                      </Typography>
                    </Box>

                    <CardContent
                      className="hover-content"
                      sx={{
                        flexGrow: 1,
                        opacity: 1,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#9aa4b2" }}>
                        {data.projectDesc}
                      </Typography>
                    </CardContent>

                    <CardActions
                      className="hover-content2"
                      sx={{
                        px: 2,
                        pb: 2,
                        opacity: 1,
                        transition: "opacity 0.4s ease",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        sx={{
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: 500,
                          "&:hover": {
                            background: "#111010ff",
                            color: "#ffffffff",
                          },
                        }}
                      >
                        {data.viewPreview}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleOpen(data)}
                        sx={{
                          borderRadius: "8px",
                          fontSize: "13px",
                          color: "#9aa4b2",
                          borderColor: "rgba(255,255,255,0.06)",
                          ml: 1,
                          "&:hover": {
                            background: "#e6eef6",
                            color: "#071029",
                          },
                        }}
                      >
                        Details
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Modal Section */}
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 200,
              },
            }}
          >
            <Fade in={open}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: 450,
                  width: "90%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 2,
                  py: 3,
                  background: "rgba(0, 0, 0, 1)",
                  boxShadow: "0 6px 20px rgba(2,6,23,0.6)",
                  border: "1px solid rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {selectedProject && (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#6ee7b7",
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      {selectedProject.projectName}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ mb: 2, color: "#d1d5db" }}
                    >
                      {selectedProject.projectDesc}
                    </Typography>

                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        borderRadius: 2,
                        color: "#d1d5db",
                      }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        <strong>Tech Stack:</strong>
                      </Typography>
                      <Typography variant="body2">
                        <strong>Frontend:</strong>{" "}
                        {selectedProject.techStack.frontend}
                        <br />
                        <strong>Backend:</strong>{" "}
                        {selectedProject.techStack.backend}
                        <br />
                        <strong>Database:</strong>{" "}
                        {selectedProject.techStack.database}
                      </Typography>
                    </Paper>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Box>
      {/* VIDEO SHOWCASE */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          maxWidth: 1300,
          mx: "auto",
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: "#6ee7b7",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            MY WORK IN MOTION
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mt: 1,
            }}
          >
            Design. Code. Experience.
          </Typography>
        </Box>

        <Box
          component={motion.div}
          whileHover={{
            scale: 1.02,
          }}
          sx={{
            position: "relative",
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.12)",
            boxShadow: "0 25px 80px rgba(0,0,0,.45)",
          }}
        >
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: "100%",
              display: "block",
              maxHeight: 600,
              objectFit: "cover",
            }}
          >
            <source src="/videos/portfolio-showcase.mp4" type="video/mp4" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(180deg, transparent, rgba(0,0,0,.6))",
            }}
          >
            <IconButton
              sx={{
                width: 80,
                height: 80,
                background: "rgba(255,255,255,.15)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.3)",
                "&:hover": {
                  background: "#6ee7b7",
                  color: "#06111f",
                  transform: "scale(1.1)",
                },
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* Experience */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ textAlign: "center", p: 4, width: "100%" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 650, color: "#e6eef6" }}
            >
              Experience
            </Typography>

            <Box
              sx={{
                p: 4,
                flexGrow: 1,
                textAlign: "start",
                borderRadius: "15px",
                backgroundColor: "#9191910d",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "stretch", md: "center" },
                  gap: 4,
                }}
              >
                {/* === Experience Section === */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ p: 2, color: "#9aa4b2" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#e9e9e9ff",
                            fontWeight: 600,
                          }}
                        >
                          Executive Web Designer at LPC Advisors Pvt. Ltd.
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "end" }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#e6eef6",
                            fontWeight: 700,
                            textAlign: "end",
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;1 yr 10 M
                        </Typography>
                      </Box>
                    </Box>

                    <br />

                    <Typography variant="h5">
                      Experience in web development and frontend technologies,
                      including HTML, CSS, <br /> JavaScript, and
                      React.js.During this time, I worked on building responsive
                      and <br /> user-friendly web interfaces that enhanced
                      overall user experience.
                    </Typography>
                  </Box>
                </Box>

                {/* Vertical Divider (only on md+ screens) */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignSelf: "stretch",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "gray" }}
                  />
                </Box>

                {/* === Certificates Section === */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ p: 2, color: "#9aa4b2", textAlign: "center" }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 650, mb: 1, color: "#e6eef6" }}
                    >
                      Certificates
                    </Typography>

                    <Box
                      component="dl"
                      sx={{ pl: 2, m: 0, textAlign: "start" }}
                    >
                      {/* Certificate 1 */}
                      <Typography
                        component="dt"
                        sx={{ fontWeight: 600, fontSize: "20px" }}
                      >
                        <svg width="12" height="12">
                          <circle
                            cx="6"
                            cy="6"
                            r="5"
                            fill="white"
                            stroke="black"
                            strokeWidth="1"
                          />
                        </svg>{" "}
                        JAVA Full Stack Development,{" "}
                        <span
                          style={{ fontSize: "18px", fontWeight: "normal" }}
                        >
                          codekul institute, <br /> &nbsp;&nbsp; Kothrud
                        </span>{" "}
                        <Link>
                          <OpenInNewIcon />
                        </Link>
                      </Typography>
                      <Typography
                        component="dd"
                        sx={{ ml: 2, fontSize: "16px" }}
                      >
                        Covered backend with Java, Spring Boot, and frontend
                        with React.
                      </Typography>

                      {/* Certificate 2 */}
                      <Typography
                        component="dt"
                        sx={{ fontWeight: 600, fontSize: "20px", mt: 2 }}
                      >
                        <svg width="12" height="12">
                          <circle
                            cx="6"
                            cy="6"
                            r="5"
                            fill="white"
                            stroke="black"
                            strokeWidth="1"
                          />
                        </svg>{" "}
                        React Development, Udemy{" "}
                        <Link>
                          <OpenInNewIcon />
                        </Link>
                      </Typography>
                      <Typography
                        component="dd"
                        sx={{ ml: 2, fontSize: "16px" }}
                      >
                        Focused on creating mobile-first layouts using HTML,
                        CSS, and Flexbox/Grid.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* About */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
        }}
        id="about"
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ textAlign: "center", p: 4, width: "100%" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 650, color: "#e6eef6" }}
            >
              About
            </Typography>

            <Box
              sx={{
                p: 4,
                flexGrow: 1,
                textAlign: "start",
                borderRadius: "15px",
                backgroundColor: "#9191910d", // optional background for visibility
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    flex: { xs: "1 1 100%", md: 1 },
                    minWidth: 0,
                    margin: "auto",
                  }}
                >
                  <Box sx={{ p: 2, color: "#9aa4b2", width: "auto" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: currentColor,
                        fontWeight: 700,
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      I'am Mayur Kumbhar
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 2 }}>
                      I’m a passionate Web Designer focused on creating
                      engaging, responsive websites
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                      that not only look great but perform flawlessly. With
                      hands-on experience in modern frontend tools
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 2 }}>
                      like React and a strong eye for design, I bring ideas to
                      life on the web.
                    </Typography>

                    {/* === Skills Section === */}
                    <Box sx={{ mt: 6, textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Skills
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 3,
                          justifyContent: "center",
                        }}
                      >
                        {logos.map((logo, index) => (
                          <Box key={index}>
                            <Box sx={{ textAlign: "center" }}>
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                  width: 80,
                                  height: 80,
                                  border: "1px solid #000000",
                                  borderRadius: "15px",
                                  objectFit: "contain",
                                }}
                              />
                              <Typography variant="body1" sx={{ mt: 1 }}>
                                {logo.name}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ flex: { xs: "1 1 100%", md: 1 }, minWidth: 0 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    sx={{
                      flex: { xs: "1 1 100%", md: 1 },
                      minWidth: 0,
                      position: "relative",
                    }}
                  >
                    {/* Glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        background: "linear-gradient(135deg,#6ee7b7,#60a5fa)",
                        filter: "blur(70px)",
                        opacity: 0.2,
                        top: "5%",
                        left: "5%",
                      }}
                    />

                    <Box
                      component={motion.div}
                      whileHover={{
                        scale: 1.03,
                        rotate: 1,
                      }}
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        borderRadius: 5,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,.15)",
                      }}
                    >
                      <Box
                        component="img"
                        src={manImg}
                        alt="Mayur Kumbhar"
                        sx={{
                          width: "100%",
                          maxWidth: 550,
                          display: "block",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* {"Contact Section"} */}
      {/* CONTACT SECTION */}
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: "#6ee7b7",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mt: 1,
            }}
          >
            Let's Build Something Amazing
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: 0,

            borderRadius: 5,
            overflow: "hidden",

            border: "1px solid rgba(255,255,255,.1)",

            background: "rgba(255,255,255,.03)",

            backdropFilter: "blur(20px)",
          }}
        >
          {/* LEFT SIDE - CONTACT FORM */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={{
              width: "100%",
              p: {
                xs: 3,
                md: 6,
              },

              borderRight: {
                md: "1px solid rgba(255,255,255,.08)",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Send Me a Message
            </Typography>

            <Typography
              sx={{
                color: "#9aa4b2",
                mb: 4,
              }}
            >
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </Typography>

            <ContactForm />
          </Box>

          {/* RIGHT SIDE - MAP + CONTACT INFO */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={{
              width: "100%",
              minHeight: 600,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* MAP */}
            <Box
              sx={{
                height: {
                  xs: 300,
                  md: 400,
                },
                width: "100%",
              }}
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0201333834435!2d-122.4218194846819!3d37.77492977975959"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: "block",
                }}
                loading="lazy"
                allowFullScreen
              />
            </Box>

            {/* CONTACT DETAILS */}
            <Box
              sx={{
                flex: 1,
                p: {
                  xs: 3,
                  md: 5,
                },
                background: "rgba(255,255,255,.025)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Contact Information
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 3,
                }}
              >
                <EmailIcon
                  sx={{
                    color: "#6ee7b7",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: "#9aa4b2",
                      fontSize: 14,
                    }}
                  >
                    EMAIL
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    your-email@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "#60a5fa",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: "#9aa4b2",
                      fontSize: 14,
                    }}
                  >
                    LOCATION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Pune, Maharashtra, India
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* {"Footer"} */} 
      <Box
        maxWidth="xs"
        sx={{
          mt: "auto",
          py: 3,
          px: 4,
          color: "#9aa4b2",
          fontSize: 15,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
            px: 2,
            py: 4,
          }}
        >
          {/* Left Side – Text */}
          <Box sx={{ flex: { md: "0 0 66.66%" }, alignContent: "flex-start" }}>
            {" "}
            {/* lg=8/12 */}
            <Typography variant="body2">
              © {new Date().getFullYear()} — Crafted with care @mayur_kumbhar.
            </Typography>
          </Box>

          {/* Right Side – Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              flex: { md: "0 0 33.33%" }, // lg=4/12
              alignContent: "flex-end",
            }}
          >
            {BtnTxt.map((element, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  color: "#9aa4b2",
                  borderColor: "rgba(255,255,255,0.06)",
                  fontWeight: 600,
                  "&:hover": {
                    background: "#e6eef6",
                    color: "#071029",
                  },
                }}
              >
                {element}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
