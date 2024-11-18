import React, { useState } from 'react';

interface FlagProps {
  country: string;
}

const Flag: React.FC<FlagProps> = () => {
  const [country, setCountry] = useState('Россия');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
      <p className="text-lg font-bold mb-2">{country}</p>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
      />
    </div>
  );
};

export default Flag;