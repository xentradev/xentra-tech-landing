import { CharacterImage } from "@/entities/CharacterImage";
import { get } from "./httpServiceSsr";
import { post } from "../httpService";

const defaultPath = "/generated-images";

interface GeneratedImagesResponse {
  images: CharacterImage[];
  totalImages: number;
}

export const getGeneratedImages = async (
  take: number = 15,
  skip: number = 0,
  token: string
): Promise<GeneratedImagesResponse> => {
  try {
    const charactersResult: GeneratedImagesResponse =
      await get<GeneratedImagesResponse>(
        `${defaultPath}?take=${take}&skip=${skip}`,
        {},
        token,
        {
          timeout: 30000,
        }
      );
    return charactersResult;
  } catch (e) {
    console.error(
      `ERROR - api ssr chat - getGeneratedImages - token=${token} - take=${take} - skip=${skip}`,
      e
    );
    throw e;
  }
};

export const uploadImage = async (body: {
  imageB64: string;
}): Promise<string> => {
  try {
    const imageUrl: string = await post<string>(`/images`, body, {
      timeout: 20000,
    });
    return imageUrl;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
