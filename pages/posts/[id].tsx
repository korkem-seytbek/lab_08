import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostById, getAllPosts, getAuthorById } from '../../lib/api';
import { Post, Author } from '../../types';

interface PostProps {
  post: Post;
  author: Author;
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-8 italic">Written by {author.name} — {post.date}</p>
      <div className="prose lg:prose-xl mb-10">
        {post.content}
      </div>
      <div className="flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  if (!post) return { notFound: true };

  const author = await getAuthorById(post.authorId);
  return {
    props: { post, author },
    revalidate: 60,
  };
};