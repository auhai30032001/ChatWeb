import React from "react";
import { Icon } from "@iconify/react";

import "./Chatform.css";
import ChatListItem from "./ChatListItem";

function Chatform() {
  return (
    <div className="chatbody">
      <h2>Chats</h2>
      <div className="chatbody_search">
        <button className="btn-search">
          <Icon
            icon="material-symbols:search-rounded"
            width={25}
            height={25}
            color="#a4a4a4"
          />
        </button>
        <input type="text" required name="search" placeholder="Search"></input>
      </div>
      <ChatListItem />
    </div>
  );
}

export default Chatform;
