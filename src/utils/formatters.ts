import dayjs from 'dayjs';

export const formatDate = (timestamp: number): string => {
  return dayjs(timestamp).format('DD.MM.YYYY HH:mm');
};

export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};
