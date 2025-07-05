import React from 'react'
import Link from 'next/link';
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { PiBriefcaseLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6"; 
function Admin() {
  return (
     <>
        <div >
             <div className='fixed w-[94px] bg-[#f6f6f6] h-[100vh] p-4'>
                <div>
                    <img src="/images/admin-logo.png" alt="" width={94} height={86} />
                </div>
                <div>
                    <ul>
                        <li className='mb-3'>
                           <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                               <GoHome className=' mx-auto' />
                          </Link>
                        </li>
                        <li className='mb-3'>
                           <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                               <RxDashboard  className=' mx-auto' />
                          </Link>
                        </li>
                        <li className='mb-3'>
                           <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                               <BsCart2   className=' mx-auto' />
                          </Link>
                        </li>
                           <li className='mb-3'>
                              <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                                  <IoGiftOutline   className=' mx-auto' />
                              </Link>
                            </li>
                               <li className='mb-3'>
                              <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                                  <PiBriefcaseLight   className=' mx-auto' />
                              </Link>
                            </li> 
                               <li className='mb-3'>
                              <Link href="/" className='bg-white text-black hover:bg-black hover:text-white flex items-center h-[54px] w-[54px] rounded-full text-2xl'>
                                  <FaRegUser   className=' mx-auto' />
                              </Link>
                            </li>
                    </ul>
                </div>
             </div>
             <div className='ms-[104px] me-2 '>
                 <div>sacxAxzX</div>
                 <div className='flex pt-4'>
                      <div>
                          <h1 className='text-4xl me-4 font-semibold'>Your Report<br/>Analysis</h1>
                     </div>
                     <div>
                      ZXZC
                     </div>
                 </div>
                 <div className='flex gap-x-4 pt-4'>
                        <div className='group  w-1/3 text-black rounded-2xl bg-[#EAEAEA] hover:bg-black hover:text-white p-4 text-xl flex '>
                              <div>
                                  <p className='pb-4'>
                                       New Donars vs Old Donars
                                  </p>
                                  <p className='pb-2'>
                                     Comparison
                                  </p>
                                  <h4 className='text-4xl font-semibold mb-2'>10k New Ones</h4>
                                  <p className='flex items-center'>
                                    <FaArrowTrendUp className='me-2' /> + 0.95% This Week
                                  </p>
                              </div> 
                                 <div className='ms-auto flex flex-col justify-start'>
                                    <Link href="/" className='ms-auto mb-4'>
                                        <img src="/images/btn-icon-up-arrow.svg" alt="" />
                                    </Link> 
                                     <img src="/images/img-bar-arrow-gray.svg" alt="" className='block group-hover:hidden' />
                                     <img src="/images/img-bar-arrow-white.svg" alt="" className="hidden group-hover:block" />
                                 </div>
                        </div>
                       <div className='w-1/3 text-black rounded-2xl bg-[#EAEAEA] hover:bg-black hover:text-white p-4 text-xl flex '>
                              <div>
                                  <p className='pb-4'>
                                     Average Donation Value
                                  </p>
                                  <p className='pb-2 font-semibold'>
                                     Average amount donated per donor this month
                                  </p>
                                  <h4 className='text-4xl font-semibold mb-2'>₹5,000</h4> 
                              </div> 
                                 <div className='ms-auto flex flex-col justify-start'>
                                    <Link href="/" className='ms-auto mb-4'>
                                        <img src="/images/btn-icon-up-arrow.svg" alt="" />
                                    </Link>  
                                 </div>
                        </div>
                                              <div className='group  w-1/3 text-black rounded-2xl bg-[#EAEAEA] hover:bg-black hover:text-white p-4 text-xl flex '>
                              <div>
                                  <p className='pb-4'>
                                      Peak Donation Day
                                  </p>
                                  <p className='pb-2 font-semibold'>
                                     Most generous day this month
                                  </p>
                                  <h4 className='text-4xl font-semibold mb-2'>June 15 - ₹20k</h4>
                                  <p className='flex items-center'>
                                    <FaArrowTrendUp className='me-2' />  + 300% Higher than average donations
                                  </p>
                              </div> 
                                 <div className='ms-auto flex flex-col justify-start'>
                                    <Link href="/" className='ms-auto mb-4'>
                                        <img src="/images/btn-icon-up-arrow.svg" alt="" />
                                    </Link>  
                                 </div>
                        </div>
                 </div>
                 <div className='flex gap-x-4 pt-4'>
                        <div className='group  w-1/2 text-black rounded-2xl bg-[#EAEAEA] hover:bg-black hover:text-white p-4 text-xl '>
                            <div className='flex'>
                                  <div>
                                        <div className='font-semibold'>
                                             Donars Statistics
                                        </div>
                                         Total view per month
                                  </div>
                                  <div className='ms-auto'>
                                        <span>Monthly</span>
                                  </div>
                            </div>
                        </div>
                        <div className='group  w-1/2 text-black rounded-2xl bg-[#EAEAEA] hover:bg-black hover:text-white p-4 text-xl flex '>
                          sdvnsbcvsc
                        </div>
                 </div>
             </div>
        </div>
     </>
  )
}

export default Admin
