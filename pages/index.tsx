import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { Post } from '../types';

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Blog (SSG + ISR)</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} className="p-4 border rounded hover:bg-gray-50">
            <h2 className="text-xl text-blue-600">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // Это ISR: страница обновится максимум через 60 сек
  };
};