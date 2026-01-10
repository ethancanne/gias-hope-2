import { NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-request-url', req.url);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return res;
}
