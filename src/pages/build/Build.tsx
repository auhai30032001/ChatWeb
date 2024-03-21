import { Box, Typography } from "@mui/material";
import React from "react";

function BuildPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
      }}
    >
      <img
        src={
          "https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png"
        }
        loading="lazy"
        width="50%"
      />
      <Typography variant="h3" color="#9e9e9e">
        PAGE UNDER CONSTRUCTION
      </Typography>
    </Box>
  );
}

export default BuildPage;
