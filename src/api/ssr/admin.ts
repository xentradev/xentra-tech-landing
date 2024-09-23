import { get } from "./httpServiceSsr";
import { Ai } from "@/entities/Ai";

export const getAis = async (token: string): Promise<Ai[]> => {
  const path = "/admin/my-ai";
  try {
    return await get<Ai[]>(`${path}`, {}, token);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAiById = async (
  id: number,
  token: string
): Promise<Ai | null> => {
  const path = `/admin/my-ai/${id}`;
  try {
    return await get<Ai | null>(`${path}`, {}, token);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
