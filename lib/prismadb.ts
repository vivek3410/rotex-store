
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate';
declare global {
    var prisma: any | undefined
}

const prismadb = globalThis.prisma || new PrismaClient().$extends(withAccelerate());
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;
export default prismadb;