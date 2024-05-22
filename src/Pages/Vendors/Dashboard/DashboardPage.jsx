import React, { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { StoreProvider } from './StoreContent';
import { Link } from 'react-router-dom';
import Sidebar from './Component/SideBar';
import Store from './Store';
import Product from './Product';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const currentDate = new Date().toLocaleDateString();
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10', profit: 5, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 2, name: 'Product 2', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 3, name: 'Product 3', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 4, name: 'Product 4', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
  ]);

  const buttonsRef = useRef([]);

  const handleDelete = (id) => {
    console.log(`Deleting product with id: ${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleThreeDotsClick = (id) => {
    setProducts(products.map((product) => {
      if (product.id === id) {
        return { ...product, showButtons: !product.showButtons };
      }
      return { ...product, showButtons: false }; // Close other dropdowns
    }));
  };

  const handleClickOutside = (event) => {
    if (buttonsRef.current && !buttonsRef.current.some((ref) => ref && ref.contains(event.target))) {
      setProducts(products.map((product) => ({ ...product, showButtons: false })));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [products]);
  const renderContent = () => {
    switch (activeSection) {
      case 'store':
        return <Store />;
      case 'product':
        return <Product />;
      case 'dashboard':
      default:
        return (
          <div>
            <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
            </div>
            <div className='flex  gap-4 w-full py-5'>
              <div className='w-2/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
            </div>
            <div className="flex flex-col h-screen">
        <header className="py-4 px-6">
          <h1 className="text-2xl font-bold">Recent Order</h1>
        </header>
        <main className="flex bg-[#FAF7FF] p-6 w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className='border-b border-white text-start'>
                <th className="py-2 px-4 text-start">Product Name</th>
                <th className="py-2 px-4 text-start">Item ID</th>
                <th className="py-2 px-4 text-start">Category</th>
                <th className="py-2 px-4 text-start">Date</th>
                <th className="py-2 px-4 text-start">Price</th>
                <th className="py-2 px-4 text-start">Discount</th>
                <th className="py-2 px-4 text-start">Profit</th>
                <th className="py-2 px-4 text-start"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className='border-b border-white '>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">{product.id}</td>
                  <td className="py-2 px-4">{product.category}</td>
                  <td className="py-2 px-4">{product.date}</td>
                  <td className="py-2 px-4">{product.price}</td>
                  <td className="py-2 px-4">{product.discount}</td>
                  <td className="py-2 px-4">{product.profit}</td>
                  <td>
                    <div className="">
                      <div className=" " ref={(el) => (buttonsRef.current[index] = el)}>
                        <button
                          className="p-2 rounded-md font-bold hover:bg-white"
                          onClick={() => handleThreeDotsClick(product.id)}
                        >
                          ...
                        </button>
                        {product.showButtons && (
                          <div className="flex flex-col absolute z-10 w-32 right-0 p-2 gap-2 top-8 bg-white rounded-md">
                            <button
                              className="mr-2 bg-purple-200 p-2 rounded-xl text-purple-700 hover:text-white hover:bg-purple-500"
                              onClick={() => {
                                console.log(`Delete button clicked for product with id: ${product.id}`);
                                handleDelete(product.id);
                              }}
                            >
                               Delete
                            </button>
                            <Link to={""} className="mr-2 bg-purple-200 p-2 rounded-xl text-purple-700 hover:text-white hover:bg-purple-500">Add New</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
          </div>
        );
    }
  };

  return (
    <div className='mx-auto bg-[#FAF7FF] w-full flex '>
      <div className='flex w-full gap-3 '>
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className='w-3/4 px-6 py-4  flex flex-col '>
          <div className='lg:px-10 px-4 py-6  flex justify-between items-center  bg-white rounded-xl'>
            <div className='hidden lg:block'>
              <p>Welcome, Chisom</p>
              <p className='text-gray-500'>{currentDate}</p>
            </div>
            <div className='flex gap-2'>
              <div className='bg-[#FAF7FF] p-2 rounded-full w-8 h-8 flex items-center justify-center'><FaBell className='w-5 h-5 ' /></div>
              <div className=''>
                <p>Chisom Osondu</p>
                <p className='text-gray-500'>Admin</p>
              </div>
              <div className='bg-[#FAF7FF] p-2 rounded-full w-12 h-12'></div>
            </div>
          </div>
          <div className='Display w-full '>
            {renderContent()}
          </div>
        </div>
      </div>

    </div>
  );
};




const DashboardPage = () => (
  <StoreProvider>
    <Dashboard />
  </StoreProvider>
);

export default DashboardPage;
