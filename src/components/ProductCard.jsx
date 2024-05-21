import React from 'react';

const ProductCard = ({ productName, shopName, price }) => {
  return (
    <div className="rounded-lg border border-solid w-full md:w-1/3 lg:w-1/4 p-4 m-2">
      <div className="flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1695048401313-d7153c37d6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
