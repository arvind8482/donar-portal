// app/api/payments/route.ts
import { connectToDBPayments } from '../../../lib/mongodb';
import { getPaymentModel } from '../../../lib/models/Payment';

export async function GET() {
  try {
    const conn = await connectToDBPayments();
    const Payment = getPaymentModel(conn);

    const payments = await Payment.find();
    return new Response(JSON.stringify(payments), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch payments' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
