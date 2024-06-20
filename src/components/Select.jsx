import React from 'react';

const Select = ({ value, onChange, place }) => {
    const calidadOptions = [200, 250, 300, 350];

    return (
        <div>
            <label className="block text-sm font-medium text-gray-900">{place}</label>
            <select 
                value={value} 
                onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)} 
                className="bg-gray-50 mt-1 block w-full pl-3 py-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-blue-500 rounded-lg"
            >
                <option value="">Selecciona una opción</option>
                {calidadOptions.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

