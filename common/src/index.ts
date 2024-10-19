import {z} from 'zod';

// signup validation
export const signupInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})


// signin validation
export const signinInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
})

// createBlog
export const createBlogInput = z.object({
    title : z.string(),
    content : z.string(),
})

// update blog
export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>

