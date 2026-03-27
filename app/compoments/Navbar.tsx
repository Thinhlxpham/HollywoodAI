import Image from 'next/image'
import React from 'react'

function Navbar(){
  return (
    <div className="w-full h-full">
      <Image src="/assets/logo-light.png" alt="logo"  width={140} height={40} />
    </div>
  )
}

export default Navbar