import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { firstName, lastName, city, state, pincode, StreetAddress, Country, userId, companyName } = body
        console.log(firstName, lastName, city, state, pincode, StreetAddress, Country, userId, companyName);
        // console.log(Country);
        if (!firstName) return new NextResponse("Missing firstName", { status: 400 })
        if (!lastName) return new NextResponse("Missing lastName", { status: 400 })
        if (!city) return new NextResponse("Missing city", { status: 400 })
        if (!state) return new NextResponse("Missing state", { status: 400 })
        if (!pincode) return new NextResponse("Missing pincode", { status: 400 })
        if (!StreetAddress) return new NextResponse("Missing StreetAddress", { status: 400 })
        if (!Country) return new NextResponse("Missing Country", { status: 400 })

        const billingAddress = await prismadb.billingAddress.create({
            data: {
                firstName,
                lastName,
                city,
                Country,
                companyName,
                pincode,
                state,
                StreetAddress,
                userId
            }
        })
        return NextResponse.json(billingAddress, { status: 200 })
    } catch (e) {
        console.log(e)
        return new Response("Something went wrong", { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        const userId = await req.headers.get('userId')
        // console.log(userId);
        if (!userId) {
            return new Response("Unauthorized", { status: 401 })
        }
        const billingAddress = await prismadb.billingAddress.findMany({
            where: {
                userId
            }
        })
        // console.log(billingAddress);
        if (!billingAddress) {
            return new Response("Not found", { status: 404 })
        }

        return NextResponse.json(billingAddress, { status: 200 })
    } catch (e) {
        console.log(e)
        return new Response("Something went wrong", { status: 500 })
    }
}