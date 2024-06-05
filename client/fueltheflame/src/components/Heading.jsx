import React from 'react'

const Heading = ({ className, title}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12`}>
        {title && <h2>{title}</h2>}
    </div>
  )
}

export default Heading