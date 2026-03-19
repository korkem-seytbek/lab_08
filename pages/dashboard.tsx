import { GetServerSideProps } from 'next';
import { getCurrentUser, getNotifications } from '../lib/api';
import { User, Notification } from '../types';

interface DashboardProps {
  user: User;
  notifications: Notification[];
  serverTime: string;
}

export default function Dashboard({ user, notifications, serverTime }: DashboardProps) {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Dashboard (SSR)</h1>
      <div className="bg-white shadow rounded-lg p-6 mb-6 border">
        <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        {notifications.map(n => (
          <div key={n.id} className="p-4 mb-2 bg-yellow-50 border-l-4 border-yellow-400">
            {n.message}
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400">Page generated at: {serverTime}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getNotifications();

  return {
    props: {
      user,
      notifications,
      serverTime: new Date().toLocaleTimeString(),
    },
  };
};