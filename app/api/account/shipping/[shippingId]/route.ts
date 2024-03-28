
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { shippingId: string } }) {
    try {
        const userId = await req.headers.get('userId');
        if (!userId) return new NextResponse("Missing User Id", { status: 400 });
        const address = await prismadb.shippingAddress.findUnique({
            where: {
                userId,
                id: params.shippingId
            }
        })
        return NextResponse.json(address)
    } catch (e) {
        console.log("[SHIPPING_GET]", e);
        return new NextResponse("internal server error", { status: 500 })
    }

}

export async function PATCH(req: Request, { params }: { params: { shippingId: string } }) {
    try {
        const body = await req.json()
        const { userId, firstName, lastName, StreetAddress, city, state, pincode, Country, companyName } = body

        if (!userId) return new NextResponse("Missing User Id", { status: 400 });

        const address = await prismadb.shippingAddress.update({
            where: {
                id: params.shippingId,
                userId
            },
            data: {
                firstName,
                lastName,
                state,
                StreetAddress,
                city,
                pincode,
                Country,
                companyName

            }
        })

        return NextResponse.json(address)
    } catch (e) {
        console.log("[SHIPPING_PATCH]", e);
        return new NextResponse("internal server error", { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { shippingId: string } }) {
    try {
        const userId = await req.headers.get('userId');
        if (!userId) return new NextResponse("unauthnticated", { status: 400 })
        if (!params.shippingId) return new NextResponse("missing shippingId", { status: 400 })

        const shippindAddress = await prismadb.shippingAddress.delete({
            where: {
                userId,
                id: params.shippingId
            }
        })

        return NextResponse.json(shippindAddress)
    } catch (e) {
        console.log(e);
    }
}