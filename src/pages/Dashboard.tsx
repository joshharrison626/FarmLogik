import React from 'react';
import WeatherWidget from '../components/dashboard/WeatherWidget';

const mockWeatherData = {
  temperature: 22,
  condition: 'Partly Cloudy',
  icon: 'cloudy'
};

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WeatherWidget data={mockWeatherData} />
        {/* Add more dashboard widgets here */}
      </div>
    </div>
  );
};

export default Dashboard;