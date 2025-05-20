import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ReqSubmitted = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose} />
        
        <motion.div 
          className="relative bg-gray-800 border-2 border-purple-500 rounded-xl p-8 max-w-md mx-4 shadow-lg shadow-purple-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-500 text-5xl animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
            <p className="text-gray-300 mb-6">
              Your message was submitted successfully. We'll get back to you soon!
            </p>
            <button
              onClick={onClose}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Got it!
            </button>
          </div>
          
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
            <div className="h-1 bg-purple-500 rounded-full w-3/4 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReqSubmitted;