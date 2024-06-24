import { z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const userRouter = router({
    getUsers: procedure.query(async() =>{
        return await Prisma.user.findMany()
    }),
    addUser: procedure.input(z.object({
        name:z.string(),
        gender:z.string()
    })).mutation(async (opts) => {
        const {input} = opts;
        await prisma.user.create({
            data: {
                name: input.name,
                gender: input.gender
            }
        })
    })
})