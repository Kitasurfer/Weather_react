import React from 'react';
import {
  CardWrapper,
  DeleteButton,
  LeftSection,
  CenterSection,
  RightSection,
  Temperature,
  WeatherIcon,
  CityName,
  Description,
  Timestamp,
  ErrorMessage
} from './styles';

interface WeatherCardProps {
  cityName: string;
  temperature: number;
  description: string;
  icon: string;
  timestamp: number;
  error?: string | null;
  onDelete?: () => void;
}

function WeatherCard({
  cityName,
  temperature,
  description,
  icon,
  timestamp,
  error,
  onDelete
}: WeatherCardProps) {
  console.log('Weather icon code:', icon);
  console.log('Full icon URL:', `https://openweathermap.org/img/wn/${icon}@2x.png`);
  const parseErrorMessage = (errorText: string) => {
    const parts = errorText.split('-');
    return parts.length > 1 
      ? { apiError: parts[0].trim(), details: parts[1].trim() }
      : { apiError: errorText, details: '' };
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', ' ');
  };

  const errorParts = error ? parseErrorMessage(error) : null;

  return (
    <CardWrapper>
      {onDelete && (
        <DeleteButton onClick={onDelete}>
          ✕
        </DeleteButton>
      )}
      {error ? (
        <ErrorMessage>
          {errorParts?.apiError && (
            <span className={errorParts.details ? 'api-error' : 'full-error'}>
              {errorParts.apiError}
            </span>
          )}
          {errorParts?.details && (
            <span className="error-details">{errorParts.details}</span>
          )}
        </ErrorMessage>
      ) : (
        <>
          <LeftSection>
            <Temperature>{Math.round(temperature)}°</Temperature>
            <CityName>{cityName}</CityName>
          </LeftSection>
          <CenterSection>
            <Description>{description}</Description>
            <Timestamp>Обновлено: {formatTimestamp(timestamp)}</Timestamp>
          </CenterSection>
          <RightSection>
            {icon && (
              <WeatherIcon 
                src={`https://openweathermap.org/img/wn/${icon.replace('n', 'd')}@2x.png`} 
                alt={`Weather icon for ${cityName}`} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://openweathermap.org/img/wn/01d@2x.png';
                }}
              />
            )}
          </RightSection>
        </>
      )}
    </CardWrapper>
  );
}

export default WeatherCard;
