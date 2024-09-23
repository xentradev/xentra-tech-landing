import { Character } from "@/entities/Character";
import { get, post, put } from "./httpService";
import { Message } from "@/entities/Message";

const defaultPath = "/chat";

export const sendMessage = async (body: {
  messages: Message[];
  botId: number
}): Promise<Message> => {
  try {
    return await post<Message>(`${defaultPath}/channel/internal/message`, body, {
      timeout: 25000,
    });
  } catch (e) {
    console.error(
      `ERROR - api character - sendMessage - body=${body}`,
      e
    );
    throw e;
  }
};

export const createThread = async (): Promise<string> => {
  try {
    return await post<string>(`${defaultPath}/thread`, { timeout: 25000 });
  } catch (e) {
    console.error(e);
    throw (e)
  }
};

export const saveMessageImage = async (body: {
  characterId: number;
  threadId: string;
  imageId: number;
}): Promise<Message> => {
  try {
    return await post<Message>(`${defaultPath}/message/image`, body);
  } catch (e) {
    console.error(
      `ERROR - api character - saveMessageImage - body=${body}`,
      e
    );
    throw e;
  }
};
