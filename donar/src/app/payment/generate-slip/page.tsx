"use client"

import React from 'react'

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { format } from 'date-fns';
import { CalendarIcon, Mars, Venus, Ban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover" 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function GenrateSlip() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [enabled, setEnabled] = React.useState(false)

    return (
        <>
            <section className='h-[100vh] w-full  bg-[#000] flex items-center'>
                <div className="container mx-auto flex">
                    <div className='bg-white p-[32px] w-full xl:w-1/2 xl:rounded-s-xl'>
                        <div>
                            <h2 className='text-3xl font-semibold text-[#F0AB50] uppercase py-4 flex items-center text-center justify-center mb-0 pb-0'>Generate&nbsp;<span className='text-[#454545]'>PayMENT</span> Slip <img src="/images/img-cart.png" alt="donation details" title="donation details" width={39} height={45} className='ms-2' /></h2>
                            <p className='text-center'>
                                Dear Devotee, to complete your donation please fill the below mentioned details
                            </p>
                            <div className='mt-4 flex flex-col xl:flex-row gap-4'>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="name">Name :</label>
                                    <div className='border-2 border-amber-600  rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-fname.svg" alt="" />
                                        <input type="text" id='name' placeholder='Full Name' className='border-0 mx-2 outline-0 flex-1' />
                                        <img src="/images/icon-edit.svg" alt="" />
                                    </div>

                                </div>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="billing">Billing Email ID :</label>
                                    <div className='border-2 border-[#676767]  rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-billing-email.svg" alt="" />
                                        <input type="text" id='name' placeholder='anand18mehra@gmail.com' className='border-0 mx-2 outline-0 flex-1' />
                                        <img src="/images/icon-edit.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row gap-4'>
                                <div className='w-full mb-2'>
                                    <label className='font-medium' htmlFor="whatsapp">Complete Address :</label>
                                    <div className='border-2 border-[#676767] rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-whatsapp.svg" alt="" />
                                        <input type="text" id='whatsapp' placeholder='Permanent Address' className='border-0 mx-2 outline-0 flex-1' />
                                        <img src="/images/icon-edit.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row gap-4'>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="whatsapp">Whatsapp Number :</label>
                                    <div className='border-2 border-[#676767] rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-whatsapp.svg" alt="" />
                                        <input type="text" id='whatsapp' placeholder='Phone Number' className='border-0 mx-2 outline-0 flex-1' />
                                        <img src="/images/icon-edit.svg" alt="" />
                                    </div>
                                </div>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="State">State :</label>
                                    <div className='border-2 border-[#676767]  rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-state.svg" alt="" />
                                         <Select id="State" className="text-lg flex-1 outline-0 border-0 drop-shadow-0">
  <SelectTrigger className="flex-1 border-0 text-lg">
    <SelectValue placeholder="Select your state" />
  </SelectTrigger>
  <SelectContent className='bg-white text-lg'>
    <SelectGroup>
      <SelectLabel>Indian States</SelectLabel>
      <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
      <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
      <SelectItem value="Assam">Assam</SelectItem>
      <SelectItem value="Bihar">Bihar</SelectItem>
      <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
      <SelectItem value="Goa">Goa</SelectItem>
      <SelectItem value="Gujarat">Gujarat</SelectItem>
      <SelectItem value="Haryana">Haryana</SelectItem>
      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
      <SelectItem value="Jharkhand">Jharkhand</SelectItem>
      <SelectItem value="Karnataka">Karnataka</SelectItem>
      <SelectItem value="Kerala">Kerala</SelectItem>
      <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
      <SelectItem value="Manipur">Manipur</SelectItem>
      <SelectItem value="Meghalaya">Meghalaya</SelectItem>
      <SelectItem value="Mizoram">Mizoram</SelectItem>
      <SelectItem value="Nagaland">Nagaland</SelectItem>
      <SelectItem value="Odisha">Odisha</SelectItem>
      <SelectItem value="Punjab">Punjab</SelectItem>
      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
      <SelectItem value="Sikkim">Sikkim</SelectItem>
      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
      <SelectItem value="Telangana">Telangana</SelectItem>
      <SelectItem value="Tripura">Tripura</SelectItem>
      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
      <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
      <SelectItem value="West Bengal">West Bengal</SelectItem>
      <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
      <SelectItem value="Chandigarh">Chandigarh</SelectItem>
      <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
      <SelectItem value="Delhi">Delhi</SelectItem>
      <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
      <SelectItem value="Ladakh">Ladakh</SelectItem>
      <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
      <SelectItem value="Puducherry">Puducherry</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
 
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row gap-4'>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="pincode">Pincode :</label>
                                    <div className='border-2 border-[#676767] rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-pincode.svg" alt="" />
                                        <input type="text" id='pincode' placeholder='Your Pincode' className='border-0 mx-2 outline-0 flex-1' />
                                        <img src="/images/icon-edit.svg" alt="" />
                                    </div>
                                </div>
                                <div className='xl:w-1/2 w-full mb-2'>
                                    <label className='font-medium' htmlFor="country">Country :</label>
                                    <div className='border-2 border-[#676767]  rounded-sm  p-2 w-full flex' >
                                        <img src="/images/icon-country.svg" alt="" />
                                        <input type="text" id='country' placeholder='INDIA' className='border-0 mx-2 outline-0 flex-1' />
                                        {/* <img src="/images/icon-edit.svg" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row'>
                                <div className='mb-2'>
                                    <div className=' flex' >
                                        <input type="checkbox" id='80g' className="me-2 appearance-none w-5 h-5 border-2 border-[#F0AB50] checked:bg-[#F0AB50] checked:border-transparent rounded-sm"
                                        /> <span>Need an 80G receipt? Check the box to enter details.</span>
                                    </div>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <label htmlFor="feedback">Feedback (optional)</label>
                                <textarea name="Feedback" id="Feedback" rows={5} className='border-2 border-[#676767]  rounded-sm  p-2 w-full flex'></textarea>
                            </div>
                            <div className='p-4 text-center'>
                                <input type="submit" value="SUBMIT DETAILS" className='bg-[#DA4F46] text-white rounded-sm  py-3 px-10 shadow-xl' />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 rounded-e-xl p-[32px] bg-[url(/images/reciept-bg.png)] bg-cover bg-center flex items-center justify-center flex-col'>
                        <img src="/images/receipt-logo.png" alt="" className='h-[140px]' />
                        <h3 className='text-4xl text-center text-white font-medium text-shadow-lg my-4'>
                            "Your kindness today can change a life forever—donate now and make a difference!"
                        </h3>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="" className='text-xl text-center text-white font-medium text-shadow-lg my-4 uppercase'>Receive blessings of Lord Krishna</label>

                            <SwitchPrimitive.Root checked={enabled}
        onCheckedChange={setEnabled}
                                className="h-[32px] w-[70px] bg-white rounded-full relative cursor-pointer"
                            >

                                <SwitchPrimitive.Thumb
                                    className="bg-[#DA4F46] block size-6 rounded-full drop-shadow-2xl  data-[state=checked]:bg-[#F0AB50] transition-transform
             data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-1"
                                />
                            </SwitchPrimitive.Root>

                        </div>

                         {enabled && (

                             <div  className='w-2/3'>
                              <div>
                            <Label htmlFor="date" className="pb-3 text-white text-xl  text-shadow-lg" >
                                Date of birth / Anniversary date
                            </Label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        id="date"
                                        className=" text-start text-lg text-[#7F7F7F] justify-start bg-white border-white w-full p-6 shadow-inner"
                                    >
                                        <CalendarIcon className="size-6" />
                                        {date ? format(date, "dd/MM/yyyy") : <span>DD/MM/YY</span>}

                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0 bg-white" align="start">
                                    <Calendar
                                        mode="single" className='bg-white'
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpen(false)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className='text-start w-2/3 mt-2'>
                            <div className='pb-2 text-white text-xl  text-shadow-lg'>Gender</div>
                           <div className="flex text-lg text-[#7F7F7F]"> 
  <label htmlFor="male" className="cursor-pointer me-4">
    <input
      type="radio"
      name="gender"
      id="male"
      className="peer hidden"
    />
    <div className="flex items-center px-4 py-2 rounded bg-white 
                    transition-colors peer-checked:bg-[#DA4F46] peer-checked:text-white">
      <Mars className="me-2" />
      <span>Male</span>
    </div>
  </label>
 
  <label htmlFor="female" className="cursor-pointer me-4">
    <input
      type="radio"
      name="gender"
      id="female"
      className="peer hidden"
    />
    <div className="flex items-center px-4 py-2 rounded bg-white 
                    transition-colors peer-checked:bg-[#DA4F46] peer-checked:text-white">
      <Venus className="me-2" />
      <span>Female</span>
    </div>
  </label> 
  <label htmlFor="others" className="cursor-pointer me-4">
    <input
      type="radio"
      name="gender"
      id="others"
      className="peer hidden"
    />
    <div className="flex items-center px-4 py-2 rounded bg-white 
                    transition-colors peer-checked:bg-[#DA4F46] peer-checked:text-white">
      <Ban className="me-2" />
      <span>Others</span>
    </div>
  </label>
</div>


                        </div>
                        </div>
                         )}
                       

                        <img src="/images/img-reciept-rightside.svg" alt="" className='h-[280px]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenrateSlip
