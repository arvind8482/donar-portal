// app/api/orgusers/route.ts
import { getOrgUserModel } from '../../../lib/models/OrgUser';
import { connectToDBOrgUsers } from '../../../lib/mongodb';

export async function GET() {
  try {
    const conn = await connectToDBOrgUsers();
    console.log("OrgUser DB Connection Established");

    const OrgUser = getOrgUserModel(conn);

    const orgUsers = await OrgUser.find().populate('organizationId');

    return new Response(JSON.stringify(orgUsers), { status: 200 });
  } catch (error: any) {
    console.error("GET orgUsers error:", error.message);
    return new Response("Failed to fetch orgUsers: " + error.message, { status: 500 });
  }
}
