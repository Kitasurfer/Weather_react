import { getWeatherIconUrl } from './weatherUtils';

interface WeatherIconComponentProps {
  icon: string;
  cityName: string;
}

function WeatherIconComponent({ icon, cityName }: WeatherIconComponentProps) {
  return (
    <img
      src={getWeatherIconUrl(icon)}
      alt={`Weather icon for ${cityName}`}
      onError={(e) => {
        (e.target as HTMLImageElement).src = getWeatherIconUrl('01d');
      }}
    />
  );
}

export default WeatherIconComponent;