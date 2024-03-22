import { Box } from "@mui/material";
import ChatTop from "./ChatTop";
import ChatMain from "./ChatMain";
import { user } from "../../assets/data/Data";

function ChatPage() {
  const chatData = user.map((item) => item.chatData);
  //console.log(chatData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatTop />
      {chatData.map((item, index) => (
        <ChatMain data={item} key={index} />
      ))}
    </Box>
  );
}

export default ChatPage;
