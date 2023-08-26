import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  //getting the api key from .env file
  const ApiKey = import.meta.env.VITE_APP_X_RAPID_API_KEY;
  

  //Function to get message text from the user and the Ai Chatbot
  const handleSendMsg = async (msg) => {
    const msgs = [...messages];
    /*We use the 'fromSelf' key value pair to display dent and received messages on the opposite sides */
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);

    getMessage(msg);
  };
  //The axios api call to get a return for our typed message
  async function getMessage(msg) {
    const options = {
      method: "POST",
      url: "https://simple-chatgpt-api.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": ApiKey,

        "X-RapidAPI-Host": "simple-chatgpt-api.p.rapidapi.com",
      },
      data: {
        question: msg,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      setArrivalMessage({ fromSelf: false, message: response.data.answer });
    } catch (error) {
      console.error(error);
    }
  }
  /*On getting the response from the api call, we enter the response message inside the messages array to map it onto the screen*/
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbox-container">
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default ChatBox;
