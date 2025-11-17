import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <nav
      className="px-4 md:px-6 lg:px-8 py-4 sticky top-0 z-50"
      style={{
        background:
          'linear-gradient(to right, #E8FCFF, #FCF8F0, #E6EBFE, #D9E8FF)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="CredPal Logo" className="h-6 md:h-7" />
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#"
            className="text-[#0A2540] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium"
          >
            Products
          </a>
          <a
            href="#"
            className="text-[#0A2540] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium"
          >
            Business
          </a>
          <a
            href="#"
            className="text-[#0A2540] hover:text-[#0A2540]/80 transition-colors text-sm lg:text-base font-medium"
          >
            Shop
          </a>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-white/50 transition-colors"
            >
              <span className="text-xl">{selectedCountry.flag}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-[#0A2540] transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                      selectedCountry.code === country.code ? 'bg-blue-50' : ''
                    }`}
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="text-sm text-gray-700">
                      {country.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-black  text-white px-4 md:px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors font-medium text-sm md:text-base shadow-md hover:shadow-lg">
            Get the App
          </button>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
