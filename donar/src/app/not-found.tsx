 import React from 'react'
 import Image from 'next/image'
 
 function Nofound() {
   return (
     <>
        <Image
          src="/images/portal-logo.png"  
          alt="portal logo"
          width={140}                 // Required
          height={140}                // Required
        />
     </>
   )
 }
 
 export default Nofound
 