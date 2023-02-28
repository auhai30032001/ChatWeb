import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import "./GoldCoast.css";

interface Message {
  user: string;
  content: string;
  time: string;
}

function GoldCoats() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const listMessages = [
      // test data
      {
        user: "Hillan",
        content: "Hi Tim, How are you?",
        time: "9:00 am",
      },
      ...JSON.parse(localStorage.getItem("messages") || "[]"),
    ];
    setMessages(listMessages);
  }, []);

  const handleSendMessage = () => {
    const message: Message = {
      user: "Me",
      content: messageInput,
      time: Date.now().toString(),
    };
    setMessages((prev) => [...prev, message]);
    localStorage.setItem("messages", JSON.stringify([...messages, message]));
    setMessageInput("");
  };

  return (
    <>
      <div className="mess_header">
        <h4>Gold Coast</h4>
        <div className="user_chating">From: Hali</div>
        <div className="messages">
          {messages.map((message, index) => (
            <div className="message_wrapper">
              <div
                className={`message_content ${message.user === "Me" && "me"}`}
                key={index}
              >
                <p>{message.content}</p>
                {message.user !== "Me" && (
                  <span className="message_content_time">{message.time}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mess_footer">
          <div className="btn-messages">
            <button className="btn-message"> REQUEST VISIT</button>
            <button className="btn-message"> MAKE OFFER</button>
          </div>
          <div className="input_message">
            <div className="icon_face">
              <Icon icon="mdi:face-happy-outline" width={28} height={28} />
            </div>
            <input
              type="text"
              placeholder="Type message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />

            <div className="icon">
              <Icon
                icon="ph:link-simple"
                width={18}
                height={18}
                className="icon_link"
              />

              <button>
                <Icon
                  icon="material-symbols:send-outline-sharp"
                  width={35}
                  height={35}
                  className="icon_send"
                  onClick={handleSendMessage}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="status">
        <div className="status_info">Status: Sale</div>
        <label>
          <FontAwesomeIcon icon={faChevronDown} height={10} width={10} />
        </label>
        <label>
          <Icon icon="mdi:bell-outline" />
        </label>
      </div>
    </>
  );
}

export default GoldCoats;
