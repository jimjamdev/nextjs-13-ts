import type { NextRequest } from 'next/server';
// middleware.ts
import { NextResponse } from 'next/server';
// import { searchParamsToObject } from '~utils/searchParamsToObject';

export function middleware(request: NextRequest) {
  const { headers, geo } = request;
  const locale = headers?.get('accept-language')?.split(',')?.[0] || 'en-US';
  const language = locale?.split('-')?.[0] || 'en';
  /*const country = geo?.country?.toLowerCase() || locale?.split('-')?.[1] || 'us';
  const params = headers?.get('referer')?.split('?')?.[1];*/
  return NextResponse.redirect(new URL(`/${language}`, request.url));
}

export const config = {
  matcher: '/',
};
