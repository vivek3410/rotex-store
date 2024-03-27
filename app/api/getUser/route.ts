import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { user } from '../../../types';
import { where } from "firebase/firestore";

export async function GET(req: Request, res: Response) {
    try {
        const userId = await req.headers.get('userId')
        if (!userId) return new NextResponse("userId requrired", { status: 400 })
        const user = await prismadb.user.findFirst({
            where: {
                userId
            }
        })

        if (!user) return new NextResponse("user not found", { status: 400 })
        return NextResponse.json(user)

    } catch (e) {
        console.log("[getUser_GET]", e);
        return new NextResponse("internal server Error", { status: 500 })
    }
}