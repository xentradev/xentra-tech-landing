
export interface Message {
  id: number;
  createdAt: Date;
  from: "assistant" | "user";
  threadId: string;
  text: string;
  failed?: boolean;
}
