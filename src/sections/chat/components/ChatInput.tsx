"use client";
import { InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@/components/Button";
import { useState } from "react";
import TextInput from "@/components/Generics/TextInput";

interface Props {
  handleSendMessage: (text: string) => void;
}

export default function ChatInput({ handleSendMessage }: Props) {
  const [text, setText] = useState<string>("");

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1 }}>
          <TextInput
            fullWidth
            id="email"
            name="email"
            placeholder="Escribe un mensaje..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSendMessage(text);
                setText("");
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{
                      backgroundColor: "primary.main",
                      marginLeft: 2,
                      padding: 1,
                      minHeight: 0,
                      minWidth: 0,
                      borderRadius: "50%"
                    }}
                    disabled={!text}
                    onClick={() => {
                      handleSendMessage(text);
                      setText("");
                    }}
                  >
                    <SendIcon fontSize="small" />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}
