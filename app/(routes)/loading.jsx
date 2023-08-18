import React from 'react'

const loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full h-full bg-black glass-effect "></div>
        <div className="relative text-3xl font-bold text-neutral-500">Loading...</div>
    </div>
  )
}

export default loading