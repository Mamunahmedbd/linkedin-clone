import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    const url = req.nextUrl.clone();
    // console.log(NextResponse.toString());

    if (!session) {
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
    // if (!session) return NextResponse.redirect(new URL("/about-2", request.url));
    // If user is authenticated, continue.
  }
}
