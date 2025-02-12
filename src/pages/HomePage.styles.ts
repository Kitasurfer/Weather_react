// HomePage.styles.ts
import styled from '@emotion/styled';

// Корневой контейнер страницы
export const HomeContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* Учёт высоты шапки */
  padding: 20px;
  text-align: center;
`;

// Контейнер для поиска
export const SearchContainer = styled('div')`
  position: relative;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: 1710px;
  height: 48px;
  margin: 20px 0;
`;

// Сообщение об ошибке
export const ErrorMessage = styled('div')`
  color: red;
  margin-top: 10px;
  font-size: 16px;
`;
