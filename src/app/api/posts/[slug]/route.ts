import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: {params: {slug: string}}) {
    return NextResponse.json({hello: 'Slug World'});
}

