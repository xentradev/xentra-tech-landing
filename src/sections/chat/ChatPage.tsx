"use client";
import useChatContext from "@/app/hooks/useChatContext";
import Chat from "@/sections/chat/components/Chat";
import { createCustomTheme } from "@/utils/createCustomTheme";
import { Grid, ThemeProvider } from "@mui/material";

export enum ChatMobileScreen {
  CHAT_LIST,
  CHAT,
  CHAT_PROFILE,
}

export default function ChatPage() {
  const { botInfo, fullConversation, sendMessagesToAssistant, isAssistantTyping } =
    useChatContext();
  const { backgroundColor, primaryMainColor, textColor } = botInfo;
  const customTheme = createCustomTheme({
    backgroundColor,
    primaryMainColor,
    textColor,
  });

  const handleSendMessage = (text: string) => {
    sendMessagesToAssistant(text);
  };

  const closeChat = () => {
    // Enviar el mensaje al contenedor principal para cerrar el iframe
    window.parent.postMessage('closeChat', '*');
  };
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={3} height={"100vh"}>
          <Chat
            botInfo={botInfo}
            messages={fullConversation}
            handleSendMessage={handleSendMessage}
            showTypingAnimation={isAssistantTyping}
            onBackClick={closeChat}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
