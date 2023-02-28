import React from "react";
import "./ChatListItem.css";
import { dataChat } from "./dataChat";

function ChatListItem() {
  return (
    <div className="chat_list">
      {dataChat.map((item, index) => (
        <div key={index} className="chat_list-item">
          <div className="left">
            <img src={item.img} alt="" />
            <div className="chat_content">
              <div className="name">{item.name}</div>
              <div className="content">{item.content}</div>
            </div>
          </div>
          <div className="right">
            <div className="date">{item.date}</div>
            <div className="count">{item.acount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatListItem;
