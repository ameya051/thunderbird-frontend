import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
  function checkUserData() {
    const item = JSON.parse(localStorage.getItem("userInfo"));
    
    if (!item) {
      navigate("/");
    }
    if (item) {
      setUser(item)
    }
  }

  window.addEventListener('storage', checkUserItem)
  return () => {
    window.removeEventListener('storage', checkUserItem)
  }
}, [])

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
