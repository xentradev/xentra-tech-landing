import { Character } from "@/entities/Character";
import { FormCreateAIAPI } from "@/entities/FormCreateAI";
import { get, post, put } from "./httpService";
import { CharacterImage } from "@/entities/CharacterImage";

const defaultPath = "/character";

export const createCharacter = async (
  body: FormCreateAIAPI
): Promise<Character> => {
  try {
    const result: Character = await post<Character>(`${defaultPath}`, body, {
      timeout: 30000,
    });
    return result;
  } catch (e) {
    console.error(
      `ERROR - api character - createCharacter - body=${body}`,
      e
    );
    console.error(e);
    throw e;
  }
};

export const generateImage = async (body: {
  characterId: number;
  prompt: string;
  from: string;
  validate?: boolean;
}): Promise<CharacterImage> => {
  try {
    return await post<CharacterImage>(`${defaultPath}/photo-generation`, body, {
      timeout: 30000,
    });
  } catch (e) {
    console.error(
      `ERROR - api character - generateImage - body=${body}`,
      e
    );
    throw e;
  }
};

export const getPublicCharacters = async (): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await get<Character[]>(
      `${defaultPath}/public`
    );
    return charactersResult;
  } catch (e) {
    console.error(
      `ERROR - api character - getPublicCharacters`,
      e
    );
    throw e;
  }
};

export const getYourCharacters = async (): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await get<Character[]>(
      `${defaultPath}/private`
    );
    return charactersResult;
  } catch (e) {
    console.error(
      `ERROR - api character - getYourCharacters`,
      e
    );
    throw e;
  }
};

export const putCharacter = async (
  characterId: number,
  body: {
    name?: string;
    description?: string;
    wantsTelegram?: boolean;
    telegramUsername?: string;
    telegramToken?: string;
  }
): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await put<Character[]>(
      `${defaultPath}/${characterId}`,
      body
    );
    return charactersResult;
  } catch (e) {
    console.error(
      `ERROR - api character - putCharacter - characterId=${characterId} - body=${body}`,
      e
    );
    throw e;
  }
};

export const telegramCharacterRequest = async (
  characterId: number,
  body: {
    wantsTelegram?: boolean;
  }
): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await put<Character[]>(
      `${defaultPath}/telegram-request/${characterId}`,
      body
    );
    return charactersResult;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addPrivateCharacterToTelegram = async (
  characterId: number,
  body: {
    telegramUsername?: string;
    telegramToken?: string;
    wantsTelegram?: boolean;
    email?: string;
  }
): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await put<Character[]>(
      `${defaultPath}/add-private-character-telegram/${characterId}`,
      body
    );
    return charactersResult;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
