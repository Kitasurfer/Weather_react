import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 709px;
  height: 180px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 20px;
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

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
`;

export const Temperature = styled.div`
  font-size: 57px;
  line-height: 68.98px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const WeatherIcon = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  z-index: 1;
`;

export const CityName = styled.h2`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: 400;
  margin: 0;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 21.78px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Timestamp = styled.div`
  font-size: 18px;
  line-height: 21.78px;
  font-weight: 400;
  opacity: 0.6;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
