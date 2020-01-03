const getFormattedTime = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = date.getHours();
  const formattedHours = getFormattedTime(hours % 12);
  const formattedMinutes = getFormattedTime(date.getMinutes());

  const timeOfDay = hours < 12 ? `AM` : `PM`;

  return `${formattedHours}:${formattedMinutes} ${timeOfDay}`;
};
