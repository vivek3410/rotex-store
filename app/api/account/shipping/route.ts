
import { NextResponse } from "next/server";
import { Address } from '../../../../types';
import prismadb from "@/lib/prismadb";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json()
        const { firstName, lastName, companyName, Country, StreetAddress, city, state, pincode, userId } = body;
        if (!firstName) return res.json({ error: "missing FirstName" })
        if (!lastName) return new NextResponse("Missing firstName", { status: 400, })
        if (!Country) return new NextResponse("Missing firstName", { status: 400 })
        if (!StreetAddress) return new NextResponse("Missing firstName", { status: 400 })
        if (!city) return new NextResponse("Missing firstName", { status: 400 })
        if (!state) return new NextResponse("Missing firstName", { status: 400 })
        if (!pincode) return new NextResponse("Missing firstName", { status: 400 })
        // console.log(firstName, lastName, Country, StreetAddress, city, state, pincode, companyName);
        // console.log(userId);

        const address = await prismadb.shippingAddress.create({
            data: {
                firstName,
                lastName,
                companyName,
                Country,
                StreetAddress,
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

export async function GET(req: Request, res: Response) {
    try {
        const userId = req.headers.get('userId');
        if (!userId) return new NextResponse("Missing User Id", { status: 400 });
        const address = await prismadb.shippingAddress.findMany({
            where: {
                userId
            }
        })
        return NextResponse.json(address)
    } catch (e) {
        console.log("[SHIPPING_GET]", e);
        return new NextResponse("internal server error", { status: 500 })
    }
}

