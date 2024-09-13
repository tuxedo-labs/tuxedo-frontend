import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="w-12 h-12 border-4 border-t-4 border-t-transparent border-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.75, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
};

