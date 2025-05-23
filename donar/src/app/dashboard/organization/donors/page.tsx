 'use client'

import { DataTable } from './payment-page/data-table'
import { columns } from './payment-page/columns' 
import { useEffect, useState } from 'react'
import {
  Cloud,
  CreditCard,
  GiftIcon,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  SunIcon,
  User,
  UserPlus,
  Users,
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DonationItem = {
"Donation Number":String,
"Donation Status" :String,
"Donation Date" :String,
"Donor Name" :String,
"Birthday" :String,
"PAN" :String,
"Complete Address":String,
"State Name":String,
"City" :String,
"Postcode":String,
"Email":String,
"Mobile Number":String,
"Item Name":String,
"Transaction ID":String,
"Payment Method Title":String,
"Order Total Amount":String,
"Settlement amount":String,
"settlement date":String
};

function Donors() {
      const [payments, setPayments] = useState([]) 
  
  useEffect(() => {
    fetch('/api/payments')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.result.map((item: DonationItem) => ({
          donationNumber: item["Donation Number"],
          donationStatus: item["Donation Status"],
          donationDate: item["Donation Date"],
          donorName: item["Donor Name"],
          city: item["City"],
          email: item["Email"],
          mobileNumber: item["Mobile Number"],
          itemName: item["Item Name"],
          transactionId: item["Transaction ID"],
          orderTotalAmount: item["Order Total Amount"],
        }))
        setPayments(formatted)
      })
  }, []) 
  return (
     <>
      <div className='p-4 text-end'>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          +
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56"> 
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SunIcon />
            <span>Send Blessing</span> 
          </DropdownMenuItem> 
        </DropdownMenuGroup> 
          <DropdownMenuGroup>
          <DropdownMenuItem>
            <GiftIcon />
            <span>Send Gifts</span> 
          </DropdownMenuItem> 
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
      <div className='px-4'>
          <DataTable  columns={columns} data={payments} />
      </div>
     </>
  )
}

export default Donors
