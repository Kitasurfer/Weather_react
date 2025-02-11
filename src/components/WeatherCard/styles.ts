import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 709px;
  background: linear-gradient(
    133.66deg, 
    rgba(47, 72, 111, 0.4) 5.78%, 
    rgba(11, 27, 52, 0.4) 96.58%
  );
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CityName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Temperature = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
`;

export const Timestamp = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: Inter;

  .api-error, .full-error {
    color: red;
    font-weight: 500;
    font-size: 57px;
    line-height: 68.98px;
    letter-spacing: 0%;
  }

  .error-details {
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 0%;
  }
`;
