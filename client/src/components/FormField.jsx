import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#ffffff] uppercase"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#343541] py-1 px-2 rounded-[5px] text-gray-500 hover:bg-[#454654]"
        >
          Surprise Me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-[#141516] border-[#343541] text-[#ffffff] text-sm rounded-lg 
      focus:ring-[#29DC75] focus:border-[#29DC75] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
