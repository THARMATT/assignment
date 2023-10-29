import React from 'react'

function Button({ text, onClick }) {
  return (
    <button className="bg-red-500 text-white py-2 px-4 rounded">
      {text}
    </button>
  )
}

export default Button
