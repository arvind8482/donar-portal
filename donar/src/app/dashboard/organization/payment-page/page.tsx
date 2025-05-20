 'use client'

import { DataTable } from './data-table'
import { columns } from './columns' 
import { useEffect, useState } from 'react'

export default function Page() {
    const [payments, setPayments] = useState([]) 

  useEffect(() => {
    fetch('/api/payments') // or use static mock data
      .then((res) => res.json())
      .then((data) => setPayments(data))
  }, [])

  return   (
    <DataTable  columns={columns} data={payments} />
  )
}
