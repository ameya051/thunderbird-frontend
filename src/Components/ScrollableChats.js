import React, { useEffect, useRef } from "react";
import { Avatar, Tooltip } from "@chakra-ui/react";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChats = ({ messages }) => {
  const { user } = ChatState();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div>
      {messages &&
        messages?.map((m, i) => {
          return (
            <div style={{ display: "flex" }} key={m._id}>
              {(isSameSender(messages, user._id, m, i) ||
                isLastMessage(messages, user._id, i)) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}
              <span
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? "#428bca" : "#eeeeee"
                  }`,
                  marginLeft: isSameSenderMargin(messages, user._id, m, i),
                  marginTop: isSameUser(messages, m, i) ? 3 : 10,
                  borderRadius: "20px",
                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {m.content}
              </span>
            </div>
          );
        })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ScrollableChats;
