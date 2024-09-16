import { MetaFunction } from '@remix-run/react';
import { useAuthContext } from '~/hoc/authProvider';

export const meta: MetaFunction = () => {
  return [{ title: `Dashboard - ${import.meta.env.VITE_APP_NAME}` }];
};

export default function Dashboard() {
  const { role } = useAuthContext()
  return (
    <div>
      {role === 'admin' && <div>Welcome, Admin!</div>}
      {role === 'member' && <div>Welcome, User!</div>}
    </div>
  );
}

