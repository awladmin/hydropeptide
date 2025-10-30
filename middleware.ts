import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""; // e.g. "www.hydropeptidelearninglab.com"

  const requestHeaders = new Headers(req.headers);
  if (host.endsWith(".com") || host === "hydropeptidelearninglab.com") {
    requestHeaders.set("x-site", "com");
  } else {
    requestHeaders.set("x-site", "uk");
  }

  // Pass the augmented request headers downstream
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Run middleware for all pages (skip static assets if you like)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images).*)"],
};
