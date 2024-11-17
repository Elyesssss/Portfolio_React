import React from 'react';

const Blob = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="blob relative w-[600px] h-[600px]">
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-80 blur-lg"></div>
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-80 blur-lg" style={{ left: '200px', top: '100px' }}></div>
          <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-80 blur-lg" style={{ left: '100px', top: '300px' }}></div>
          <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-80 blur-lg" style={{ left: '400px', top: '250px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Blob;