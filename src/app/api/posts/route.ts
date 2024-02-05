import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({hello: 'World'});
}

export async function POST(req: NextRequest, res: NextResponse) {
    return NextResponse.json({hello: 'POST'});
}