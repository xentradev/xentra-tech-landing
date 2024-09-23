import { createImageJob, getJobStatus } from "@/api/images";

export async function asyncImages(idImageJob: number): Promise<any> {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  let isFirstAttempt = true;

  while (true) {
    try {
      const { status, url, blurredUrl } = await getJobStatus(idImageJob);

      if (status !== "pending") {
        return {
          status,
          url,
          blurredUrl,
        };
      }
    } catch (error) {
      console.error("Error fetching API:", error);
    }

    if (isFirstAttempt) {
      await sleep(10000); // Espera 5 segundos la primera vez
      isFirstAttempt = false;
    } else {
      await sleep(2000); // Espera 2 segundos después de la primera vez
    }
  }
}
