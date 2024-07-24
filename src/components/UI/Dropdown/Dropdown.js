import { useState, useEffect, useRef } from 'react';

const Dropdown = ({
  options,
  className,
  dropdownListClassName,
  fullWidth,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target.id !== 'dropdown-btn') {
          setIsOpen(false);
        }
        // setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false); // Close the dropdown when an option is clicked
  };

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        id="dropdown-btn"
        className={`bg-black font-bold text-sm font-SamsungOne text-white py-2.5 px-6 rounded-full shadow-lg hover:bg-[#555] hover:text-[#eee] ${className ? className : ''}`}
      >
        {title ? title : 'Select an option'}
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute shadow-lg rounded-md overflow-hidden z-10 ${
            fullWidth ? 'w-screen' : 'w-full'
          } ${dropdownListClassName ? dropdownListClassName : ''}`}
          style={
            fullWidth
              ? { top: `40px`, right: '-1rem' }
              : { top: `40px`, left: `0px` }
          }
        >
          <button
            className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={handleOptionClick}
            >
              {option.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
