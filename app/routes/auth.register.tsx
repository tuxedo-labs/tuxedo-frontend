import { useAuthRegister } from "~/hooks/auth";
import { DefaultInput } from "~/components/elements/Input";
import { AuthForm } from "~/components/fragments/Form";
import { DefaultButton } from "~/components/elements/Button";
import { motion } from "framer-motion";

export default function AuthRegister() {
  const {
    name,
    email,
    password,
    confirmPassword,
    message,
    isRegistered,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useAuthRegister();

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Create new account
        </h2>
        {message && !isRegistered && (
          <div className="mb-4 text-center text-red-600 dark:text-red-400">
            {message}
          </div>
        )}
        {isRegistered ? (
          <div className="mb-4 text-center text-green-600 dark:text-green-400">
            {message}
          </div>
        ) : (
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
                value={name}
                onChange={handleNameChange}
                placeholder="Full Name"
                label="Full Name"
              />
            </motion.div>

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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DefaultInput
                type="password"
                required={true}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="********"
                label="Confirm Password"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                <DefaultButton type="submit">Register</DefaultButton>
              </motion.div>
            </motion.div>
          </AuthForm>
        )}
      </div>
    </div>
  );
}

