import React, { useState, useRef } from 'react';
import { Search, Mic, Camera, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Google } from './icons';
import config from './config';

function Question() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseQuery = searchQuery.trim().toLowerCase();

    if (config.correctSearchQueries.some(query => lowerCaseQuery === query.toLowerCase())) {
      navigate(config.timerRedirectPath);
    } else {
      navigate(config.questionRedirectPath);
    }
  };

  const handleFocusClick = () => {
    setIsInputFocused(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white flex justify-center px-4 pt-16">
      {!isInputFocused ? (
        <div className="flex flex-col items-center w-full max-w-[600px]">
          <div className="mb-8">
            <Google />
          </div>
          <form
            onSubmit={handleSearch}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-[#303134] border border-[#5f6368] focus-within:border-[#8ab4f8]"
            onClick={handleFocusClick}
          >
            <Search className="w-5 h-5 text-[#9aa0a6]" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent outline-none cursor-text"
              placeholder={config.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch(e);
              }}
            />
            <Mic className="w-5 h-5 text-[#8ab4f8]" />
            <Camera className="w-5 h-5 text-[#8ab4f8]" />
            {/* Invisible submit button for accessibility */}
            <button type="submit" className="sr-only">Submit</button>
          </form>

          <div className="mt-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl">{config.trendingTitle}</h2>
              <button
                type="button"
                className="p-2"
                onClick={() => {
                  setSearchQuery(config.trendingSearches[0]);
                  setIsInputFocused(true);
                  setTimeout(() => inputRef.current?.focus(), 100);
                }}
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {config.trendingSearches.map((trend) => (
                <div key={trend} className="flex items-center gap-3 py-2">
                  <Search className="w-5 h-5 text-[#9aa0a6]" />
                  <span>{trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Focused Input View with Keyboard
        <div className="flex flex-col min-h-screen w-full max-w-[480px] mx-auto">
          <form onSubmit={handleSearch} className="border-b border-[#5f6368] flex items-center gap-3 px-4 py-3">
            <button
              type="button"
              onClick={() => setIsInputFocused(false)}
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5 text-[#8ab4f8]" />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              autoFocus
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch(e);
              }}
            />
            <Mic className="w-5 h-5 text-[#8ab4f8]" />
            <Camera className="w-5 h-5 text-[#8ab4f8]" />
            {/* Invisible submit button for accessibility */}
            <button type="submit" className="sr-only">Submit</button>
          </form>
          <div className="mt-10 px-5 text-white/50">
            <p>{config.proTip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
