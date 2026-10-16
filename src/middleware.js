import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await fetch(
    new URL("/api/auth/get-session", request.nextUrl.origin),
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
        "x-forwarded-for": request.headers.get("x-forwarded-for") || "",
      },
    }
  );

  if (!session.ok) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const data = await session.json();

  if (!data?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/books/:path*", "/profile", "/profile/update"],
};
