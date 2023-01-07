import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  var initState={
    _id: "",
    name: "",
    email:"",
    pic: "",
    token: "",
    
  }
  
  function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem("userInfo", JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}
function getLocalStorage(initialValue) {
  try {
    const value = window.localStorage.getItem("userInfo");
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}
  
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const navigate = useNavigate();
  
  
  
  useEffect(() => {
    getLocalStorage("userInfo", user);
  }, []);

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
