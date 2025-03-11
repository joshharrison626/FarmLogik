import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface WeatherWidgetProps {
  data: {
    temperature: number;
    condition: string;
    icon: string;
  };
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  const getWeatherIcon = () => {
    switch (data.icon) {
      case 'sunny':
        return <Sun size={40} className="text-yellow-500" />;
      case 'cloudy':
        return <Cloud size={40} className="text-gray-500" />;
      case 'rainy':
        return <CloudRain size={40} className="text-blue-500" />;
      default:
        return <Sun size={40} className="text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Weather Conditions</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getWeatherIcon()}
          <div className="ml-4">
            <p className="text-3xl font-bold">{data.temperature}°C</p>
            <p className="text-gray-600">{data.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;