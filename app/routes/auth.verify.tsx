import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultInput } from '~/components/elements/Input';
import { AuthForm } from '~/components/fragments/Form';
import { DefaultButton } from '~/components/elements/Button';
import { motion } from 'framer-motion';
import { useAuthVerifyToken } from '~/hooks/auth';

export default function VerifyToken() {
  const navigate = useNavigate();
  const {
    token,
    message,
    isVerified,
    handleTokenChange,
    handleSubmit,
  } = useAuthVerifyToken();

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        navigate('/auth/login');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVerified, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Verify Your Token
        </h2>
        <div className="mb-4 text-center">
          {isVerified ? (
            <div className="text-green-600 dark:text-green-400">
              Token verified successfully!
            </div>
          ) : (
            message && (
              <div className="text-red-600 dark:text-red-400">
                {message}
              </div>
            )
          )}
        </div>
        <AuthForm onSubmit={handleSubmit}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            transition={{ duration: 0.5 }}
          >
            <DefaultInput
              type="text"
              required={true}
              value={token}
              onChange={handleTokenChange}
              placeholder="Enter your verification token"
              label="Verification Token"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={inputVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
              <DefaultButton type="submit">Verify Token</DefaultButton>
            </motion.div>
          </motion.div>
        </AuthForm>
      </div>
    </div>
  );
}

