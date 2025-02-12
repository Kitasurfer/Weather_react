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
import { getWeatherIconUrl, formatTimestamp, parseErrorMessage } from './weatherUtils';
import WeatherIconComponent from './WeatherIconComponent';

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
            <WeatherIconComponent icon={icon} cityName={cityName} />
          </RightSection>
        </>
      )}
    </CardWrapper>
  );
}

export default WeatherCard;