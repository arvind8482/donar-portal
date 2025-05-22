 'use client'

import { DataTable } from './data-table'
import { columns } from './columns' 
import { useEffect, useState } from 'react'

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

export default function Page() {
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
console.log(payments);

  return   (
    <DataTable  columns={columns} data={payments} />
  )
}
