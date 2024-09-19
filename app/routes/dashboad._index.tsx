import { MetaFunction } from '@remix-run/react';
import { Loading } from '~/components/elements/Loading';
import SidebarLayout from '~/components/layouts/SidebarLayout';
import { useAuth } from '~/lib/auth';
import DashboardLayout from './dashboard';

export const meta: MetaFunction = () => {
  return [{ title: `Dashboard - ${import.meta.env.VITE_APP_NAME}` }];
};

export default function Dashboard() {
  const { role, loading } = useAuth()
  if (loading) {
    return <Loading />
  }
  return (
    <DashboardLayout>
      <div>
        {role === 'admin' && <div>Welcome, Admin!</div>}
        {role === 'member' && <div>Welcome, User!</div>}
      </div>
    </DashboardLayout>
  );
}

