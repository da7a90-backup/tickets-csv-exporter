import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){

    const params = new URL(request.url).searchParams
    const to = params.get('to')
    const from = params.get('from')

    if(!process.env.TICKETS_API){
        return new NextResponse(JSON.stringify({message: 'no tickets api set'}), {
            status: 500
        })
    }
    const res = await fetch(`${process.env.TICKETS_API}?from=${from}&to=${to}`)

    const json = await res.json()

    return new NextResponse(JSON.stringify(json), {
            status: 200,
          });
}