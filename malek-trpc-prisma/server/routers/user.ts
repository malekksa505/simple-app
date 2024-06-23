import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
    getUsers: procedure.query(() =>{
        return [
            {name: "malek", gender:"male"},
            {name: "fatemah", gender:"female"}
        ]
    }),
    addUser: procedure.input(z.object({
        name:z.string(),
        gender:z.string()
    })).mutation((opts) => {
        const {input} = opts;
        // prisma
    })
})