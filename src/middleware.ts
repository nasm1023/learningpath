import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // const token = request.cookies.get("auth_token");
    // const { pathname } = request.nextUrl;

    // if (!token && pathname.startsWith("/home")) {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
    if (request.nextUrl.pathname === '/') {
        // Điều hướng (redirect) sang "/home"
        return NextResponse.redirect(new URL('/home', request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
    // matcher: ["/home(.*)"],
};
