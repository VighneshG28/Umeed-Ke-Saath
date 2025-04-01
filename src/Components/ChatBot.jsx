import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import './chatBot.css';
import { companyInfo } from "./companyInfo";
import { RxCross1 } from "react-icons/rx";
import { FaMessage } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const ChatBot = () => {
  const [chatHistory,setChatHistory] = useState([
      {
    hideInChat: true,
    role: "model",
    text: companyInfo,

    }
]);




  const [showChatbot,setShowChatbot] = useState(false);

  const chatBodyRef = useRef();

  const generateBotResponse= async (history) => {

      //helper function to update the chat history
    const updateHistory = (text,isError = false) =>{
      setChatHistory(prev => [...prev.filter(msg => msg.text!=="Thinking..."),{role: "model",text,isError}]);

    };
    // console.log(history);

    //Format the chat history for api request
    history=history.map(({role,text}) => ({role,parts:[{text}]}));


    const requestOptons={
      method: "POST",
      header: {"Content-Type": "application/json"},
      body: JSON.stringify({contents: history})
    };

    try{
      //Make the API call to get the users request
        const response=await fetch(import.meta.env.VITE_API_URL,requestOptons);
        const data=await response.json();
        if(!response.ok) throw new Error(data.error.message || "Something went wrong");


        //Clean and Update the chat history with the bot response
        const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
        updateHistory(apiResponseText);
        // console.log(data);
    }
    catch(error){
      // console.log(error);
      updateHistory(error.message,true);

    }
  };

  useEffect(() => {
    //Auto scroll whenever chat updates
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight,behavior: "smooth" });

  },[chatHistory]);



  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>

    <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
      <span className="material-symbols-outlined"><FaMessage /></span>
      <span className="material-symbols-outlined"><RxCross1 /></span>

    </button>

      <div className="chatbot-popup">
        {/*Chat bot header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-outlined">
          <IoMdArrowDropdown className="dropdown-arrow" />
          </button>
        </div>

        {/*Chat bot body*/}
        <div ref={chatBodyRef}className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👌 <br /> How can I help you today?
            </p>
          </div>

          {/*Render the chat history dynamically*/ }
          {chatHistory.map((chat,index) => (
            <ChatMessage key={index} chat={chat}/>
          ))}

          
        </div>

        {/*Chat bot footer*/}

        <div className="chat-footer">
        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
      </div>
      </div>
    </div>
  );
};

export default ChatBot;
