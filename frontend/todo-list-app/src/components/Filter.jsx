import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <button
        className={`px-3 py-1 rounded-full transition-colors duration-300 ${filter === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded-full transition-colors duration-300 ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`px-3 py-1 rounded-full transition-colors duration-300 ${filter === 'pending' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;

