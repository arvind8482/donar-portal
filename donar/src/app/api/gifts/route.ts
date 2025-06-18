// app/api/gifts/route.ts
import { getGiftModel } from '../../../lib/models/Gift';
import { connectToDBGifts } from '../../../lib/mongodb';

export async function GET() {
  try {
    const conn = await connectToDBGifts();
    console.log("Gift DB Connection Established");

    const Gift = getGiftModel(conn);

    const gifts = await Gift.find().populate('donorId').populate('organizationId');

    return new Response(JSON.stringify(gifts), { status: 200 });
  } catch (error: any) {
    console.error("GET gifts error:", error.message);
    return new Response("Failed to fetch gifts: " + error.message, { status: 500 });
  }
}
