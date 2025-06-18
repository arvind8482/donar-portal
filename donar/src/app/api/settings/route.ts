// app/api/settings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDBSettings } from '../../../lib/mongodb';
import { getSettingModel } from '../../../lib/models/Setting';

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDBSettings();
    console.log("Settings DB Connection Established");

    const Setting = getSettingModel(conn);
    const settings = await Setting.find();

    return NextResponse.json(settings, { status: 200 });
  } catch (error: any) {
    console.error('❌ Error fetching settings:', error.message);
    return NextResponse.json(
      { message: 'Failed to fetch settings', error: error.message },
      { status: 500 }
    );
  }
}
