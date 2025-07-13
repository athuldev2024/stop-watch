export const currentDate = () => {
  return new Date().getFullYear();
};

export const formattedTime = (time) => {
  const getTwoDigits = (num) => String(num).padStart(2, "0");

  const minutes = getTwoDigits(Math.floor(time / 60000) % 60);
  const seconds = getTwoDigits(Math.floor(time / 1000) % 60);
  const milliseconds = getTwoDigits(Math.floor((time % 1000) / 10));

  return `${minutes}:${seconds}.${milliseconds}`;
};
