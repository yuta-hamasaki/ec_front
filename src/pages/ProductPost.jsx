import React from 'react'
import Button from "../components/Button";

const ProductPost = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full sm:w-96 m-2'>
        <input type="file" name="product-img" id="product-img" accept='image/*' className='mt-16 mb-4 mx-auto' />
        <p className='mb-2 mt-4'>Product Name</p>
        <input type="text" name="product-name" id="product-name" className='w-full box-border border border-slate-400 rounded p-1' />
        <p className='mb-2 mt-4'>Category</p>
        <select name="product-category" id="product-category" className='w-full box-border border border-slate-400 rounded p-1'>
          <option value="all" selected>all</option>
          <option value="grocery">grocery</option>
          <option value="book">book</option>
        </select>
        <p className='mb-2 mt-4'>Price</p>
        <input type="text" name="product-price" id="product-price" className='w-full box-border border border-slate-400 rounded p-1' />
        <p className='mb-2 mt-4'>Description</p>
        <textarea name="product-description" id="product-description" className='w-full h-32 box-border border border-slate-400 rounded p-1'></textarea>
        <br />
        <input className='bg-indigo-500 hover:bg-indigo-400 hover:cursor-pointer text-white rounded mt-8 h-12 w-full sm:w-36 block mx-auto text-sm' type="submit" value="Post Product" />
      </div>
      <Button />
    </div>
  )
}

export default ProductPost
