
import { NextResponse } from "next/server";
import { Address } from '../../../../types';
import prismadb from "@/lib/prismadb";
import { useAuth } from "@/hooks/useAuth";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json()
        const { firstName, lastName, companyName, country, streetAddress, city, state, pincode, userId } = body;
        if (!firstName) return res.json({ error: "missing FirstName" })
        if (!lastName) return new NextResponse("Missing firstName", { status: 400, })
        if (!country) return new NextResponse("Missing firstName", { status: 400 })
        if (!streetAddress) return new NextResponse("Missing firstName", { status: 400 })
        if (!city) return new NextResponse("Missing firstName", { status: 400 })
        if (!state) return new NextResponse("Missing firstName", { status: 400 })
        if (!pincode) return new NextResponse("Missing firstName", { status: 400 })

        const address = await prismadb.shippingAddress.create({
            data: {
                firstName,
                lastName,
                companyName,
                Country: country,
                StreetAddress: streetAddress,
                city,
                state,
                pincode,
                userId
            }
        })
        return NextResponse.json(address)




    } catch (e) {
        console.log("[SHIPPING_POST]", e);
        return new NextResponse("internal server error", { status: 500 })
    }
}