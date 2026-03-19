export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    date: string;
    tags: string[];
    readTime: number;
  }
  
  export interface Author {
    id: string;
    name: string;
    bio: string;
    avatar: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
  }
  
  export interface Notification {
    id: string;
    type: "info" | "warning" | "success";
    message: string;
    read: boolean;
    createdAt: string;
  }