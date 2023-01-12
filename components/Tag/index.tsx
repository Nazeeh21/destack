import React from "react";

interface tagProps {
  children: React.ReactNode
}

const Tag = ({ children, ...props }: tagProps) => {
  return (
    <span
      {...props}
      className="inline-block bg-highlight text-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    >
      {children}
    </span>
  )
}
export default Tag