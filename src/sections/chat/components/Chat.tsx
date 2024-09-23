"use client";
import { Button, Divider, Grid, Typography } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import useChatContext from "@/app/hooks/useChatContext";
import { Ai } from "@/entities/Ai";
import { Message } from "@/entities/Message";

interface Props {
  botInfo: Ai;
  messages: Message[];
  handleSendMessage: (text: string) => void;
  showTypingAnimation?: boolean;
  onBackClick: () => void;
}

export default function Chat({
  botInfo,
  messages,
  handleSendMessage,
  showTypingAnimation = false,
  onBackClick
}: Props) {
  const { description, name, avatar } = botInfo;
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      gap={2}
      sx={{
        height: "100%",
        overflowY: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <Grid item style={{ display: "flex", flexDirection: "column" }}>
        <ChatHeader name={name} avatar={avatar} onBackClick={onBackClick} />
      </Grid>
      <Grid item xs style={{ overflowY: "auto", height: "100%", paddingLeft: 20, paddingRight: 20 }}>
        <ChatMessages
          messages={messages}
          showTypingAnimation={showTypingAnimation}
          welcomeMessage={description}
        />
      </Grid>
      <Grid item style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        <ChatInput handleSendMessage={handleSendMessage} />
      </Grid>
    </Grid>
  );
}
