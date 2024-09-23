import { Character } from "@/entities/Character";
import { get } from "./httpServiceSsr";

const defaultPath = "/character";

let publicCharactersCache: Character[] | null = null;

export const getPublicCharacters = async (): Promise<Character[]> => {
  try {
    if (!publicCharactersCache) {
      // load data and add it to cache
      const charactersResult: Character[] = await get<Character[]>(
        `${defaultPath}/public`
      );
      publicCharactersCache = charactersResult as Character[];
      return publicCharactersCache;
    }
    // cached data
    return publicCharactersCache;
  } catch (e) {
    console.error(`ERROR - api ssr character - get public characters`, e);
    throw e;
  }
};

export const getYourCharacters = async (
  token: string
): Promise<Character[]> => {
  try {
    const charactersResult: Character[] = await get<Character[]>(
      `${defaultPath}/private`,
      {},
      token
    );
    return charactersResult;
  } catch (e) {
    console.error(`ERROR - api ssr character - get private characters - token=${token}`, e);
    throw e;
  }
};

export const getCharacterById = async (
  characterId: number,
  token: string
): Promise<Character> => {
  try {
    const charactersResult: Character = await get<Character>(
      `${defaultPath}/filter/${characterId}`,
      {},
      token
    );
    return charactersResult;
  } catch (e) {
    console.error(`ERROR - api ssr character - get character by id - token=${token} - characterId=${characterId}`, e);
    throw e;
  }
};