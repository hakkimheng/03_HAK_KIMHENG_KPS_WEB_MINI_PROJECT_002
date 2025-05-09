import { useState } from "react";

const DropDownTagComponent = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || null);
  const options = ["DESIGN", "HOMEWORK", "ASSIGNMENT", "DEPLOYMENT", "GIT", "DATABASE", "MINI_PROJECT", "DOCUMENTATION", "FEATURE"];
  const selectOption = (option) => {
    setSelectedOption(option);
    onChange(option);
    setOpen(false);
  };
  return (
    <div className="max-w-md mx-auto relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <span className="block truncate">
          {selectedOption ? selectedOption : "Select an option"}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => selectOption(option)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
            >
              <span className={`block truncate ${selectedOption === option ? "font-semibold" : ""}`}>
                {option}
              </span>
              {selectedOption === option && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownTagComponent;
