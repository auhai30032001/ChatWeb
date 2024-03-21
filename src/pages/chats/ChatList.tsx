import { Divider, IconButton, InputBase, List, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import colorConfigs from "../../configs/colorConfigs";
import Scrollbar from "../../components/Scrollbar";
import ChatItem from "./ChatItem";
import { ChatData } from "../../models/chat";
interface ChatDataProps {
  data: ChatData[];
  setChat?: (value: ChatData) => void;
  setOpen?: (value: boolean) => void;
}

function ChatListPage({ data, setChat, setOpen }: ChatDataProps) {
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          p: "0.125rem",
          mb: "0.5rem",
          mr: "1.25rem",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <IconButton size="small" sx={{ p: "0.625rem" }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      </Paper>
      <Divider sx={{ mr: "1.25rem" }} />
      <List>
        <Scrollbar sx={{ maxHeight: "34.4rem", mr: "0.625rem" }}>
          <ChatItem data={data} setChat={setChat} setOpen={setOpen} />
        </Scrollbar>
      </List>
    </>
  );
}

export default ChatListPage;
