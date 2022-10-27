/*
import { NextRequest, NextResponse } from 'next/server';

// only run middleware on home page
export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest) {
  const country = req.geo?.country?.toLowerCase() || 'us';
  console.log(`country: ${country}`);
  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'en-US';

  // Rewrite the path (`/`) to the localized page (pages/[locale]/[country])
  req.nextUrl.pathname = `/${locale}/${country}`;
  return NextResponse.rewrite(req.nextUrl);
}
*/

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get country
  //const country = request?.geo.country?.toLowerCase() || 'us';
  console.log('request', request?.headers?.get('accept-language')?.split(',')[0]?.split('-')[0]);
  // Clone the request headers and set a new header `x-version`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-version', '13');

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-version`
  response.headers.set('x-version', '13');
  return response;
}
