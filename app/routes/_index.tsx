import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white gap-3">
      <img src="favicon.ico" />
      <h1 className="font-serif text-7xl font-bold">hello remix!</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}
