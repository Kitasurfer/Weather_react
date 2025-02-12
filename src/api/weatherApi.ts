import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const APP_ID = import.meta.env.VITE_APP_ID;

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
  try {
    const response = await axios.get<WeatherResponse>(
      `${API_URL}/weather?q=${city}&units=metric&appid=${APP_ID}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Сервер ответил с ошибкой
        throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || 'Unknown API error'}`);
      } else if (error.request) {
        // Запрос был сделан, но нет ответа
        throw new Error(`Network Error: No response received`);
      } else {
        // Что-то пошло не так при настройке запроса
        throw new Error(`Request Error: ${error.message}`);
      }
    } else {
      // Неожиданная ошибка
      throw new Error(`Unexpected Error: ${String(error)}`);
    }
  }
};
