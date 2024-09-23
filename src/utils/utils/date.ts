export function padTo2Digits(num: any) {
  return num.toString().padStart(2, "0");
}

export function formatDate(date: any) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("/");
}
