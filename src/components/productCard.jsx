import React from 'react'

const ProductCard = ({productName, shopName, price}) => {
  return (
    <div>
      <div className="rounded-sm border-solid w-auto m-2">
        <div className="left">
          {/*<img src="" alt="" /> Product img*/}
          <img src="https://images.unsplash.com/photo-1695048401313-d7153c37d6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
        </div>
        <div className="text-center">
          <h1>{productName}</h1>
          <p>{shopName}</p>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductCard