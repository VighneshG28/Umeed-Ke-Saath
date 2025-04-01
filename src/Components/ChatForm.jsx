import { useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import './chatBot.css';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    //Update the chat history with the user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      //Adding the thinking placeholder for the bot message
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      //call the fucntion to generate the bot message
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above , please addredd the query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message.."
        className="message-input"
        required
      />
      <button className="send-arrow-container"><RiSendPlaneFill /></button>
    </form>
  );
};

export default ChatForm;
