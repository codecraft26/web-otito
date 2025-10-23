import { NextResponse } from 'next/server';

export async function GET() {
  const appAdsContent = `google.com, pub-1691544452951893, DIRECT, f08c47fec0942fa0`;

  return new NextResponse(appAdsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
