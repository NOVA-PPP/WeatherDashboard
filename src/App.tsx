import { useState } from 'react';
import { WeatherCard } from './components/WeatherCard';
import { SearchBar } from './components/SearchBar';
import { WeatherData, WeatherCondition } from './types/weather';
import { getWeatherBackground } from './utils/getWeatherBackground';
import { AlertCircle } from 'lucide-react';

const API_KEY = 'd9d7a02269147f38fa3d49d8d5de684b'; // Replace with your API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const backgroundImage = weather 
    ? getWeatherBackground(weather.weather[0].main as WeatherCondition)
    : getWeatherBackground('Clear');

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen gap-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Weather Dashboard
          </h1>
          
          <SearchBar onSearch={fetchWeather} />
          
          {loading && (
            <div className="text-white text-xl">Loading...</div>
          )}
          
          {error && (
            <div className="bg-red-500/90 backdrop-blur-md text-white px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}
          
          {weather && !error && <WeatherCard data={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;