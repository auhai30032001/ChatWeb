import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { user } from "../assets/data/Data";
import Sidebar from "../components/Sidebar";
import sizeConfigs from "../configs/sizeConfigs";

function MainLayout() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      {isMatch ? (
        <>
          <Box
            component="nav"
            sx={{
              width: 0,
              flexShrink: 0,
            }}
          >
            {user.map((item, index) => (
              <Sidebar data={item} key={index} />
            ))}
          </Box>
          <Box
            component="main"
            sx={{
              p: 3,
              width: "100%",
            }}
          >
            <Outlet />
          </Box>
        </>
      ) : (
        <>
          <Box
            component="nav"
            sx={{
              width: sizeConfigs.sidebar.width,
              flexShrink: 0,
            }}
          >
            {user.map((item, index) => (
              <Sidebar data={item} key={index} />
            ))}
          </Box>
          <Box
            component="main"
            sx={{
              p: 3,
              width: `calc(100% - ${sizeConfigs.sidebar.width})`,
            }}
          >
            <Outlet />
          </Box>
        </>
      )}
    </Box>
  );
}

export default MainLayout;
