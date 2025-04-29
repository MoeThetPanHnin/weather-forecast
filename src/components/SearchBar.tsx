import React, { useState } from 'react';

interface Props { onSearch(city: string): void; }

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [text, setText] = useState<string>('');
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search city..."
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key==='Enter' && onSearch(text)}
      />
      <button onClick={() => onSearch(text)}>🔍</button>
    </div>
  );
};

export default SearchBar;
