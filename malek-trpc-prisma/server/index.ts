import { z } from "zod";
import { procedure, router } from "./trpc";
import { userRouter } from "./routers/user";

export const appRouter = router({
    user: userRouter
})

export type appRouter = typeof appRouter