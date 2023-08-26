import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

export default function ChatInput({ handleSendMsg }) {
  /*'handleSendMsg' function makes the api call and stores the sent chat message inside an array*/
  const [msg, setMsg] = useState("");

  //Function to enter the sent text into the 'msg' string
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="chatinput-container">
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
