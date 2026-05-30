import { Search } from 'lucide-react';
import './SearchBar.css';

function SearchBar({ value, onChange, placeholder = '搜索...' }) {
  return (
    <div className="search-bar">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
