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
import { searchParamsToObject } from './utils/searchParamsToObject';

export function middleware(request: NextRequest) {
  console.log('request', request);
  /** doesn't return any params */
  const { nextUrl, headers, geo } = request;
  //const urlSearchParams = new URLSearchParams(searchParams);
  console.log('nexturl', nextUrl);

  const language = headers?.get('accept-language')?.split(',')?.[0]?.split('-')?.[0] || 'en';
  const country = geo?.country?.toLowerCase() || 'us';
  const windowParams = headers?.get('referer')?.split('?')?.[1]; // Hackity
  console.log(`country: ${country}`, `language: ${language}`, `windowParams: ${searchParamsToObject(windowParams)}`);
  // Get country
  //const country = request?.geo.country?.toLowerCase() || 'us';

  // Clone the request headers and set a new header `x-version`
  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-version`
  response.headers.set('x-version', '2.0.1');

  return response;
}
