import { Box } from "@mui/material";
import { useRef } from "react";
import ChatMessageItem from "./ChatMessageItem";
import { getDayForChat } from "@/utils/time";
import { Message } from "@/entities/Message";
import ChatLoadingDots from "./ChatLoadingDots";
import Text from "@/components/Generics/Text";

interface Props {
  messages: Message[];
  showTypingAnimation: boolean;
  welcomeMessage: string;
}

export default function ChatMessages({
  messages,
  showTypingAnimation,
  welcomeMessage,
}: Props) {
  const chatRef = useRef<HTMLDivElement>(null);
  let lastMessageDate: null | Date = null;

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          padding: 1,
        }}
        ref={chatRef}
      >
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
          <Text
            variant="text"
            color="light"
            sx={{
              width: "100%",
              textAlign: "center",
              maxWidth: { xs: "100%", sm: "70%" }
            }}
          >
            {welcomeMessage}
          </Text>
        </Box>

        {messages.map((message, index) => {
          const messageDate = new Date(message.createdAt);
          const formattedDate = getDayForChat(messageDate);
          const showDateSeparator =
            formattedDate &&
            (!lastMessageDate ||
              formattedDate !== getDayForChat(lastMessageDate));

          lastMessageDate = messageDate;

          const separatedMessages = message.text
            .replaceAll("\n", "")
            .trim()
            .split("[br]");

          return (
            <>
              {/*showDateSeparator && (
                <Text
                  variant="caption"
                  color="light"
                  sx={{ textAlign: "center", margin: "10px 0" }}
                >
                  {formattedDate}
                </Text>
              )*/}
              {separatedMessages &&
                separatedMessages.map((m, i) => (
                  <ChatMessageItem
                    message={{ ...message, text: m }}
                    key={`${index}-${i}`}
                  />
                ))}
            </>
          );
        })}
        {showTypingAnimation && <ChatLoadingDots />}
      </Box>
    </>
  );
}
