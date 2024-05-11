import React from 'react'

const ProductPost = () => {
  return (
    <div className='text-blue bg-red-500'>
      {/*トップページをここに記述 */}
      <div className='product-img'></div>
      <p className='product-name'>Product Name</p>
      <input type="text" name="product-name" id="product-name" />
      <p className='product-category'>Category</p>
      <select name="product-category" id="product-category"></select>
      <p className='product-price'>Price</p>
      <input type="text" name="product-price" id="product-price" />
      <p className='product-description'>Description</p>
      <textarea name="product-description" id="product-description"></textarea>
      <input className='post-product' type="submit" value="Post Product" />
    </div>
  )
}

export default ProductPost
