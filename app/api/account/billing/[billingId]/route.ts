import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(req: Request, params: { billingId: string }) {
    try {
        const userId = await req.headers.get('userId')
        if (!userId) {
            return new Response("Unauthorized", { status: 401 })
        }
        const billingAddress = await prismadb.billingAddress.findFirst({
            where: {
                userId,
                id: params.billingId
            }
        })
        if (!billingAddress) {
            return new Response("Not found", { status: 404 })
        }
        return NextResponse.json(billingAddress, { status: 200 })
    } catch (e) {
        console.log(e)
        return new Response("Something went wrong", { status: 500 })
    }
}

export async function PATCH(req: Request, { params }: { params: { billingId: string } }) {
    try {
        const body = await req.json();
        const { firstName, lastName, city, state, pincode, StreetAddress, Country, userId, companyName } = body;
        console.log(firstName, lastName, city, state, pincode, StreetAddress, Country, userId, companyName);
        console.log(params.billingId, userId);
        if (!firstName) return new NextResponse("Missing firstName", { status: 400 })
        if (!lastName) return new NextResponse("Missing lastName", { status: 400 })
        if (!city) return new NextResponse("Missing city", { status: 400 })
        if (!state) return new NextResponse("Missing state", { status: 400 })
        if (!pincode) return new NextResponse("Missing pincode", { status: 400 })
        if (!StreetAddress) return new NextResponse("Missing StreetAddress", { status: 400 })
        if (!Country) return new NextResponse("Missing Country", { status: 400 })

        const billingAddress = await prismadb.billingAddress.update({
            where: {
                id: params.billingId,
                userId
            },
            data: {
                firstName,
                lastName,
                city,
                Country,
                companyName,
                pincode,
                state,
                StreetAddress
            }
        })
        return NextResponse.json(billingAddress, { status: 200 })
    }
    catch (e) {
        console.log(e)
        return new Response("Something went wrong", { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { billingId: string } }) {
    try {
        const userId = await req.headers.get('userId');
        console.log(userId, params.billingId);
        if (!userId) return new NextResponse("unauthnticated", { status: 400 })
        if (!params.billingId) return new NextResponse("missing billingid", { status: 400 })

        const billingAddress = await prismadb.billingAddress.delete({
            where: {
                userId,
                id: params.billingId
            }
        })

        return NextResponse.json(billingAddress)
    } catch (e) {
        console.log(e);
    }
}