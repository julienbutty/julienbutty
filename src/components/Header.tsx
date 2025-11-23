/**
 * Header Component
 * Navigation header with logo/home link for all pages
 */

import { Link } from 'react-router-dom'
import { navigateToHomeSection } from '../hooks/useScrollToHash'

export function Header() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateToHomeSection('contact')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Home Link */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-all hover:opacity-80"
        >
          {/* Icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>

          {/* Name */}
          <div>
            <div className="text-gray-50 font-bold text-lg leading-tight">
              Julien Butty
            </div>
            <div className="text-gray-400 text-xs">
              Développeur Freelance
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={handleContactClick}
            className="text-gray-400 hover:text-primary-400 transition-colors text-sm font-medium"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
