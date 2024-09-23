export const isDateWithinLastXHours = (
  dateString: string,
  hours: number = 72
) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime(); // Aseguramos que ambos valores sean números
  const hoursDifference = diffInMilliseconds / (1000 * 60 * 60);
  return hoursDifference <= hours;
};
