import z from "zod";

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ProfileInput = z.infer<typeof profileSchem>;
export type searchInput = z.infer<typeof searchSchema>;
export type commentInput = z.infer<typeof commentSchema>;
export type blogInput = z.infer<typeof blogSchema>;
export type passwordInput = z.infer<typeof passwordUpdateSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
  first_name: z.string().min(2, "First name is too short"),
  last_name: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const profileSchem = z.object({
  first_name: z.string().min(2, "First name is too short"),
  last_name: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
});

export const searchSchema = z.object({
  query: z.string(),
});

export const commentSchema = z.object({
  content: z.string(),
});

export const blogSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  body: z.string().min(10, { message: "Body must be at least 10 characters" }),
  tags: z.array(z.string().min(1, { message: "tags must be at least 1" })),
  state: z.enum(["draft", "published"]).optional(),
});

export const passwordUpdateSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
