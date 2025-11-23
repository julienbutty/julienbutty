/**
 * Footer component
 * Site footer with links and copyright
 */

import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'

export interface FooterProps {
  copyrightText?: string
  showSocialLinks?: boolean
}

/**
 * Footer component
 */
export function Footer({
  copyrightText = '© 2025 Julien Butty. Tous droits réservés.',
  showSocialLinks = true,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Julien Butty</h3>
            <p className="text-gray-400">
              Développeur Freelance à Lyon
              <br />
              Sites web & applications sur mesure
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                Services
              </a>
              <Link to="/a-propos" className="text-gray-400 hover:text-primary-400 transition-colors">
                À propos
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">
                FAQ
              </Link>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <nav className="flex flex-col space-y-2 mb-4">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-primary-400 transition-colors">
                Mentions légales
              </Link>
            </nav>

            {/* Social links */}
            {showSocialLinks && (
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/julien-butty-471869a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:contact@julienbutty.fr"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Rounded square background (same as LinkedIn) */}
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z" />
                    {/* Envelope icon inside */}
                    <path fill="#000" d="M6 7h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1zm0 1.5l6 3.75 6-3.75V8l-6 3.75L6 8v.5z" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            {copyrightText.replace('2025', String(currentYear))}
          </p>
          <p className="mt-2">
            Fait avec ❤️ à Lyon, France
          </p>
        </div>
      </Container>
    </footer>
  )
}
