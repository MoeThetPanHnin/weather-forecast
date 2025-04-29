const KEY = 'b368447c9be9804e9fbc449522e29911'; // Your API key
const BASE = 'https://api.openweathermap.org/data/2.5';

// Add lang parameter with default 'en'
export async function fetchCurrent(loc: string, unit: string, lang: string = 'en') {
  const q = loc.includes(',')
    ? `lat=${loc.split(',')[0]}&lon=${loc.split(',')[1]}`
    : `q=${loc}`;
  const res = await fetch(`${BASE}/weather?${q}&units=${unit}&appid=${KEY}&lang=${lang}`);
  if (!res.ok) throw new Error('Failed to fetch current weather');
  return res.json();
}

export async function fetchForecast(loc: string, unit: string, lang: string = 'en') {
  const q = loc.includes(',')
    ? `lat=${loc.split(',')[0]}&lon=${loc.split(',')[1]}`
    : `q=${loc}`;
  const res = await fetch(`${BASE}/forecast?${q}&units=${unit}&appid=${KEY}&lang=${lang}`);
  if (!res.ok) throw new Error('Failed to fetch forecast');
  const data = await res.json();
  return data.list.filter((_: any, i: number) => i % 8 === 0);
}