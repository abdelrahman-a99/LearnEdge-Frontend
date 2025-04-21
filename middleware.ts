import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    // your middleware logic
    return NextResponse.next();
}