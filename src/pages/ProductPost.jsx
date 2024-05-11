import React from 'react'

const ProductPost = () => {
  return (
    <div className='flex justify-center'>
      <div className=''>
        <div className='h-48'></div>
        <p className='mb-2 mt-4'>Product Name</p>
        <input type="text" name="product-name" id="product-name" className='' />
        <p className='mb-2 mt-4'>Category</p>
        <select name="product-category" id="product-category"></select>
        <p className='mb-2 mt-4'>Price</p>
        <input type="text" name="product-price" id="product-price" />
        <p className='mb-2 mt-4'>Description</p>
        <textarea name="product-description" id="product-description"></textarea>
        <br />
        <input className='bg-blue-500 rounded-lg border-neutral-500' type="submit" value="Post Product" />
      </div>
    </div>
  )
}

export default ProductPost
