export interface WeatherCardData {
  id: string;
  cityName: string;
  temperature: number;
  description: string;
  icon: string;
  timestamp: number;
}

export interface WeatherState {
  cards: WeatherCardData[];
}
