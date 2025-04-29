import React from 'react';

interface Props { data: any; unit: string; }

const WeatherCard: React.FC<Props> = ({ data, unit }) => {
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <div className="weather-card">
      {/* Weather icon from OpenWeatherMap */}
      <img src={icon} alt={data.weather[0].description} />
      {/* Round temp and display unit */}
      <h2>{Math.round(data.main.temp)}°{unit==='metric'?'C':'F'}</h2>
      <p>{data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {Math.round(data.wind.speed)} {unit==='metric'?'m/s':'mph'}</p>
    </div>
  );
};

export default WeatherCard;