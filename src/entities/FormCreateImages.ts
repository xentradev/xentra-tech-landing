interface CharacterSelected {
  img: string;
  name: string;
  id: number;
}

export interface FormCreateImages {
  prompt: string;
  numberOfImages: number;
  characterSelected: CharacterSelected;
}
