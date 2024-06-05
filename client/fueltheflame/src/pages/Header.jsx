  import React from 'react'

  const Header = ({title}) => {
    return (
      <div className='flex flex-col items-center justify-center'>
          <div className='text-white px-[3rem] text-2xl'>{title}</div>
          <img src="/redsplash-v2.png" alt="Red splash" width={120} height={100} />
      </div>
      
    )
  }

  export default Header