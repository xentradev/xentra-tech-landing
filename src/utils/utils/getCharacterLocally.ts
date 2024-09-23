import { Character } from "@/entities/Character";

export const getCharacterByCharacterIdLocally = (
    characterId: number,
    allCharacters: Character[]
  ): Character => {
    const characterResult = allCharacters.find(
      (ch) => ch.id === characterId
    );
    if (characterResult) {
      return characterResult;
    }
    throw new Error("Character not found");
  };