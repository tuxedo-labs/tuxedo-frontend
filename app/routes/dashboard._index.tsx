import { MetaFunction } from '@remix-run/react';
import { Loading } from '~/components/elements/Loading';
import { useAuth } from '~/middleware/auth';

export const meta: MetaFunction = () => {
  return [
    { title: `Dashboard - ${import.meta.env.VITE_APP_NAME}` },
  ];
};

export default function dashboard() {
  const { loading, role } = useAuth();
  if (loading) {
    return <Loading />
  }
  return (
    <>
      {role === 'admin' ? (
        <div>Welcome, Admin!</div>
      ) : role === 'member' ? (
        <div>Welcome, User!</div>
      ) : null}
    </>
  )
}

