import React from 'react'

// const ShimmerText = ({ text, primaryColor, shimmerColor, classList = "" }) => {
  const ShimmerText = ({ text, classList = "" }) => {
  return (
    <span
    // className={`relative inline-block font-semibold text-lg whitespace-nowrap animate-shine ${className}`}
      // style={{
      //   backgroundImage: 'linear-gradient(90deg, #9ca3af 0%, #ffffff 50%, #9ca3af 100%)',
      //   backgroundSize: '200% 100%',
      //   WebkitBackgroundClip: 'text',
      //   WebkitTextFillColor: 'transparent',
      //   backgroundClip: 'text'
      // }}
      // className={` 
      //   bg-gradient-to-r from-${primaryColor} via-${primaryColor} to-${shimmerColor}
      //   bg-[length:200%_200%] bg-clip-text text-transparent 
      //   animate-shine ${classList}`}  
    className={`${classList}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, var(--color-primary-100) 0%,rgb(196, 190, 190) 30%, var(--color-primary-100) 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'text-shine 3s ease-in-out infinite'
      }}
    >
      {text}
    </span>
  )
}

export default ShimmerText