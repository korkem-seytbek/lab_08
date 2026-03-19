import { Post, Author, User, Notification } from "../types";

const posts: Post[] = [
  { id: "1", title: "Next.js SSR vs SSG", content: "Full guide about rendering...", authorId: "101", date: "2026-03-01", tags: ["nextjs", "react"], readTime: 5 },
  { id: "2", title: "TypeScript Tips", content: "How to use interfaces...", authorId: "102", date: "2026-03-02", tags: ["ts", "web"], readTime: 3 },
];

const authors: Author[] = [
  { id: "101", name: "John Doe", bio: "Web Dev", avatar: "" },
  { id: "102", name: "Jane Smith", bio: "React Expert", avatar: "" },
];

export const getAllPosts = async (): Promise<Post[]> => posts;
export const getPostById = async (id: string) => posts.find(p => p.id === id);
export const getAuthorById = async (id: string) => authors.find(a => a.id === id);

export const getCurrentUser = (): User => ({
  id: "u1", name: "Korkem", email: "korkem@example.com", role: "admin"
});

export const getNotifications = async (): Promise<Notification[]> => [
  { id: "n1", type: "info", message: "Welcome to Lab 8", read: false, createdAt: new Date().toISOString() },
];