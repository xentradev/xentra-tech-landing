import { get, post, put, remove } from "./httpService";
import { SeoPage } from "@/entities/SeoPage";
import { Ai } from "@/entities/Ai";
import { User } from "@/entities/User";

export const getPublicAiById = async (id: number): Promise<Ai | null> => {
  const path = `/admin/my-ai/public/${id}`;
  try {
    return await get<Ai | null>(`${path}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addAi = async (body: {
  name: string;
  description: string;
  assistantId: string;
  backgroundColor?: string;
  primaryMainColor?: String;
  textColor?: string;
  avatar?: string;
  imageB64?: string;
}): Promise<any> => {
  const path = "/admin/create-ai";
  try {
    return await post<any>(`${path}`, body);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const updateAi = async (
  id: number,
  body: {
    name: string;
    description: string;
    assistantId: string;
    primaryMainColor?: String;
    textColor?: string;
    backgroundColor?: string;
    avatar?: string;
    imageB64?: string;
  }
): Promise<any> => {
  const path = `/admin/my-ai/${id}`;
  try {
    return await put<any>(`${path}`, body);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteSeoPage = async (id: number) => {
  const path = `/admin/seo-pages/${id}`;
  try {
    return await remove<SeoPage[]>(`${path}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const uploadAvatarImage = async (
  id: number,
  body: {
    imageB64: string;
  }
): Promise<string> => {
  try {
    const imageUrl: string = await post<string>(
      `/admin/my-ai/avatar-image/${id}`,
      body,
      {
        timeout: 20000,
      }
    );
    return imageUrl;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getUserData = async (token: string): Promise<User | null> => {
  try {
    const result: any = await get<{ key: string }>(`admin/me`, {});
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
