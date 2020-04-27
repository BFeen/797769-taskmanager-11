const castTimeFormat = (value) => {
  return String(value).padStart(2, `0`);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours());
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};