import {Hono} from 'hono';
import { z } from 'zod'

const app = new Hono();

app.get('/',(c)=>{
  return c.text("hello !!!")
});

// 1. POST /api/v1/user/signup
app.post('/api/v1/user/signup',async (c)=>{
  const body = await c.req.json();

  // const response = Signup.safeParse(response);

  // if (!response.success){
  //   return c.status(411).json({
  //     "msg" : "Invalid Inputs"
  //   })
  // }



  // })



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
 

