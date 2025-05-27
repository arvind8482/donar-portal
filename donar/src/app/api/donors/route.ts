// app/api/donors/route.ts
import {getDonarModel} from '../../../lib/models/Donor';
import { connectToDBDonar } from '../../../lib/mongodb';

export async function GET() {
  try { 
const conn = await connectToDBDonar();
    console.log("Connection Established")
const Donar = getDonarModel(conn);

    const donars = await Donar.find();

    return new Response(JSON.stringify(donars), { status: 200 },
  );
  } catch (error: any) {
    console.error("GET donars error:", error.message);
    return new Response("Failed to fetch donars: " + error.message, { status: 500 });
  }
}
