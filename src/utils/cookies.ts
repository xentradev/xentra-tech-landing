function SetCookie(name: string, value: string) {
  document.cookie = name + "=" + value + "; Path=/; Expires=Thu, 01 Jan 2050 00:00:01 GMT;";
}
function RemoveCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export const CookieManager = {
  SetCookie,
  RemoveCookie,
};
