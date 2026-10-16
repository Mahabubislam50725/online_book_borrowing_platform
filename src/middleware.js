import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
    headers: { cookie: request.headers.get("cookie") || "" },
  });
  const data = await session.json();

  if (!data?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/books/:path*", "/profile", "/profile/update"],
};
