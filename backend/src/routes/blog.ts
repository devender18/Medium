import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@dev2873/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string,
    
  };
}>();

// Middleware
blogRouter.use("/*", async (c, next) => {
  const authorization = c.req.header("Authorization") || "";

//   if (!authorization) {
//     c.status(404);
//     return c.json({ error: "authentication failed!!!" });
//   }

  try{
    const token = authorization.split(" ")[1];
    const decodedPayload = await verify(token, c.env.JWT_SECRET);

    if (!decodedPayload.id) {
        return c.json({ msg: "Authentication failed !!!" }, 403);
    }

    // c.set('userId', decodedPayload.id);
    c.set("userId", decodedPayload.id.toString());
    await next();
    }catch(err){
        return c.text("you've been logged out!")
    }
});


// 3. POST /api/v1/blog
blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    
    const body = await c.req.json();

    const {success} = createBlogInput.safeParse(body);

    if (!success){
        return c.json({msg : "Invalid Inputs by zod"},411)
    }

    try{
        await prisma.post.create({
            data :{
                title : body.title,
                content : body.content,
                authorId : c.get('userId')
            }
        })

        return c.json({msg : "post has been created !!"})
    }catch(err){
        return c.json({msg : "couldn't create the post"},403)
    }
    
});


// 4. PUT /api/v1/blog
blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const {success} = updateBlogInput.safeParse(body);

    if (!success){
        return c.json({msg : "Invalid Inputs by zod"},411)
    }

    try{
        await prisma.post.update({
            where:{
                id : body.id
            },
            data:{
                title : body.title,
                content : body.content
            }
        })

        return c.json({msg: "blog has been updated"});
    }catch(err){
        return c.json({msg: "Error while updating blog"},403);
    }
});

// 5. GET /api/v1/blog/:id
blogRouter.get("/get/:id", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const blog = await prisma.post.findFirst({
            where : {
                id : c.req.param('id')
            }
           
        })
        console.log("**-->", c.req.param('id'))
        return c.json({blog : blog})
    }catch(err){
        return c.json({msg:"couldn't find the blog"},404)
    }
});

// 6. GET /api/v1/blog/bulk
//pagination can be implemented here
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const allPost = await prisma.post.findMany();
        return c.json({allPosts: allPost})
    }catch(err){
        return c.json({msg : "error while fetching posts"})
    }

  
});
