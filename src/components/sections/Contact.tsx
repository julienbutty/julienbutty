/**
 * Contact section component
 * Contact form with Netlify Forms integration
 * Enhanced with anti-bot and security measures
 */

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Select } from '../ui/Select'
import { Checkbox } from '../ui/Checkbox'
import { Button } from '../ui/Button'
import { useForm } from '../../hooks/useForm'
import { validateContactForm, sanitizeInput, isSuspiciousSubmission } from '../../lib/validators'
import { staggerContainer, staggerItem } from '../../lib/animations'
import type { ContactFormData } from '../../types'

export interface ContactProps {
  services?: Array<{ value: string; label: string }>
}

/**
 * Default service options
 */
const defaultServiceOptions = [
  { value: 'wordpress', label: 'Site WordPress' },
  { value: 'custom', label: 'Développement sur mesure' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'refonte', label: 'Refonte de site' },
  { value: 'autre', label: 'Autre' },
]

/**
 * Contact section with form
 * Enhanced security features:
 * - Honeypot field to trap bots
 * - Rate limiting to prevent spam
 * - Input sanitization
 * - Spam detection
 */
export function Contact({ services = defaultServiceOptions }: ContactProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'spam'>('idle')
  const [honeypot, setHoneypot] = useState('')
  const lastSubmitTime = useRef<number>(0)

  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      message: '',
      rgpdConsent: false,
    },
    validate: (values) => validateContactForm(values) || {},
    onSubmit: async (values) => {
      try {
        // SECURITY CHECK 1: Honeypot (bot trap)
        if (honeypot !== '') {
          console.warn('Bot detected: honeypot filled')
          setSubmitStatus('error')
          return
        }

        // SECURITY CHECK 2: Rate limiting (max 1 submission per 30 seconds)
        const now = Date.now()
        const timeSinceLastSubmit = now - lastSubmitTime.current
        if (timeSinceLastSubmit < 30000) {
          console.warn('Rate limit exceeded')
          setSubmitStatus('error')
          return
        }

        // SECURITY CHECK 3: Sanitize all inputs
        const sanitizedValues = {
          name: sanitizeInput(values.name),
          email: sanitizeInput(values.email),
          phone: sanitizeInput(values.phone),
          serviceInterest: values.serviceInterest,
          message: sanitizeInput(values.message),
          rgpdConsent: values.rgpdConsent,
        }

        // SECURITY CHECK 4: Spam detection
        if (isSuspiciousSubmission(sanitizedValues)) {
          console.warn('Suspicious submission detected')
          setSubmitStatus('spam')
          setTimeout(() => setSubmitStatus('idle'), 5000)
          return
        }

        // Update last submit time
        lastSubmitTime.current = now

        // Submit to Netlify Forms
        const formData = new FormData()
        formData.append('form-name', 'contact')
        formData.append('bot-field', honeypot) // Honeypot for Netlify
        formData.append('name', sanitizedValues.name)
        formData.append('email', sanitizedValues.email)
        formData.append('phone', sanitizedValues.phone || '')
        formData.append('serviceInterest', sanitizedValues.serviceInterest || '')
        formData.append('message', sanitizedValues.message)
        formData.append('rgpd-consent', sanitizedValues.rgpdConsent ? 'true' : 'false')

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString(),
        })

        if (response.ok) {
          setSubmitStatus('success')
          form.resetForm()

          // Reset success message after 5 seconds
          setTimeout(() => setSubmitStatus('idle'), 5000)
        } else {
          setSubmitStatus('error')
        }
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus('error')
      }
    },
  })

  return (
    <Section id="contact" spacing="lg" className="bg-gray-900/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-4">
            Parlons de votre <span className="text-gradient">projet</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet web ? Discutons-en ensemble
            <br />
            <Link
              to="/faq"
              className="text-primary-400 hover:text-primary-300 underline text-base inline-flex items-center gap-1 mt-2"
            >
              Des questions sur les tarifs ou délais ? Consultez la FAQ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Success message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
            >
              ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </motion.div>
          )}

          {/* Error message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
            >
              ✗ Une erreur s'est produite. Veuillez réessayer ou me contacter directement.
            </motion.div>
          )}

          {/* Spam detection message */}
          {submitStatus === 'spam' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400"
            >
              ⚠ Votre message semble contenir du contenu suspect. Veuillez vérifier votre message ou me contacter directement par email.
            </motion.div>
          )}

          {/* Contact form */}
          <motion.form
            variants={staggerContainer}
            onSubmit={form.handleSubmit}
            className="space-y-6"
            data-netlify="true"
            name="contact"
          >
            {/* Netlify form detection field */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field - invisible to humans, bots will fill it */}
            <input
              type="text"
              name="bot-field"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name */}
            <motion.div variants={staggerItem}>
              <Input
                label="Nom"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.values.name}
                onChange={form.handleChange}
                error={form.errors.name}
                placeholder="Votre nom complet"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={staggerItem}>
              <Input
                label="Email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={form.values.email}
                onChange={form.handleChange}
                error={form.errors.email}
                placeholder="votre.email@exemple.fr"
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={staggerItem}>
              <Input
                label="Téléphone"
                name="phone"
                type="tel"
                maxLength={20}
                value={form.values.phone}
                onChange={form.handleChange}
                error={form.errors.phone}
                placeholder="06 12 34 56 78 (optionnel)"
              />
            </motion.div>

            {/* Service interest */}
            <motion.div variants={staggerItem}>
              <Select
                label="Service recherché"
                name="serviceInterest"
                value={form.values.serviceInterest}
                onChange={form.handleChange}
                options={services}
                placeholder="Sélectionnez un service"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={staggerItem}>
              <Textarea
                label="Message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                value={form.values.message}
                onChange={form.handleChange}
                error={form.errors.message}
                placeholder="Décrivez votre projet en quelques lignes..."
              />
            </motion.div>

            {/* RGPD consent */}
            <motion.div variants={staggerItem}>
              <Checkbox
                name="rgpdConsent"
                required
                checked={form.values.rgpdConsent}
                onChange={form.handleChange}
                error={form.errors.rgpdConsent}
                label="J'accepte que mes données soient utilisées pour me recontacter"
              />
              <p className="mt-2 text-sm text-gray-500 italic">
                Vos données ne sont pas stockées et seront supprimées après traitement de votre
                demande.
              </p>
            </motion.div>

            {/* Submit button */}
            <motion.div variants={staggerItem}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={form.isSubmitting}
                disabled={form.isSubmitting}
              >
                Envoyer le message
              </Button>
            </motion.div>
          </motion.form>

          {/* Contact info */}
          <motion.div variants={staggerItem} className="mt-12 text-center text-gray-400">
            <p className="mb-2">Ou contactez-moi directement :</p>
            <a
              href="mailto:julienbutty@gmail.com"
              className="text-primary-400 hover:text-primary-300 font-medium"
            >
              julienbutty@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
