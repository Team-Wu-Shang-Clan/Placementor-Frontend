import React from 'react';

interface FaangCompaniesProps {
  title: string;
  subtitle: string;
}

const FaangCompanies: React.FC<FaangCompaniesProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-green-50 p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-green-700 font-semibold">{title}</h2>
          <p className="text-green-600 text-sm">{subtitle}</p>
        </div>
        <button className="text-purple-600 hover:text-purple-700">
          GUIDEBOOK
        </button>
      </div>
    </div>
  );
};

export default FaangCompanies; 