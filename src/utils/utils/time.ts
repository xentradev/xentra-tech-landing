export const getTimeForChat = (date: Date) => {
  let hours = date.getHours();
  let currentMinutes = date.getMinutes();
  let period = hours >= 12 ? "p. m." : "a. m.";

  // Convert to 12-hour format
  hours = hours % 12 || 12;
  // Add leading zero to minutes if necessary
  const minutes =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes.toString();

  return `${hours}:${minutes} ${period}`;
};

export const getDayForChat = (date: Date): string =>  {
    const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const today = new Date();
    const messageDate = date;
  
    // Check if the message date is today
    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    }
  
    // Check if the message date is within the past week
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    if (messageDate > oneWeekAgo) {
      return daysOfWeek[messageDate.getDay()];
    }
  
    // Format date as dd-mm-yyyy Day
    const day = String(messageDate.getDate()).padStart(2, "0");
    const month = String(messageDate.getMonth() + 1).padStart(2, "0");
    const year = messageDate.getFullYear();
    const dayOfWeek = daysOfWeek[messageDate.getDay()];
  
    return `${day}-${month}-${year} ${dayOfWeek}`;
  }