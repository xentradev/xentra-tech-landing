import { getLocale, getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const supportedLanguages = ["en", "ja", "es", "pl"];

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("language")?.value;
  let browserLanguage = undefined;

  if (!languageCookie) {
    // Get the Accept-Language header directly
    const acceptLanguageHeader = headers().get("accept-language");

    // Extract the preferred language from the Accept-Language header
    const acceptLanguageHeaderOption = acceptLanguageHeader
      ?.split(",")[0]
      .split("-")[0]; // "en-US,en;q=0.9" -> "en"
    if (
      acceptLanguageHeaderOption &&
      supportedLanguages.includes(acceptLanguageHeaderOption)
    ) {
      browserLanguage = acceptLanguageHeaderOption; // Por defecto "en" si el idioma del navegador no está soportado
    }
  }

  const language = languageCookie || browserLanguage || "en"; // Default to "en" if none found

  return {
    locale: language,
    messages: (await import(`../public/messages/${language}.json`)).default,
  };
});
