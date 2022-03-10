import React from 'react'

export default function Button({ text, ...props }) {
  console.log(props)
  return (
    <button {...props} className="relative bg-gray-500 text-white p-3 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible">
      {text}
      <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-yellow-500 rounded-full text-xs">1</div>
    </button>
  )
}
