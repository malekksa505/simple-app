import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
    getUsers: procedure.query(() =>{
        return Prisma
    }),
    addUser: procedure.input(z.object({
        name:z.string(),
        gender:z.string()
    })).mutation((opts) => {
        const {input} = opts;
        // prisma
    })
})