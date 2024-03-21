import { Box } from "@mui/material";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 15,
      }}
    >
      <img
        src={
          "https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png"
        }
        loading="lazy"
        width="40%"
      />
    </Box>
  );
}

export default NotFound;
