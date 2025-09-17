import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
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
import { keyframes } from "@emotion/react";
// import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
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
export default function Portfolio() {
  // const [hover, setHover] = React.useState(false);
  const colors = ["#2196f3", "#4caf50", "#ff9800", "#9c27b0", "#e91e63"]; // Blue, Green, Orange, Purple, Pink
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
  }, []);

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
  const scrollLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
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
        <Box
          sx={{
            py: 8,
            px: 4,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: 900 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              I am a Web designer.
            </Typography>
            <Typography variant="body1" sx={{ color: "#9aa4b2", mb: 3 }}>
              Clean, modern interfaces focused on clarity and delightful micro
              interactions.
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{
                  mr: 2,
                  borderRadius: "10px",
                  background: "linear-gradient(90deg,#6ee7b7,#60a5fa)",
                  color: "#052127",
                  fontWeight: 600,
                  boxShadow: "0 6px 18px rgba(99,102,241,0.12)",
                }}
              >
                See Projects
              </Button>
              <Button
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
                Contact Me
              </Button>
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

          <Grid container spacing={3} justifyContent="center">
            {projects.map((data, index) => (
              <Grid key={index}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: 425,
                    margin: "0 auto",
                    borderRadius: "14px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    boxShadow: "0 6px 20px rgba(2,6,23,0.6)",
                    border: "1px solid rgba(255,255,255,0.03)",
                    transition: "0.4s ease-in-out",
                    cursor: "pointer",
                    "&:hover .hover-bg": {
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                    "&:hover .hover-content": {
                      opacity: 0,
                    },
                    "&:hover .project-title": {
                      fontSize: "2rem",
                      textAlign: "center",
                    },
                    textAlign: "center",
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
              </Grid>
            ))}
          </Grid>

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
      <Box
        sx={{
          backgroundColor: "white",
          overflow: "hidden",
          width: "100%",
          py: 1, // vertical padding (theme spacing)
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: `${scrollLeft} 15s linear infinite`,
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            px: 2,
          }}
        >
          Welcome to my portfolio! Explore my latest projects and discover my
          creative journey.
        </Typography>
      </Box>
      {/* Experience */}
      <Grid container spacing={4} alignItems="start" justifyContent="center">
        <Grid>
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
              <Grid
                container
                spacing={4}
                alignItems="center"
                direction={{ xs: "column", md: "row" }}
              >
                {/* === Experience Section === */}
                <Grid>
                  <Box sx={{ p: 2, color: "#9aa4b2" }}>
                    <Grid container>
                      <Grid>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#e9e9e9ff",
                            fontWeight: 600,
                          }}
                        >
                          Executive Web Designer at LPC Advisors Pvt. Ltd.
                        </Typography>
                      </Grid>
                      <Grid sx={{ textAlign: "end" }}>
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
                      </Grid>
                    </Grid>

                    <br />

                    <Typography variant="h5">
                      Experience in web development and frontend technologies,
                      including HTML, CSS, <br /> JavaScript, and
                      React.js.During this time, I worked on building responsive
                      and <br /> user-friendly web interfaces that enhanced
                      overall user experience.
                    </Typography>
                  </Box>
                </Grid>

                {/* Vertical Divider (only on md+ screens) */}
                <Grid
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
                </Grid>

                {/* === Certificates Section === */}
                <Grid>
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
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* About */}
      <Grid
        container
        spacing={4}
        alignItems="start"
        justifyContent="center"
        id="about"
      >
        <Grid>
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
              <Grid container spacing={4} alignItems="start">
                <Grid sx={{ margin: "auto" }}>
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
                      <Grid container spacing={3} justifyContent="center">
                        {logos.map((logo, index) => (
                          <Grid key={index}>
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
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid>
                  <Box
                    component="img"
                    src={manImg}
                    alt="Mayur Kumbhar"
                    sx={{
                      width: "100%",
                      maxWidth: 550,
                      borderRadius: "10px",
                      objectFit: "cover",
                      transform: "scaleX(-1)",
                      mx: "auto",
                      display: "block",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* {"Contact Section"} */}
      <Grid
        container
        spacing={4}
        alignItems="start"
        justifyContent="center"
        id="contact"
      >
        <Grid>
          <Box sx={{ textAlign: "center", p: 4, width: "100%" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 650, color: "#e6eef6" }}
            >
              Contact Me
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
              <Grid container spacing={4} alignItems="start">
                <Grid>
                  <Box
                    sx={{
                      p: 2,
                      color: "#9aa4b2",
                      width: { xs: "auto", sm: 400, md: 600 },
                    }}
                  >
                    <ContactForm />
                  </Box>
                </Grid>
                <Grid>
                  <Paper
                    elevation={3}
                    sx={{
                      height: { xs: "auto", sm: 400, md: 420 },
                      width: { xs: "auto", sm: 550, md: 650, lg: 1000 },
                      border: 1,
                      borderRadius: "15px",
                      overflow: "hidden",
                      marginTop: "28px",
                    }}
                  >
                    <iframe
                      title="Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0201333834435!2d-122.4218194846819!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815382c1ab3d%3A0x4a06f3c0f7eb78cb!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1664820033376!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 1, mt: 2 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

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
