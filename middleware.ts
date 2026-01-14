import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth = request.cookies.get("auth")?.value;
  const isAdmin = request.cookies.get("admin")?.value === "true";

  if (!isAuth && request.nextUrl.pathname.startsWith("/checkout")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!isAdmin && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/admin/:path*"],
};
