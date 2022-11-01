import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { searchParamsToObject } from '~utils/searchParamsToObject';

export function middleware(request: NextRequest) {
  const { headers, nextUrl, geo } = request;
  const { pathname, searchParams } = nextUrl;
  console.log('***Middleware', pathname, searchParams);

  //**
  // Redirect to correct locale
  if (pathname === '/') {
    const locale = headers?.get('accept-language')?.split(',')?.[0] || 'en-US';
    const language = locale?.split('-')?.[0] || 'en';
    const country = geo?.country?.toLowerCase() || locale?.split('-')?.[1] || 'us';
    const params = headers?.get('referer')?.split('?')?.[1];
    console.log('**locale', locale, language, country, searchParamsToObject(params));
    return NextResponse.redirect(new URL(`/${language}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
