import { CharacterImage } from "@/entities/CharacterImage";
import { get, post } from "./httpService";
import { JobImageCreate, JobImageStatus } from "@/entities/JobImage";

const defaultPath = "/generated-images";
const jobImagesPath = "/job";

export const getGeneratedImages = async (): Promise<CharacterImage[]> => {
  try {
    const charactersResult: CharacterImage[] = await get<CharacterImage[]>(
      `${defaultPath}`
    );
    return charactersResult;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const validateImagePrompt = async (body: {
  prompt: string;
}): Promise<{
  error: string;
}> => {
  try {
    const result: {
      error: string;
    } = await post<{
      error: string;
    }>(`${defaultPath}/validate`, body);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const createImageJob = async (body: {
  prompt: string;
  characterId: number;
  from: string;
  validate: boolean;
}): Promise<JobImageCreate> => {
  try {
    const result = await post<JobImageCreate>(`${jobImagesPath}/image`, body);
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getJobStatus = async (jobId: number): Promise<JobImageStatus> => {
  try {
    const result = await get<JobImageStatus>(
      `${jobImagesPath}/image/${jobId}`,
      {}
    );
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
