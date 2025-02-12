import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../api/weatherApi';
import { addCard, setError } from '../store/weatherSlice';
import { useAppSelector } from '../store/hooks';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import {
  HomeContainer,
  SearchContainer,
} from './HomePage.styles';

const BUTTON_TEXTS = {
  LOADING: 'Loading...',
  SEARCH: 'Search'
};

function HomePage() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { cards, error } = useAppSelector((state) => state.weather);
  const latestCard = cards[0];

  const handleSearch = async () => {
    setHasSearched(true);
    if (!city.trim()) {
      dispatch(setError('Enter the name of the city'));
      return;
    }
    setIsLoading(true);
    try {
      const weatherData = await fetchWeather(city);
      dispatch(
        addCard({
          cityName: weatherData.name,
          temperature: Math.round(weatherData.main.temp),
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
        })
      );
      dispatch(setError(null));
      setCity('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Weather fetch error:', errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HomeContainer>
      <SearchContainer>
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the name of the city"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? BUTTON_TEXTS.LOADING : BUTTON_TEXTS.SEARCH}
        </Button>
      </SearchContainer>
      {(hasSearched && error || latestCard) && (
        <WeatherCard 
          {...(latestCard || {})} 
          error={error}
        />
      )}
    </HomeContainer>
  );
}

export default HomePage;
