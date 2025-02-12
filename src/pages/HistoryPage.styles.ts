
import styled from '@emotion/styled';

export const HistoryContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(29, 32, 45, 0.3), rgba(29, 32, 45, 0.3)),
    url('./background.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const CardsContainer = styled.div`
  width: 750px;
  max-height: calc(90vh - 200px);
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;
export const NoDataMessage = styled.p`
  color: #ffffff;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const DeleteAllButton = styled.div`
  margin-top: 20px;
  button {
    background: rgba(81, 120, 177);
    color: white;
    border: none;
    padding: 10px 280px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: rgba(81, 120, 198);
    }
  }
`;