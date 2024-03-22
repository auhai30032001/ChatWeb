import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faPaperclip,
  faPaperPlane,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Scrollbar from "../../components/Scrollbar";
import colorConfigs from "../../configs/colorConfigs";
import { ChatData } from "../../models/chat";
interface ChatDataProps {
  data: ChatData | undefined;
  idUser?: number;
  content?: string;
  setOpen?: (value: boolean) => void;
}

const getDataFromLS = () => {
  const data = localStorage.getItem("chat");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Conversations({ data, setOpen }: ChatDataProps) {
  const [chats, setChats] = useState(getDataFromLS());
  const [content, setContent] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = () => {
    if (data !== undefined && content !== "") {
      let chat = {
        idUser: data.id,
        content,
      };
      setChats([...chats, chat]);
      setContent("");
    }
  };

  const handleClickOpen = () => {
    if (setOpen) setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chats));
    //localStorage.removeItem("chat");
  }, [chats]);

  return (
    <>
      {data !== undefined ? (
        <>
          <Box
            sx={{
              mb: "0.3rem",
              mx: "20px",
              backgroundColor: colorConfigs.mainBg,
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ fontSize: 18, display: "flex" }}
            >
              {isMatch ? (
                <>
                  <IconButton size="small" onClick={handleClickOpen}>
                    <FontAwesomeIcon icon={faAngleLeft} fontSize={16} />
                  </IconButton>
                  Goldcoast
                </>
              ) : (
                <>Goldcoast</>
              )}
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#9e9e9e">
              From: {data.name}
            </Typography>
          </Box>
          <Divider sx={{ mx: "20px" }} />
          <List sx={{ py: 0 }}>
            <Scrollbar sx={{ height: "28.5rem", mr: "0.625rem" }}>
              {data.detailChat.map((item, index) =>
                item.type === true ? (
                  <ListItem key={index}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs={12}>
                        <ListItemText
                          primary={item.content}
                          sx={{
                            bgcolor: colorConfigs.chatpage.bgMe,
                            color: colorConfigs.chatpage.colorMe,
                            px: 2,
                            py: 1,
                            borderRadius: 6,
                            ml: 12,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                ) : (
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: 0,
                      }}
                    >
                      <Avatar
                        src={data.avatar}
                        sx={{ width: 45, height: 45 }}
                      />
                      <ListItemText secondary={item.time} />
                    </ListItemIcon>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-end"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12}>
                        <ListItemText
                          primary={item.content}
                          sx={{
                            bgcolor: colorConfigs.chatpage.bgYou,
                            color: colorConfigs.chatpage.colorYou,
                            px: 2,
                            py: 1,
                            borderRadius: 6,
                            mr: 12,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                )
              )}
              {chats
                .filter((itemLS: ChatDataProps) => itemLS.idUser === data.id)
                .map((itemLS: ChatDataProps, index: number) => (
                  <ListItem key={index}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs={12}>
                        <ListItemText
                          primary={itemLS.content}
                          sx={{
                            bgcolor: colorConfigs.chatpage.bgMe,
                            color: colorConfigs.chatpage.colorMe,
                            px: 2,
                            py: 1,
                            borderRadius: 6,
                            ml: 12,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
            </Scrollbar>
          </List>

          <Grid container spacing={1} sx={{ mx: "10px" }}>
            <Grid item xs={12}>
              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  sx={{
                    color: colorConfigs.chatpage.colorYou,
                    border: " 1px solid #e0e0e0",
                    borderRadius: 6,
                    fontSize: 13,
                  }}
                >
                  Request Visit
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: colorConfigs.chatpage.colorYou,
                    border: " 1px solid #e0e0e0",
                    borderRadius: 6,
                    fontSize: 13,
                  }}
                >
                  Make Offer
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: "0.3rem",
                  mr: "1.25rem",
                }}
              >
                <IconButton size="medium">
                  <FontAwesomeIcon icon={faFaceSmile} />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Type a message..."
                  maxRows={2}
                  multiline
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <IconButton size="small">
                  <FontAwesomeIcon icon={faPaperclip} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleClick}
                  sx={{
                    bgcolor: colorConfigs.chatpage.bgMe,
                    color: "background.paper",
                    p: 1,
                    borderRadius: "50%",
                    "&:hover": {
                      bgcolor: colorConfigs.chatpage.bgMe,
                      opacity: 0.7,
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Conversations;
