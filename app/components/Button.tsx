import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>{props.name}
    </button>
  )
}

export default Button   