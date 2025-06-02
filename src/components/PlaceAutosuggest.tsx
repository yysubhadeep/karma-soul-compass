
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { MapPin, Plus, AlertCircle } from "lucide-react";
import { filterCities, handleUnknownPlace } from '@/data/indianCities';

interface PlaceAutosuggestProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

const PlaceAutosuggest = ({ value, onChange, placeholder, className, id }: PlaceAutosuggestProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [unknownPlaceSuggestions, setUnknownPlaceSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [showUnknownPlaceOption, setShowUnknownPlaceOption] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length >= 2) {
      const filtered = filterCities(value);
      setSuggestions(filtered);
      setShowSuggestions(true);
      
      // If no matches found and user has typed at least 3 characters, show unknown place options
      if (filtered.length === 0 && value.length >= 3) {
        const unknownSuggestions = handleUnknownPlace(value);
        setUnknownPlaceSuggestions(unknownSuggestions);
        setShowUnknownPlaceOption(true);
      } else {
        setShowUnknownPlaceOption(false);
        setUnknownPlaceSuggestions([]);
      }
    } else {
      setSuggestions([]);
      setUnknownPlaceSuggestions([]);
      setShowSuggestions(false);
      setShowUnknownPlaceOption(false);
    }
    setActiveSuggestion(-1);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setShowUnknownPlaceOption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
    setShowUnknownPlaceOption(false);
    setActiveSuggestion(-1);
  };

  const handleCustomPlaceAdd = (customPlace: string) => {
    onChange(customPlace);
    setShowSuggestions(false);
    setShowUnknownPlaceOption(false);
    setActiveSuggestion(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalSuggestions = suggestions.length + unknownPlaceSuggestions.length;
    
    if (!showSuggestions && !showUnknownPlaceOption) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestion(prev => 
          prev < totalSuggestions - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestion(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (activeSuggestion >= 0) {
          if (activeSuggestion < suggestions.length) {
            handleSuggestionClick(suggestions[activeSuggestion]);
          } else {
            const unknownIndex = activeSuggestion - suggestions.length;
            handleCustomPlaceAdd(unknownPlaceSuggestions[unknownIndex]);
          }
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setShowUnknownPlaceOption(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  const allSuggestions = [...suggestions, ...unknownPlaceSuggestions];
  const shouldShowDropdown = (showSuggestions && suggestions.length > 0) || 
                            (showUnknownPlaceOption && unknownPlaceSuggestions.length > 0);

  return (
    <div className="relative">
      <div className="relative">
        <Input
          ref={inputRef}
          id={id}
          type="text"
          placeholder={placeholder || "Start typing your city name..."}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0 || unknownPlaceSuggestions.length > 0) {
              setShowSuggestions(true);
              setShowUnknownPlaceOption(unknownPlaceSuggestions.length > 0);
            }
          }}
          className={className}
        />
        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
      
      {shouldShowDropdown && (
        <div 
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto"
        >
          {/* Regular suggestions */}
          {suggestions.map((suggestion, index) => {
            const [city, state] = suggestion.split(', ');
            return (
              <div
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`px-4 py-3 cursor-pointer transition-colors hover:bg-orange-50 border-b border-gray-100 last:border-b-0 ${
                  index === activeSuggestion ? 'bg-orange-50' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 text-orange-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{city}</p>
                    <p className="text-xs text-gray-500 truncate">{state}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Unknown place suggestions */}
          {showUnknownPlaceOption && unknownPlaceSuggestions.length > 0 && (
            <>
              {suggestions.length > 0 && (
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <AlertCircle className="h-3 w-3" />
                    <span>Place not found? Try these options:</span>
                  </div>
                </div>
              )}
              {unknownPlaceSuggestions.map((suggestion, index) => {
                const globalIndex = suggestions.length + index;
                const [city, state] = suggestion.split(', ');
                return (
                  <div
                    key={`unknown-${suggestion}`}
                    onClick={() => handleCustomPlaceAdd(suggestion)}
                    className={`px-4 py-3 cursor-pointer transition-colors hover:bg-blue-50 border-b border-gray-100 last:border-b-0 ${
                      globalIndex === activeSuggestion ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Plus className="h-3 w-3 text-blue-500 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{city}</p>
                        <p className="text-xs text-blue-500 truncate">Add as: {state}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Custom input option */}
              <div
                onClick={() => handleCustomPlaceAdd(value + ", India")}
                className={`px-4 py-3 cursor-pointer transition-colors hover:bg-green-50 border-b border-gray-100 last:border-b-0 ${
                  (suggestions.length + unknownPlaceSuggestions.length) === activeSuggestion ? 'bg-green-50' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Plus className="h-3 w-3 text-green-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Use "{value}" as entered</p>
                    <p className="text-xs text-green-500 truncate">Custom location</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PlaceAutosuggest;
