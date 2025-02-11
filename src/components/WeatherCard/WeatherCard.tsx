import React from 'react';
import { formatDate, formatTemperature } from '../../utils/formatters';
import {
  CardWrapper, 
  WeatherIcon, 
  Temperature, 
  CityName, 
  Description, 
  Timestamp,
  CardContent,
  CardActions,
  DeleteButton,
  ErrorMessage
} from './styles';

interface WeatherCardProps {
  id?: string;
  cityName?: string;
  temperature?: number;
  description?: string;
  icon?: string;
  timestamp?: number;
  error?: string;
  onDelete?: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  temperature,
  description,
  icon,
  timestamp,
  error,
  onDelete
}) => {
  const parseErrorMessage = (errorText: string) => {
    const parts = errorText.split('-');
    return parts.length > 1 
      ? { apiError: parts[0].trim(), details: parts[1].trim() }
      : { apiError: errorText, details: '' };
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
        <CardContent>
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
        </CardContent>
      ) : (
        <>
          <WeatherIcon 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={`Weather icon for ${cityName}`} 
          />
          <CardContent>
            <CityName>{cityName}</CityName>
            <Temperature>{formatTemperature(temperature)}</Temperature>
            <Description>{description}</Description>
            <Timestamp>Обновлено: {formatDate(timestamp)}</Timestamp>
          </CardContent>
        </>
      )}
    </CardWrapper>
  );
}

export default WeatherCard;
