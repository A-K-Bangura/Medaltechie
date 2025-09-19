import React from 'react'

const ShineCard = ({ children, className = "", ...props }) => {
    return (
        <div
          className={`btn-shine relative rounded-xl shadow-md 
            transition-transform duration-100 
            hover:scale-101 overflow-hidden ${className}`}
          {...props}
        >
          {children}
        </div>
      );
}

export default ShineCard