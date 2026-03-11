import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static"; // Opsional: untuk serve file CSS
import { userRoutes } from "./routes/user.route";

export const app = new Elysia()
 .use( // agar css dapat dipanggil lewat SSR 
    staticPlugin({
      assets: "public",
      prefix: "/"
    })
  )
  .use(userRoutes);
