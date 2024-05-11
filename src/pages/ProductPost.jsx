import React from 'react'

const ProductPost = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full sm:w-96'>
        <div className='h-48'></div>
        <p className='mb-2 mt-4'>Product Name</p>
        <input type="text" name="product-name" id="product-name" className='w-full box-border border border-slate-400 rounded p-1' />
        <p className='mb-2 mt-4'>Category</p>
        <select name="product-category" id="product-category" className='w-full box-border border border-slate-400 rounded p-1'></select>
        <p className='mb-2 mt-4'>Price</p>
        <input type="text" name="product-price" id="product-price" className='w-full box-border border border-slate-400 rounded p-1' />
        <p className='mb-2 mt-4'>Description</p>
        <textarea name="product-description" id="product-description" className='w-full h-32 box-border border border-slate-400 rounded p-1'></textarea>
        <br />
        <input className='bg-indigo-500 text-white rounded mt-6 h-8 w-28 block mx-auto text-xs' type="submit" value="Post Product" />
      </div>
    </div>
  )
}

export default ProductPost
