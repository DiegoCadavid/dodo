import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  if (!(url.pathname == "/auth/login" || url.pathname == "/auth/register")) {
    
    if (!request.cookies.get("Authorization")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  } else {
    if (request.cookies.get("Authorization")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
