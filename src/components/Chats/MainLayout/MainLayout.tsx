import React from "react";
import ChatForm from "../../Chats/Chat/Chatform";
import GoldCoats from "../../Chats/GoldCoasts/GoldCoats";
import Sidebar from "../SideBar/Sidebar";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="Main">
      <div className="Main_web">
        <Sidebar />
        <ChatForm />
        <GoldCoats />
      </div>
    </div>
  );
}

export default MainLayout;
