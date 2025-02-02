import { WeatherCondition } from '../types/weather';

export const getWeatherBackground = (condition: WeatherCondition): string => {
  const backgrounds = {
    Clear: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920&q=80',
    Clouds: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80',
    Rain: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1920&q=80',
    Snow: 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&w=1920&q=80',
    Thunderstorm: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80',
    Drizzle: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&w=1920&q=80',
    Mist: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&fit=crop&w=1920&q=80'
  };
  
  return backgrounds[condition] || backgrounds.Clear;
};