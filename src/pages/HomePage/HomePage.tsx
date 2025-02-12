// src/pages/HomePage/HomePage.tsx

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../api/weatherApi';
import { addCard, setError } from '../../store/redux/weatherSlice/weatherSlice';
import { useAppSelector } from '../../store/hooks';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { HomeContainer, SearchContainer } from './HomePage.styles';
import { WeatherApiResponse } from './types';

const BUTTON_TEXTS = {
  LOADING: 'Loading...',
  SEARCH: 'Search',
};

function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const { cards, error } = useAppSelector((state) => state.weather);
  const latestCard = cards[0];

  const handleSearch = async (): Promise<void> => {
    setHasSearched(true);
    if (!city.trim()) {
      dispatch(setError('Enter the name of the city'));
      return;
    }
    setIsLoading(true);
    try {
      const weatherData: WeatherApiResponse = await fetchWeather(city);
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
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('Weather fetch error:', errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <HomeContainer>
      <SearchContainer>
        <Input
          value={city}
          onChange={handleInputChange}
          placeholder="Enter the name of the city"
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? BUTTON_TEXTS.LOADING : BUTTON_TEXTS.SEARCH}
        </Button>
      </SearchContainer>
      {((hasSearched && error) || latestCard) && (
        <WeatherCard 
          {...(latestCard || {})} 
          error={error}
        />
      )}
    </HomeContainer>
  );
}

export default HomePage;
