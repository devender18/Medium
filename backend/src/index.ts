import {Hono} from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify, decode} from 'hono/jwt';


const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
  }
}>()

app.get('/',(c)=>{
  return c.text("hello !!!")
});



// 1. POST /api/v1/user/signup
app.post('/api/v1/user/signup',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,}
  ).$extends(withAccelerate())

  const body = await c.req.json();

  try{
    const user = await prisma.user.create({
      data :{
        email : body.email,
        password : body.password,
        name : body.name,
  
      } 
    })

    const token =  await sign({id : user.id},"secret");

    return c.json({token: token})

  }catch(err){
    return c.json({msg : "error while signing up!"}, 403);
  }

  

})


// 2. POST /api/v1/user/signin
app.post("/api/v1/user/signin", (c)=>{
  return c.text("");
})



// 3. POST /api/v1/blog
app.post("/api/v1/blog", (c)=>{
  return c.text("");
})


// 4. PUT /api/v1/blog
app.put("/api/v1/blog", (c)=>{
  return c.text("");
})



// 5. GET /api/v1/blog/:id
app.get("/api/v1/blog/:id", (c)=>{
  return c.text("");
})
  



// 6. GET /api/v1/blog/bulk
app.get("/api/v1/blog/bulk", (c)=>{
  return c.text("");
})









export default app;
 

