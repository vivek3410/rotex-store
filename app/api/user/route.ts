import { auth } from "@/firebase/firebaseConfig";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userId = await req.headers.get('userId')
        console.log(userId);
        const { firstName, lastName, email, password } = body;
        if (!userId) return new NextResponse("Missing User Id", { status: 400 });
        if (!firstName) return new NextResponse("Missing Name", { status: 400 });
        if (!lastName) return new NextResponse("Missing Last Name", { status: 400 });
        if (!email) return new NextResponse("Missing Email", { status: 400 });
        if (!password) return new NextResponse("Missing Password", { status: 400 });
        const existingUser = await prismadb.user.findFirst({
            where: {
                email,
            }
        })
        console.log(existingUser);
        if (existingUser) return new NextResponse("User already exists", { status: 400 });

        const user = await prismadb.user.create({
            data: {
                firstName,
                lastName,
                email,
                password,
                userId,
            }
        })

        console.log(user);

        return NextResponse.json(user)
    } catch (e) {
        console.log("[USER_POST]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function GET(req: Request, res: Response) {
    try {
        const email = req.headers.get('email');
        const password = req.headers.get('password')
        if (!email) return new NextResponse("Missing Email", { status: 400 });
        if (!password) return new NextResponse("Missing Password", { status: 400 });
        const user = await prismadb.user.findFirst({
            where: {
                email,
                password,
            }
        })
        // console.log(email);
        if (!user) return new NextResponse("User not found", { status: 404 });
        return NextResponse.json(user)
    } catch (e) {
        console.log("[USER_GET]", e);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}