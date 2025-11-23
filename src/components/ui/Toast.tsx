/**
 * Toast notification component
 * Modern slide-in notification for success/error messages
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export interface ToastProps {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  isVisible: boolean
  onClose: () => void
  duration?: number
}

/**
 * Toast notification with auto-dismiss
 */
export function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const variants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  }

  const typeStyles = {
    success: {
      bg: 'bg-green-500/90',
      border: 'border-green-400',
      icon: '✓',
      iconBg: 'bg-green-400',
    },
    error: {
      bg: 'bg-red-500/90',
      border: 'border-red-400',
      icon: '✗',
      iconBg: 'bg-red-400',
    },
    warning: {
      bg: 'bg-orange-500/90',
      border: 'border-orange-400',
      icon: '⚠',
      iconBg: 'bg-orange-400',
    },
    info: {
      bg: 'bg-blue-500/90',
      border: 'border-blue-400',
      icon: 'ℹ',
      iconBg: 'bg-blue-400',
    },
  }

  const style = typeStyles[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-4 right-4 z-[9999] max-w-md"
        >
          <div
            className={`${style.bg} backdrop-blur-md border ${style.border} rounded-xl shadow-2xl overflow-hidden`}
          >
            <div className="flex items-center gap-3 p-4">
              {/* Icon */}
              <div
                className={`${style.iconBg} w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}
              >
                {style.icon}
              </div>

              {/* Message */}
              <p className="text-white font-medium flex-1 text-sm leading-relaxed">
                {message}
              </p>

              {/* Close button */}
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors flex-shrink-0 ml-2"
                aria-label="Fermer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            {duration > 0 && (
              <motion.div
                className="h-1 bg-white/30"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
