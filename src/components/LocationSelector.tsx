
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PlaceAutosuggest from './PlaceAutosuggest';

interface LocationSelectorProps {
  country: string;
  state: string;
  city: string;
  onCountryChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

const countries = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "other", label: "Other" }
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh", 
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Jammu and Kashmir",
  "Ladakh",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Puducherry"
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const LocationSelector = ({ 
  country, 
  state, 
  city, 
  onCountryChange, 
  onStateChange, 
  onCityChange 
}: LocationSelectorProps) => {
  const [availableStates, setAvailableStates] = useState<string[]>([]);

  useEffect(() => {
    switch (country) {
      case "india":
        setAvailableStates(indianStates);
        break;
      case "usa":
        setAvailableStates(usStates);
        break;
      default:
        setAvailableStates([]);
    }
    // Reset state and city when country changes
    if (state) onStateChange("");
    if (city) onCityChange("");
  }, [country]);

  useEffect(() => {
    // Reset city when state changes
    if (city) onCityChange("");
  }, [state]);

  const getStatesForCountry = () => {
    return availableStates;
  };

  return (
    <div className="space-y-4">
      {/* Country Selection */}
      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country</Label>
        <Select value={country} onValueChange={onCountryChange}>
          <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {countries.map((countryOption) => (
              <SelectItem 
                key={countryOption.value} 
                value={countryOption.value}
                className="cursor-pointer hover:bg-gray-100 px-3 py-2"
              >
                {countryOption.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* State Selection */}
      {country && availableStates.length > 0 && (
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm font-medium text-gray-700">State/Province</Label>
          <Select value={state} onValueChange={onStateChange}>
            <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg">
              <SelectValue placeholder="Select state/province" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {getStatesForCountry().map((stateOption) => (
                <SelectItem 
                  key={stateOption} 
                  value={stateOption}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                >
                  {stateOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* City/Place Selection */}
      {state && (
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            City/Exact Place
          </Label>
          {country === "india" ? (
            <PlaceAutosuggest
              id="city"
              placeholder="Start typing your city name..."
              value={city}
              onChange={onCityChange}
              className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg pr-10"
            />
          ) : (
            <input
              id="city"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              className="w-full h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg px-3"
            />
          )}
          <p className="text-xs text-gray-500 mt-1">
            🌍 Exact location needed for precise astronomical calculations
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
