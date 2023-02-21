import React from "react";
import { useContext, useState, useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { getAnswer } from "../services/ChatbotService";
import { GiftedChat } from "react-native-gifted-chat";
import { UserContext } from "../context/UserContext";
const ChatbotScreen = () => {
  const [user] = useContext(UserContext) as any;
  const [messages, setMessages] = useState([]) as any;
  const [isTyping, setIsTyping] = useState(false) as any;
  const id = useRef(1);

  const Chatbot = {
    _id: id.current,
    text: "",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Fitness ChatBot",
      avatar: "https://cdn-icons-png.flaticon.com/512/1058/1058435.png",
    },
  };

  const handleInput = (text: any) => {
    setTimeout(async () => {
      setIsTyping(false);
      // TODO: make chatbot response appear in messages
      const chatBotRes = await getAnswer(text);
      Chatbot._id = ++id.current;
      Chatbot.text = chatBotRes.data;
      onSend(Chatbot as any);
    }, 3000);

    setIsTyping(true);
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hello ${user.name || user.email}. How can I help you?`,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Fitness ChatBot",
          avatar: "https://cdn-icons-png.flaticon.com/512/1058/1058435.png",
        },
      },
    ]);
  }, []);

  // const prompt = useRef(null);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: 55 }}>
      <GiftedChat
        isTyping={isTyping}
        messages={messages}
        onSend={async (messages: any) => {
          // call function
          onSend(messages);

          // intercept input text
          const [textMessage] = messages;

          const { text } = textMessage;

          await handleInput(text);
        }}
        user={{
          _id: 2,
        }}
      />
    </View>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({});
