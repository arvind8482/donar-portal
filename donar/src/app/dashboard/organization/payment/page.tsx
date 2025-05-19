'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PaymentsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/payments')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="p-6">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Donation Number</TableHead>
            <TableHead>Donation Status</TableHead>
            <TableHead>Donation Date</TableHead>
            <TableHead >Donor Name</TableHead>
            <TableHead >Birthday</TableHead>
            <TableHead>PAN</TableHead>
            <TableHead>Complete Address</TableHead>
            <TableHead >State Name</TableHead>
            <TableHead >City</TableHead>
            <TableHead>Postcode</TableHead>
            <TableHead>Email</TableHead>
            <TableHead >Mobile Number</TableHead>
            <TableHead >Item Name</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Payment Method Title</TableHead>
            <TableHead >Order Total Amount</TableHead>
            <TableHead >Settlement amount</TableHead>
            <TableHead>settlement date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell >{user['Donation Number']}</TableCell>
              <TableCell>{user['Donation Status']}</TableCell>
              <TableCell>{user['Donation Date']}</TableCell>
              <TableCell >{user['Donor Name']}</TableCell>
              <TableCell >{user['Birthday']}</TableCell>
              <TableCell>{user['PAN']}</TableCell>
              <TableCell>{user['Complete Address']}</TableCell>
              <TableCell >{user['State Name']}</TableCell>
              <TableCell >{user['City']}</TableCell>
              <TableCell>{user['Postcode']}</TableCell>
              <TableCell>{user['Email']}</TableCell>
              <TableCell >{user['Mobile Number']}</TableCell>
              <TableCell >{user['Item Name']}</TableCell>
              <TableCell>{user['Transaction ID']}</TableCell>
              <TableCell>{user['Payment Method Title']}</TableCell>
              <TableCell >{user['Order Total Amount']}</TableCell>
              <TableCell >{user['Settlement amount']}</TableCell>
              <TableCell>{user['settlement date']}</TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </div>
  );
}
