import { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChatData } from "../../models/chat";
import ChatList from "./ChatList";
import Conversations from "./Converstations";
interface ChatDataProps {
  data: ChatData[];
}

function ChatMain({ data }: ChatDataProps) {
  const [chat, setChat] = useState<ChatData>();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ mx: 5 }}>
      {isMatch ? (
        <Stack spacing={2}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Chat</Typography>
            </Grid>
          </Grid>
          {open !== true ? (
            <Grid container px={1}>
              <Grid item xs={12}>
                <ChatList data={data} setChat={setChat} setOpen={setOpen} />
              </Grid>
            </Grid>
          ) : (
            <Grid container px={1}>
              <Grid item xs={12}>
                <Conversations data={chat} setOpen={setOpen} />
              </Grid>
            </Grid>
          )}
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Chat</Typography>
            </Grid>
          </Grid>
          <Grid container px={1}>
            <Grid item xs={5}>
              <ChatList data={data} setChat={setChat} />
            </Grid>
            <Grid item xs={7}>
              <Conversations data={chat} />
            </Grid>
          </Grid>
        </Stack>
      )}
    </Box>
  );
}

export default ChatMain;
