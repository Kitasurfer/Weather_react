
/***
 Модуль для работы с API погоды
 
 Включает в себя функцию для получения данных о погоде по названию города
 */

 import axios from 'axios';

 // Основной URL API, полученный из переменных окружения
 const API_URL = import.meta.env.VITE_API_URL;
 // Идентификатор приложения, полученный из переменных окружения
 const APP_ID = import.meta.env.VITE_APP_ID;
 
 // Интерфейс для типизации данных ответа о погоде
 interface WeatherResponse {
	 // Название города
	 name: string;
	 // Основные данные о погоде
	 main: {
		 // Текущая температура
		 temp: number;
	 };
	 // Массив с информацией о погодных условиях
	 weather: {
		 // Описание погоды (например, "Ясно" или "Дождь")
		 description: string;
		 // Иконка, связанная с погодой
		 icon: string;
	 }[];
 }
 
 // Функция для получения данных о погоде по названию города
 export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
	 try {
		 // Отправка GET-запроса к API с параметрами: город, единицы измерения (метрические) и идентификатор приложения
		 const response = await axios.get<WeatherResponse>(
			 `${API_URL}/weather?q=${city}&units=metric&appid=${APP_ID}`
		 );
		 // Возвращение данных из ответа
		 return response.data;
	 } catch (error) {
		 // Обработка ошибок
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