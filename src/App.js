import React, { useState } from "react";
import Portfolio from "./compo/home/Portfolio";
import { Box, CssBaseline, Button } from "@mui/material";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
const App = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For a smooth scrolling animation
    });
  };
  console.log(showOverlay);
  return (
    <>
      <CssBaseline />
      {/* {showOverlay ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">🚧 Under Construction</Typography>
          <Typography variant="body1">
            You can preview limited parts of the site.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ position: "relative" }}>
          <Portfolio sx={{ zIndex: 1, position: "absolute" }} />
          <Button
            onClick={scrollToTop}
            sx={{
              left: "90%",
              top: "96.8%",
              position: "absolute",
              width: "",
              background: "#f2f2f2",
              color: "#071029",
              fontSize: "3.875rem",
            }}
          >
            <VerticalAlignTopIcon />
          </Button>
        </Box>
      )} */}
      <Box sx={{ position: "relative" }}>
        <Portfolio sx={{ zIndex: 1, position: "absolute" }} />
        <IconButton
          onClick={scrollToTop}
          aria-label="Scroll to top"
          sx={{
            position: "fixed",
            bottom: { xs: 16, sm: 24, md: 32 },
            right: { xs: 16, sm: 24, md: 32 },
            zIndex: 1200,
            width: { xs: 44, sm: 50, md: 56 },
            height: { xs: 44, sm: 50, md: 56 },
            background: "#f2f2f2",
            color: "#071029",
            borderRadius: "50%",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              background: "#ffffff",
              transform: "translateY(-3px)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
            },
          }}
        >
          <VerticalAlignTopIcon
            sx={{
              fontSize: { xs: 22, sm: 26, md: 30 },
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default App;
