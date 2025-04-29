import { useState, useEffect } from 'react';
import { fetchCurrent, fetchForecast } from '../utils/weatherUtils';

export default function useWeather(city: string, unit: string) {
  const [current, setCurrent] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const cur = await fetchCurrent(city, unit);
        const fore = await fetchForecast(city, unit);
        setCurrent(cur);
        setForecast(fore);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [city, unit]);

  return { current, forecast, loading, error };
}