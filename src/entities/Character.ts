import { CharacterImage } from "./CharacterImage";
import { User } from "./User";

export interface Character {
  id: number;
  name: string;
  description: string;
  style: string;
  ethnicity: string;
  age: number;
  eyes_color: string;
  hair_style: string;
  hair_color: string;
  body_type: string;
  breast_size: string;
  butt_size: string;
  personality: string;
  occupation: string;
  hobbies: string[];
  relationship: string;
  clothing: string;
  public: boolean;
  images: CharacterImage[];
  gender: string;
  telegram_username: string;
  telegram_token: string;
  createdAt: string;
  is_fantasy: boolean;
  userId?: number;
  user?: User;
}
