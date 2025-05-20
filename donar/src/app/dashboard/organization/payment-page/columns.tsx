"use client"

import { ColumnDef } from '@tanstack/react-table'  
 import type { Payment } from './types'
        // export  type Payment = {
        //     id: string
        //     "Donation Number": string
        //     "Donation Status": "pending" | "processing" | "success" | "failed"
        //     "Donation Date": string,
        //     "Donor Name": string,
        //     "Birthday": string,
        //     "PAN": string,
        //     "Complete Address": string,
        //     "State Name": string,
        //     "City": string,
        //     "Postcode": string,
        //     "Email": string,
        //     "Mobile Number": string,
        //     "Item Name": string,
        //     "Transaction ID": string,
        //     "Payment Method Title": string,
        //     "Order Total Amount": string,
        //     "Settlement amount": string,
        //     "settlement date": string
        // }

 export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'donationNumber',
    header: 'Donation Number',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'donationStatus',
    header: 'Donation Status',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'donationDate',
    header: 'Donation Date',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'donorName',
    header: 'Donor Name',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'city',
    header: 'City',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'email',
    header: 'Email',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'mobileNumber',
    header: 'Mobile Number',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'itemName',
    header: 'Item Name',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
  {
    accessorKey: 'orderTotalAmount',
    header: 'Order Total Amount',
    enableSorting: true,
    cell: ({ getValue }) => getValue()?.toString() ?? '',
  },
]