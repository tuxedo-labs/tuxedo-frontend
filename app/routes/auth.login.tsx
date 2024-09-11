import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthLogin } from '~/hooks/auth';
import { DefaultInput } from '~/components/elements/Input';
import { AuthForm } from '~/components/fragments/Form';
import { DefaultButton } from '~/components/elements/Button';
import { motion } from 'framer-motion';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
  ];
};

export default function AuthLogin() {
  const navigate = useNavigate();
  const {
    email,
    password,
    message,
    isLoggedIn,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useAuthLogin();

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate('/home')
    }
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Login to Your Account
        </h2>
        {message && !isLoggedIn && (
          <div className="mb-4 text-center text-red-600 dark:text-red-400">
            {message}
          </div>
        )}
        {isLoggedIn && (
          <div className="mb-4 text-center text-green-600 dark:text-green-400">
            Login successful! Redirecting to dashboard...
          </div>
        )}
        <AuthForm onSubmit={handleSubmit}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            transition={{ duration: 0.5 }}
          >
            <DefaultInput
              type="email"
              required={true}
              value={email}
              onChange={handleEmailChange}
              placeholder="example@gmail.com"
              label="Email"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DefaultInput
              type="password"
              required={true}
              value={password}
              onChange={handlePasswordChange}
              placeholder="********"
              label="Password"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DefaultButton type="submit">Login</DefaultButton>
          </motion.div>
        </AuthForm>
      </div>
    </div>
  );
}

