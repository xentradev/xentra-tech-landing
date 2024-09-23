import { User } from "@/entities/User";
import { get } from "./httpServiceSsr";

export const getUserData = async (token: string): Promise<User> => {
  try {
    const result: any = await get<{ key: string }>(`/user/me`, {}, token);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
