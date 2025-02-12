// src/pages/HistoryPage/HistoryPage.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import Button from '../../components/common/Button/Button';
import { deleteCard, clearHistory } from '../../store/redux/weatherSlice/weatherSlice';
import {
  HistoryContainer,
  Title,
  CardsContainer,
  DeleteAllButton,
  NoDataMessage,
} from './HistoryPage.styles';
import { WeatherCardData } from './types';

function HistoryPage(): JSX.Element {
  const dispatch = useDispatch();
  const { cards } = useAppSelector((state) => state.weather);

  const handleDeleteAll = (): void => {
    if (cards.length && confirm('Are you sure you want to delete all the cards?')) {
      dispatch(clearHistory());
    }
  };

  return (
    <HistoryContainer>
      <Title>Weather History</Title>
      {cards.length === 0 ? (
        <NoDataMessage>No weather data available.</NoDataMessage>
      ) : (
        <>
          <CardsContainer>
            {cards.map((card: WeatherCardData) => (
              <WeatherCard
                key={card.id}
                cityName={card.cityName}
                temperature={card.temperature}
                description={card.description}
                icon={card.icon}
                timestamp={card.timestamp}
                onDelete={() => dispatch(deleteCard(card.id))}
              />
            ))}
          </CardsContainer>
          <DeleteAllButton>
            <Button variant="danger" onClick={handleDeleteAll}>
              Delete all cards
            </Button>
          </DeleteAllButton>
        </>
      )}
    </HistoryContainer>
  );
}

export default HistoryPage;
