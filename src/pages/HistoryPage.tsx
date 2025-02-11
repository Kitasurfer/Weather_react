import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import Button from '../components/common/Button';
import { deleteCard, clearHistory } from '../store/weatherSlice';
import { HistoryContainer, Title, CardsContainer, DeleteAllButton } from './HistoryPage.styles';

function HistoryPage() {
  const dispatch = useDispatch();
  const { cards } = useAppSelector((state) => state.weather);

  const handleDeleteAll = () => {
    if (cards.length && confirm('Вы уверены, что хотите удалить все карточки?')) {
      dispatch(clearHistory());
    }
  };

  return (
    <HistoryContainer>
      <Title>Weather History</Title>
      {cards.length === 0 ? (
        <p>No weather data available.</p>
      ) : (
        <>
          <CardsContainer>
            {cards.map((card) => (
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
