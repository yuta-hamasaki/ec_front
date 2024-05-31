import React from 'react';

const ProductCard = ({ productName, shopName, price }) => {
  return (
    <div className="rounded-lg w-full md:w-1/3 lg:w-1/4 p-4 m-2 shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src="https://source.unsplash.com/random"
          alt="product"
          className="rounded-md w-full h-auto"
        />
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold">{productName}</h1>
          <p className="text-gray-600">{shopName}</p>
          <h3 className="text-green-500 font-semibold">{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
