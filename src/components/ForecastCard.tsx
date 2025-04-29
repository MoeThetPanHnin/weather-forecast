import React from 'react';

interface Props { list: any[]; unit: string; }

const ForecastCard: React.FC<Props> = ({ list, unit }) => (
  <div className="forecast-container">
    {list.map(day => {
      // Convert UNIX timestamp to local date
      const date = new Date(day.dt * 1000).toLocaleDateString();
      const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
      return (
        <div key={day.dt} className="forecast-day">
          <p>{date}</p>
          <img src={icon} alt={day.weather[0].description} />
          <p>{Math.round(day.main.temp)}°</p>
        </div>
      );
    })}
  </div>
);

export default ForecastCard;