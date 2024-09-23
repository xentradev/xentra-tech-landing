"use client";
import { ChatContext } from "@/app/context/ChatContext";
import { useContext } from "react";

const useChatContext = () => {
  return useContext(ChatContext) as ChatContext;
};

export default useChatContext;
