// src/pages/HomePage/types.ts

export interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}
