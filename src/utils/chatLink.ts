import { CHARACTER_CHAT_DEFAULT_FEMALE_ID, CHARACTER_CHAT_DEFAULT_FEMALE_NAME, CHARACTER_CHAT_DEFAULT_MALE_ID, CHARACTER_CHAT_DEFAULT_MALE_NAME } from "./envVars";

export const generateChatLinkByGenderID = (
  preferred_gender: "female" | "male" | ""
): string => {
  if ("" === preferred_gender || preferred_gender === "female") {
    return `/chat/${CHARACTER_CHAT_DEFAULT_FEMALE_NAME.replaceAll(" ", "-")}/${CHARACTER_CHAT_DEFAULT_FEMALE_ID}`;
  } else {
    return `/chat/${CHARACTER_CHAT_DEFAULT_MALE_NAME.replaceAll(" ", "-")}/${CHARACTER_CHAT_DEFAULT_MALE_ID}`;
  }
};
