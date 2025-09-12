import React from 'react'

const buttonVariant = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full sm:w-auto transition-colors duration-200",
  secondary: "border-2 bg-primary-100/50 hover:bg-primary-600 hover:text-white border-primary-600 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full sm:w-auto transition-all duration-200",
}

const ShineButton = ({ text, variant = "primary", className = "", ...props }) => {
  return (
    <button
      className={`btn-shine ${className} ${variant === "primary" ? buttonVariant[variant] : buttonVariant["secondary"]}`}
      {...props}
    >
      {text}
  </button>
  )
}

export default ShineButton