 'use client'

import { DataTable } from './data-table'
import { columns } from './columns' 
import { useEffect, useState } from 'react'

type DonationItem = {
  "Donation Number": string;
  "Donation Status": string;
  "Donation Date": string;
  "Donor Name": string;
  "City": string;
  "Email": string;
  "Mobile Number": string;
  "Item Name": string;
  "Transaction ID": string;
  "Order Total Amount": string;
};

export default function Page() {
    const [payments, setPayments] = useState([]) 

useEffect(() => {
  fetch('/api/payments')
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.map((item: DonationItem) => ({
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


  return   (
    <DataTable  columns={columns} data={payments} />
  )
}
