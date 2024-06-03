export const formattedDate = (dateStr: string): string => {
    const date: Date = new Date(dateStr);
    const now = new Date();
  
    const differenceInMilliseconds = now.getTime() - date.getTime();
  
    // Calculate difference in seconds, minutes, hours, days, or years
    const seconds = Math.abs(differenceInMilliseconds) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const years = days / 365;
  
    // Choose the appropriate unit and format the string
    if (years >= 1) {
      return `${Math.floor(years)} year${years > 1 ? 's' : ''} ago`;
    } else if (days >= 1) {
      return `${Math.floor(days)} day${days > 1 ? 's' : ''} ago`;
    } else if (hours >= 1) {
      return `${Math.floor(hours)} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
      return `${Math.floor(minutes)} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${Math.floor(seconds)} second${seconds > 1 ? 's' : ''} ago`;
    }
}

export const formattedNumber = (number: string) => {
  const formatted = parseInt(number).toLocaleString();
  return formatted
}