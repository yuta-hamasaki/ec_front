import React from 'react'

const Button = ({value}) => {
  return (
    <div>
      <input className='bg-indigo-500 hover:bg-indigo-400 hover:cursor-pointer text-white rounded mt-8 h-12 w-full sm:w-36 block mx-auto text-sm' type="submit" value={value} />
    </div>
  )
}

export default Button
