export const cleanMessage = (message: string) => {
    try {
      const regex = /\[photo\]\(.*?\)/g;
      return message.replace(regex, "");
    } catch (e) {
      throw new Error("Error cleaning message");
    }
  };