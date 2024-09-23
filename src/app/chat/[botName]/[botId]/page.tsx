import { getPublicAiById } from "@/api/admin";
import { createThread } from "@/api/ssr/chat";
import ChatContextProvider from "@/app/context/ChatContext";
import defaultTheme from "@/app/defaultTheme";
import ChatPage from "@/sections/chat/ChatPage";
import { createCustomTheme } from "@/utils/createCustomTheme";
import { Box, ThemeProvider } from "@mui/material";
import { cookies } from "next/headers";

interface Props {
  params: {
    botId: "string";
    botName: "string";
  };
}

export default async function Chat({ params: { botId, botName } }: Props) {
  try {
    console.log("botId", botId);
    console.log("botName", botName);
    const ssrBotAI = await getPublicAiById(+botId);
    const cookieStore = cookies();
    let thread: string = cookieStore.get("thread")?.value || "";

    if (!thread) {
      console.log("CREATING NEW THREAD");
      thread = await createThread();
    }

    if (!ssrBotAI) {
      throw new Error("Bot NOT FOUND");
    }

    return (
      <ChatContextProvider
        ssrThread={thread}
        ssrBotAI={ssrBotAI}
        withMessageDelay={false}
      >
        <Box sx={{ backgroundColor: "background.default" }}>
          <ChatPage />
        </Box>
      </ChatContextProvider>
    );
  } catch (e: any) {
    console.error("ERROR", e);
    <h1>ERROR</h1>;
  }
}
