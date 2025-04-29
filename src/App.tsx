import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ToggleUnit from './components/ToggleUnit';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import useWeather from './hooks/useWeather';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  // const [lang, setLang] = useState<'en' | 'kr'>('en');
  const { current, forecast, loading, error } = useWeather(city, unit);
  const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());

  // Auto-detect location on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCity(`${coords.latitude},${coords.longitude}`);
    });
  }, []);

  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get city name from weather data if available
  const locationName = current?.name || 'Current Location';

  return (
    <div className={`app-container bg-${current?.weather?.[0]?.main?.toLowerCase() || ''}`}>
      <div className="glass-card">
        <SearchBar onSearch={setCity} />
        <ToggleUnit unit={unit} onToggle={setUnit} />
        
        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>{locationName}</h2>
          <div>{dateTime}</div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {current && <WeatherCard data={current} unit={unit} />}
        {forecast && <ForecastCard list={forecast} unit={unit} />}
      </div>
    </div>
  );
};

export default App;