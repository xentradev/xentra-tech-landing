"use client";
import { sendMessage } from "@/api/chat";
import { Message } from "@/entities/Message";
import { createContext, useEffect, useState } from "react";
import { cleanMessage } from "@/utils/cleanMessage";
import { CookieManager } from "@/utils/cookies";
import { Ai } from "@/entities/Ai";

const CHAT_MESSAGE_DELAY = 0;

export interface ChatContext {
  fullConversation: Message[];
  sendMessagesToAssistant: (message: string, path?: string) => void;
  isAssistantTyping: boolean;
  botInfo: Ai
}

export const ChatContext = createContext<ChatContext | null>(null);

interface Props {
  ssrThread: string;
  ssrBotAI: Ai;
  children: React.ReactNode;
}

const ChatContextProvider = ({ children, ssrThread, ssrBotAI }: Props) => {
  const [fullConversation, setFullConversation] = useState<Message[]>([]);
  const [isAssistantTyping, setIsAssistantTyping] = useState<boolean>(false);
  const delay = (s: number) =>
    new Promise((resolve) => setTimeout(resolve, s * 1000));

  useEffect(() => {
    CookieManager.SetCookie("thread", ssrThread);
  }, [ssrThread]);

  const sendMessagesToAssistant = async (text: string, path?: string) => {
    try {
      const userMessage: Message = {
        id: -1,
        createdAt: new Date(),
        from: "user",
        threadId: ssrThread,
        text,
      };
      setFullConversation((oldMessages) => oldMessages.concat(userMessage));
      const newMessageResponse = await sendMessage({
        messages: [userMessage],
        botId: ssrBotAI.id
      });

      const message = cleanMessage(newMessageResponse.text);

      const messages = message.split("[br]");

      setTimeout(async () => {
        setIsAssistantTyping(true);

        for (let i = 0; i < messages.length; i++) {
          if (messages[i].length > 0) {
            await delay(messages[i].length * 0.1);
            const assistantMessage: Message = {
              id: -1,
              createdAt: new Date(),
              from: "assistant",
              threadId: ssrThread,
              text: messages[i],
            };
            setFullConversation((oldMessages) =>
              oldMessages.concat(assistantMessage)
            );
          }
        }
        setIsAssistantTyping(false);
      }, CHAT_MESSAGE_DELAY);
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        sendMessagesToAssistant,
        isAssistantTyping,
        fullConversation,
        botInfo: ssrBotAI
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
