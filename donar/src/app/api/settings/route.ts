// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDBSettings } from '../../../lib/mongodb';
import { getSettingModel } from '../../../lib/models/Setting';

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDBSettings();
    const Setting = getSettingModel(conn);
    const settings = await Setting.find();
    return NextResponse.json(settings, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching settings:', error);
    return NextResponse.json({ message: 'Failed to fetch settings' }, { status: 500 });
  }
}
