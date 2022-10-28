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
  const locale = headers?.get('accept-language')?.split(',')?.[0] || 'en-US';

  const language = locale?.split('-')?.[0] || 'en';
  const country = geo?.country?.toLowerCase() || locale?.split('-')?.[1] || 'us';
  const params = headers?.get('referer')?.split('?')?.[1]; // Hackity

  console.log(`country: ${country}`, `language: ${language}`, `windowParams: ${searchParamsToObject(params)}`);

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
