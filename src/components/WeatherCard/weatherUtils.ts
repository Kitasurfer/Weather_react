export const WEATHER_ICON_BASE_URL = 'https://openweathermap.org/img/wn';
export const DEFAULT_WEATHER_ICON = '01d@2x.png';

export function getWeatherIconUrl(icon: string, fallbackIcon = DEFAULT_WEATHER_ICON): string {
  try {
    
    const cleanIcon = icon.replace('@2x', '');
    
    const iconPath = `${WEATHER_ICON_BASE_URL}/${cleanIcon}@4x.png`;
    return iconPath;
  } catch (error) {
    console.error('Error when forming path to icon:', error);
    return `${WEATHER_ICON_BASE_URL}/${fallbackIcon}`;
  }
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).replace(',', ' ');
}

export function parseErrorMessage(errorText: string) {
  const parts = errorText.split('-');
  return parts.length > 1 
    ? { apiError: parts[0].trim(), details: parts[1].trim() }
    : { apiError: errorText, details: '' };
}