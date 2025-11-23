/**
 * Main App component
 * Root component with routing
 */

import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { pageTransition } from './lib/animations'
import { Footer } from './components/sections'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { FAQ } from './pages/FAQ'
import { MentionsLegales } from './pages/MentionsLegales'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Set page title based on route
    const titles: Record<string, string> = {
      '/': 'Julien Butty - Développeur Freelance Lyon',
      '/a-propos': 'À propos - Julien Butty',
      '/faq': 'Questions Fréquentes - Julien Butty',
      '/mentions-legales': 'Mentions Légales - Julien Butty',
    }
    document.title = titles[location.pathname] ?? titles['/']!
  }, [location])

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
          className="min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
