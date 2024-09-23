import { Message } from "@/entities/Message";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getTimeForChat } from "@/utils/time";

interface Props {
  message: Message;
}

const borderRadius = 8;

export default function ChatMessageItem({ message }: Props) {
  const theme = useTheme();

  let messageText = message.text;

  const backgroundColor =
    message.from === "assistant"
      ? theme.palette.background.paper
      : theme.palette.primary.main;

  const letterColor =
    message.from === "assistant"
      ? theme.palette.text.primary
      : theme.palette.text.secondary;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent:
          message.from === "assistant" ? "flex-start" : "flex-end",
      }}
    >
      <Card
        sx={{
          maxWidth: "70%",
          backgroundColor,
          borderTopLeftRadius: message.from !== "assistant" ? borderRadius : 0,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          borderTopRightRadius: message.from == "assistant" ? borderRadius : 0,
          padding: 1.5,
        }}
      >
        {(messageText || message.failed) && (
          <CardContent
            sx={{
              padding: "0px 8px 0px 8px",
              "&:last-child": {
                paddingBottom: 1.2,
              },
              display: "flex",
              alignItems: "center",
              color: "red",
            }}
          >
            <Stack>
              {messageText && (
                <Typography
                  variant="caption"
                  sx={{ fontSize: 14, maxWidth: "80%", color: letterColor }}
                >
                  {messageText}
                </Typography>
              )}
              <Box sx={{width: "100%", display: 'flex', flexDirection: "row", justifyContent: "end"}}>
                {message.createdAt && (
                  <Typography
                    variant="caption"
                    sx={{ fontSize: 10, marginLeft: 1, color: letterColor }}
                  >
                    {getTimeForChat(new Date(message.createdAt))}
                  </Typography>
                )}

                {message.failed && (
                  <ErrorOutlineIcon
                    sx={{
                      color: theme.palette.error.light,
                      marginLeft: "8px",
                      fontSize: "18px",
                    }}
                  />
                )}
              </Box>
            </Stack>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
