import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ status: 'ok', message: 'Safal Infosoft API' });
}

export async function POST(request) {
  return NextResponse.json({ status: 'ok', message: 'Safal Infosoft API' });
}
