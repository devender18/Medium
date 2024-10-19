import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify, decode} from 'hono/jwt';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };

  Variables: {
    userId: string;
  };
}>();

// 1. POST /api/v1/user/signup
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        // name : body.name,
      },
    });
    console.log("user created");
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token: token });
  } catch (err) {
    return c.json({ msg: "error while signing up!" }, 403);
  }
});

// 2. POST /api/v1/user/signin
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return c.json({ msg: "User not found" }, 411);
  }
  //if added password in the findUnique then we don't have to validate it here
  if (body.password == user.password) {
    try {
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ msg: "logged in successfully!!", token: token }, 200);
    } catch (err) {
      return c.json({ msg: "something wrong while creating token" });
    }
  } else {
    return c.json({ msg: "Invalid password" });
  }
});
