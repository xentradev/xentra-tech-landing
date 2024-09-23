import { StaticImageData } from "next/image";

interface FormOption {
  value: string;
  label?: string;
  img?: string;
}

export interface FormCreateAI {
  style: FormOption;
  ethnicity: FormOption;
  age: FormOption;
  eyes_color: FormOption;
  hair_style: FormOption;
  hair_color: FormOption;
  body_type: FormOption;
  breast_size: FormOption;
  butt_size: FormOption;
  personality: FormOption;
  occupation: FormOption;
  hobbies: FormOption[];
  relationship: FormOption;
  clothing: FormOption;
}

export interface FormCreateAIAPI {
  style: string;
  ethnicity: string;
  age: string;
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
  gender: string;
}

export interface Option {
  label: string;
  value: string;
  img?: string | StaticImageData;
  icon?: string | StaticImageData;
  backgroundColor?: string;
  textColor?: string;
}
