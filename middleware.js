
import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("authToken");

  // Skip middleware for non-protected routes
  if (pathname.startsWith("/api/auth") || pathname === "/") {
    return NextResponse.next();
  }

  // Check if the user is authenticated
  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login if not authenticated
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"], // Apply middleware to API routes
};
