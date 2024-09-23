"use client";
import { useSearchParams } from "next/navigation";

const ChatWidget = () => {
  const searchParams = useSearchParams();

  const without_chat_bubble =
    Boolean(searchParams.get("without_chat_bubble")) ?? false;

  return (
    !without_chat_bubble && (
      <script
        src="http://localhost:3000/chat-widget.js"
        async
        data-businessId="1"
        data-env="local"
        data-chat-host="http://localhost:3000"
      ></script>
    )
  );
};

export default ChatWidget;
