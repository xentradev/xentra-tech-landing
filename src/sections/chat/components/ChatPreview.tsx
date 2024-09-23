"use client";
import { Ai } from "@/entities/Ai";
import { Message } from "@/entities/Message";
import Chat from "@/sections/chat/components/Chat";
import { createCustomTheme } from "@/utils/createCustomTheme";
import { Button, Grid, ThemeProvider } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  botInfo: Ai;
}

const fakeMessages: Message[] = [
  {
    id: 0,
    createdAt: new Date(),
    from: "assistant",
    threadId: "fake",
    text: "Hey, how are you?",
  },
  {
    id: 0,
    createdAt: new Date(),
    from: "user",
    threadId: "fake",
    text: "I'm good. And you?",
  },
];

export default function ChatPreview({ botInfo }: Props) {
  const router = useRouter();
  const { backgroundColor, primaryMainColor, textColor } = botInfo;
  const customTheme = createCustomTheme({
    backgroundColor,
    primaryMainColor,
    textColor,
  });

  return (
    <>
      <Grid container justifyContent={"end"} sx={{ mb: 5 }}>
        <Button
          variant="contained"
          onClick={() =>
            router.push(
              `${process.env.FRONT_URL}/chat/${botInfo.name}/${botInfo.id}`
            )
          }
        >
          Ir al chat
        </Button>
      </Grid>
      <ThemeProvider theme={customTheme}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} height={"50vh"}>
            <Chat
              botInfo={botInfo}
              messages={fakeMessages}
              handleSendMessage={() => {}}
              onBackClick={() => {}}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
