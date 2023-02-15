import React from "react";
import { useContext, useState, useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { getAnswer } from "../services/ChatbotService";
import { GiftedChat } from "react-native-gifted-chat";
import { UserContext } from "../context/UserContext";
const ChatbotScreen = () => {
  const [user] = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  const handleInput = async (text) => {
    const chatBotRes = await getAnswer(text);

    // TODO: make chatbot response appear in messages
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
          avatar: "",
        },
      },
    ]);
  }, []);

  // const prompt = useRef(null);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: 55 }}>
      <GiftedChat
        messages={messages}
        onSend={async (messages) => {
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
