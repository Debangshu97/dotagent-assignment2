import React, { useState } from "react";
import Welcome from "../components/Welcome";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  /*The basic idea is to show a welcome screen on opening the Chat page
  When the user clicks on the screen the chat section appears
  */

  /*the 'setWelcomeVisible' function toggles the visibility of the Welcome
  and ChatBox components*/
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  return (
    <div className="chat-outer-container">
      <div className="chat-inner-container">
        {welcomeVisible && <Welcome setWelcomeVisible={setWelcomeVisible} />}

        {welcomeVisible || <ChatBox />}
      </div>
    </div>
  );
};

export default Chat;
