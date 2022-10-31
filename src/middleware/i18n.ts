/*
import { searchParamsToObject } from '../utils/searchParamsToObject';
import type { NextRequest } from 'next/server';

export function i18n(request: NextRequest, NextResponse) {
  const { nextUrl, headers, geo } = request;
  const locale = headers?.get('accept-language')?.split(',')?.[0] || 'en-US';

  const language = locale?.split('-')?.[0] || 'en';
  const country = geo?.country?.toLowerCase() || locale?.split('-')?.[1] || 'us';
  const params = headers?.get('referer')?.split('?')?.[1]; // Hackity

  console.log(`country: ${country}`, `language: ${language}`, `windowParams: ${searchParamsToObject(params)}`);

  NextResponse.redirect(new URL('/about-2', request.url));

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
*/
