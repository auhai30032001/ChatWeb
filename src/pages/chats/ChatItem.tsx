import { useState } from "react";
import {
  Avatar,
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StyledOnlineBadge from "../../components/OnlineBagde";
import { ChatData } from "../../models/chat";

interface ChatDataProps {
  data: ChatData[];
  setChat?: (value: ChatData) => void;
  setOpen?: (value: boolean) => void;
}

function ChatItem({ data, setChat, setOpen }: ChatDataProps) {
  const [value, setValue] = useState(-1);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChat = (value: ChatData, index: number) => {
    if (setChat) {
      setChat(value);
    }
    setValue(index);
  };

  const handleChatTwo = (value: ChatData, index: number) => {
    if (setChat && setOpen) {
      setChat(value);
      setOpen(true);
    }
    setValue(index);
  };

  return (
    <>
      {data.map((item, index) => (
        <ListItem
          disablePadding
          key={index}
          sx={{
            mb: 1,
            pr: 1,
          }}
        >
          {isMatch ? (
            <ListItemButton
              onClick={() => handleChatTwo(item, index)}
              selected={value === index ? true : false}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                "& .MuiListItemIcon-root": {
                  minWidth: 0,
                },
              }}
            >
              <ListItemIcon>
                <StyledOnlineBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar src={item.avatar} sx={{ width: 45, height: 45 }} />
                </StyledOnlineBadge>
              </ListItemIcon>
              <ListItemText sx={{ ml: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#9e9e9e",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.detailChat.map((item, index, array) => {
                    if (array.length - 1 === index) {
                      return item.content;
                    }
                  })}
                </Typography>
              </ListItemText>
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="body2">{item.day}</Typography>
                <Badge
                  badgeContent={
                    item.detailChat.filter((item) => {
                      return item.newContent == true && item.type === false;
                    }).length
                  }
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "#ff1744",
                    },
                    mt: 1,
                    mr: 1,
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={() => handleChat(item, index)}
              selected={value === index ? true : false}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                "& .MuiListItemIcon-root": {
                  minWidth: 0,
                },
              }}
            >
              <ListItemIcon>
                <StyledOnlineBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar src={item.avatar} sx={{ width: 45, height: 45 }} />
                </StyledOnlineBadge>
              </ListItemIcon>
              <ListItemText sx={{ ml: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#9e9e9e",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.detailChat.map((item, index, array) => {
                    if (array.length - 1 === index) {
                      return item.content;
                    }
                  })}
                </Typography>
              </ListItemText>
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="body2">{item.day}</Typography>
                <Badge
                  badgeContent={
                    item.detailChat.filter((item) => {
                      return item.newContent == true && item.type === false;
                    }).length
                  }
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "#ff1744",
                    },
                    mt: 1,
                    mr: 1,
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          )}
        </ListItem>
      ))}
    </>
  );
}

export default ChatItem;
