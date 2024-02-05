import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({items: [{
        id: 1,
        title: 'Hello World'
    }]});
}

// export async function POST(req: NextRequest, res: NextResponse) {
//     return NextResponse.json({hello: 'POST'});
// }