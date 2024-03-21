import { useState } from "react";
import {
  Avatar,
  Drawer,
  Stack,
  Typography,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sizeConfigs from "../configs/sizeConfigs";
import colorConfigs from "../configs/colorConfigs";
import routesConfig from "../routes/Routes";
import { User } from "../models/chat";
interface UserProps {
  data: User;
}

function Sidebar({ data }: UserProps) {
  const [value, setValue] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      {isMatch ? (
        <>
          <IconButton
            size="small"
            onClick={toggleDrawer(true)}
            sx={{
              bgcolor: colorConfigs.chatpage.bgMe,
              color: "background.paper",
              m: 2,
              width: 40,
              height: 40,
              borderRadius: "50%",
              "&:hover": {
                bgcolor: colorConfigs.chatpage.bgMe,
                opacity: 0.7,
              },
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Drawer
              variant="permanent"
              sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: sizeConfigs.sidebar.width,
                  boxSizing: "border-box",
                  borderRight: "0px",
                  backgroundColor: colorConfigs.sidebar.bg,
                  color: colorConfigs.sidebar.color,
                },
              }}
            >
              <Stack alignItems="center" spacing={2} sx={{ my: 5 }}>
                <Avatar
                  src={data.avatar}
                  sx={{
                    width: 60,
                    height: 60,
                    border: 2.5,
                    borderColor: "#fff",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: colorConfigs.sidebar.avatarName,
                    cursor: "pointer",
                  }}
                >
                  {data.name} <FontAwesomeIcon icon={faChevronDown} />
                </Typography>
              </Stack>
              <Tabs
                orientation="vertical"
                value={value}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  "& .MuiTabs-indicator": {
                    left: 0,
                    width: 3,
                    borderRadius: 3,
                  },
                  "& .MuiButtonBase-root": {
                    justifyContent: "flex-start",
                    pl: 5,
                    mb: 2,
                    minHeight: "50px",
                  },
                  "& .MuiTab-iconWrapper": {
                    mr: 3.2,
                  },
                }}
              >
                {routesConfig.map((route, index) => (
                  <Tab
                    key={index}
                    component={Link}
                    to={route.path ? route.path : "/"}
                    iconPosition="start"
                    icon={route.sidebarProps?.icon}
                    label={route.sidebarProps?.displayText}
                    value={route.path ? route.path : "/"}
                    sx={{
                      fontSize: 14,
                      "&:hover": {
                        bgcolor: colorConfigs.chatpage.scrollbar,
                        opacity: 0.7,
                      },
                    }}
                    onClick={() => setValue(route.path ? route.path : "/")}
                  />
                ))}
              </Tabs>
            </Drawer>
          </SwipeableDrawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: sizeConfigs.sidebar.width,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: sizeConfigs.sidebar.width,
              boxSizing: "border-box",
              borderRight: "0px",
              backgroundColor: colorConfigs.sidebar.bg,
              color: colorConfigs.sidebar.color,
            },
          }}
        >
          <Stack alignItems="center" spacing={2} sx={{ my: 5 }}>
            <Avatar
              src={data.avatar}
              sx={{ width: 60, height: 60, border: 2.5, borderColor: "#fff" }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: colorConfigs.sidebar.avatarName,
                cursor: "pointer",
              }}
            >
              {data.name} <FontAwesomeIcon icon={faChevronDown} />
            </Typography>
          </Stack>
          <Tabs
            orientation="vertical"
            value={value}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              "& .MuiTabs-indicator": {
                left: 0,
                width: 3,
                borderRadius: 3,
              },
              "& .MuiButtonBase-root": {
                justifyContent: "flex-start",
                pl: 5,
                mb: 2,
                minHeight: "50px",
              },
              "& .MuiTab-iconWrapper": {
                mr: 3.2,
              },
            }}
          >
            {routesConfig.map((route, index) => (
              <Tab
                key={index}
                component={Link}
                to={route.path ? route.path : "/"}
                iconPosition="start"
                icon={route.sidebarProps?.icon}
                label={route.sidebarProps?.displayText}
                value={route.path ? route.path : "/"}
                sx={{
                  fontSize: 14,
                  "&:hover": {
                    bgcolor: colorConfigs.chatpage.scrollbar,
                    opacity: 0.7,
                  },
                }}
                onClick={() => setValue(route.path ? route.path : "/")}
              />
            ))}
          </Tabs>
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;
