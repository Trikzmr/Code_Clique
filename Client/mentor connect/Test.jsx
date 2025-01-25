import React, { useState, useEffect, useRef } from 'react';

const Test = ({ trigger = '@', options = [], onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const lastWord = value.split(' ').pop();
    if (lastWord.startsWith(trigger)) {
      const query = lastWord.slice(1).toLowerCase();
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(query)
      );
      setFilteredOptions(filtered);
      setIsDropdownOpen(filtered.length > 0);
    } else {
      setIsDropdownOpen(false);
    }
  };

  // Handle keydown events for navigation and selection
  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  // Select an option
  const selectOption = (option) => {
    const words = inputValue.split(' ');
    words[words.length - 1] = `${trigger}${option} `;
    setInputValue(words.join(' '));
    setIsDropdownOpen(false);
    setHighlightedIndex(-1);
    if (onSelect) onSelect(option);
  };

  // Handle option click
  const handleOptionClick = (option) => {
    selectOption(option);
  };

  return (
    <div className="text-expander" style={{ position: 'relative' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        className="text-expander-input"
        placeholder="Type something..."
      />
      {isDropdownOpen && (
        <ul className="text-expander-dropdown" style={{ position: 'absolute', zIndex: 1000 }}>
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              className={`text-expander-option ${
                index === highlightedIndex ? 'highlighted' : ''
              }`}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: index === highlightedIndex ? '#ddd' : '#fff',
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;

// Usage Example:
// <TextExpander
//   trigger="@"
//   options={["Alice", "Bob", "Charlie", "David"]}
//   onSelect={(option) => console.log("Selected:", option)}
// />
