import React, { useContext, useState } from 'react';
import { StoreContext } from './StoreContent';

const Store = () => {
  const { stores } = useContext(StoreContext);
  const [filter, setFilter] = useState('newest');

  const getFilteredStores = () => {
    switch (filter) {
      case 'newest':
        return stores.slice().sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
      case 'oldest':
        return stores.slice().sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
      case 'subscribed':
        return stores.filter(store => store.subscribed);
      case 'inactive':
        return stores.filter(store => !store.subscribed);
      default:
        return stores;
    }
  };

  const filteredStores = getFilteredStores();

  return (
    <div>
      <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 1</div>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 2</div>
        <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 3</div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Store Dashboard</h2>
        <div className="mb-4">
          <button
            className={`px-4 py-2 mr-2 rounded ${filter === 'newest' ? 'bg-purple-700 text-white' : 'bg-gray-200'} hover:bg-purple-500 hover:text-white`}
            onClick={() => setFilter('newest')}
          >
            Newest
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded ${filter === 'oldest' ? 'bg-purple-700 text-white' : 'bg-gray-200'} hover:bg-purple-500 hover:text-white`}
            onClick={() => setFilter('oldest')}
          >
            Oldest
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded ${filter === 'subscribed' ? 'bg-purple-700 text-white' : 'bg-gray-200'} hover:bg-purple-500 hover:text-white`}
            onClick={() => setFilter('subscribed')}
          >
            Subscribed
          </button>
          <button
            className={`px-4 py-2 rounded ${filter === 'inactive' ? 'bg-purple-700 text-white' : 'bg-gray-200'} hover:bg-purple-500 hover:text-white`}
            onClick={() => setFilter('inactive')}
          >
            Inactive
          </button>
        </div>
        {filteredStores.length === 0 ? (
          <p>No stores found.</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Store Name</th>
                <th className="py-2">Address</th>
                <th className="py-2">Subscribed</th>
                <th className="py-2">Date Created</th>
                <th className="py-2">Number of Sales</th>
              </tr>
            </thead>
            <tbody>
              {filteredStores.map((store, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="py-2">{store.name}</td>
                  <td className="py-2">{store.address}</td>
                  <td className="py-2">{store.subscribed ? 'Yes' : 'No'}</td>
                  <td className="py-2">{store.dateCreated}</td>
                  <td className="py-2">{store.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Store;
