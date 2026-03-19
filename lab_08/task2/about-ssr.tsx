import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function AboutSSR({ time }: { time: string }) {
  return (
    <div className="p-10 max-w-2xl mx-auto border m-10 rounded shadow">
      <h1 className="text-3xl font-bold text-red-600 mb-4">About (SSR)</h1>
      <p className="mb-4">Эта страница генерируется на сервере при <strong>каждом запросе</strong>.</p>
      <div className="p-4 bg-gray-100 rounded">
        <p>Rendered at: <span className="font-mono text-blue-600">{time}</span></p>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Обнови страницу (F5) — и ты увидишь, как время меняется каждую секунду.
      </p>
      <div className="mt-10">
        <Link href="/" className="text-blue-500 underline">← На главную</Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};