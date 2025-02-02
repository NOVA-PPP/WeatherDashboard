import React from 'react';
import { WeatherData } from '../types/weather';
import { Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const temperature = Math.round(data.main.temp);
  
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{data.name}</h2>
        <p className="text-6xl font-bold text-gray-900 mb-4">
          {temperature}°C
        </p>
        <p className="text-xl text-gray-600 capitalize">
          {data.weather[0].description}
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
          <Thermometer className="w-6 h-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Feels Like</span>
          <span className="font-semibold">{Math.round(data.main.feels_like)}°C</span>
        </div>
        
        <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
          <Droplets className="w-6 h-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Humidity</span>
          <span className="font-semibold">{data.main.humidity}%</span>
        </div>
        
        <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl">
          <Wind className="w-6 h-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Wind Speed</span>
          <span className="font-semibold">{data.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};