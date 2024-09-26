// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    const allowedOrigins = ['https://edm-technologies.pl'];
    const origin = request.headers.get('origin');

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: 'CORS Error: Origin not allowed.' },
        { status: 403 }
      );
    }

    const url = request.nextUrl.clone();
    const { pathname, searchParams } = url;

    // Check for language query parameter
    const lang = searchParams.get('lang');

    if (lang === 'tr') {
      url.pathname = '/tr' + pathname;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware Error:', error);
    // Redirect to homepage or a specific error page
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};
