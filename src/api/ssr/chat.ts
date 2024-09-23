import { get, post, put } from "./httpServiceSsr";
import { Message } from "@/entities/Message";

const defaultPath = "/chat";


export const getConversations = async (token: string): Promise<Message[]> => {
  try {
    return await get<Message[] >(`${defaultPath}/conversations`, {}, token);
  } catch (e) {
    console.error(`ERROR - api ssr chat - getConversations - token=${token}`, e);
    throw (e)
  }
};


export const getFullConversation = async (characterId: number, token: string ): Promise<Message[]> => {
  try {
    return await get<Message[]>(`${defaultPath}/conversation?characterId=${characterId}` , {}, token);
  } catch (e) {
    console.error(`ERROR - api ssr chat - getFullConversation - token=${token} - characterId=${characterId}`, e);
    throw (e)
  }
};

export const createThread = async (): Promise<string> => {
  try {
    return await post<string>(`${defaultPath}/thread`, {}, null, { timeout: 25000 });
  } catch (e) {
    console.error(`ERROR - api ssr chat - createThread`, e);
    throw (e)
  }
};
