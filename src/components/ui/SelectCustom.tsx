/**
 * Custom Select component
 * Modern dropdown with shadcn-style design
 */

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectCustomProps {
  label?: string
  error?: string
  fullWidth?: boolean
  options: SelectOption[]
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name?: string
  required?: boolean
  disabled?: boolean
}

/**
 * Custom Select with modern dropdown
 */
export function SelectCustom({
  label,
  error,
  fullWidth = true,
  options,
  placeholder = 'Sélectionnez une option',
  value,
  onChange,
  name = '',
  required = false,
  disabled = false,
}: SelectCustomProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const containerRef = useRef<HTMLDivElement>(null)

  // Find selected option label
  const selectedOption = options.find((opt) => opt.value === selectedValue)
  const displayText = selectedOption ? selectedOption.label : placeholder

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Update internal value when prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setIsOpen(false)

    // Call onChange with synthetic event compatible with form handler
    if (onChange) {
      const syntheticEvent = {
        target: {
          name,
          value: optionValue,
        },
      } as React.ChangeEvent<HTMLSelectElement>
      onChange(syntheticEvent)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      }
    }
  }

  const baseClasses =
    'bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-between'

  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : ''

  return (
    <div className={cn(fullWidth && 'w-full')} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {/* Hidden native select for form submission */}
        <select
          name={name}
          value={selectedValue}
          onChange={(e) => handleSelect(e.target.value)}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom trigger button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={cn(
            baseClasses,
            errorClasses,
            fullWidth && 'w-full',
            isOpen && 'ring-2 ring-primary-500 border-transparent'
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={cn(!selectedValue && 'text-gray-500')}>{displayText}</span>
          <motion.svg
            className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        {/* Dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1)',
              }}
              role="listbox"
            >
              <div className="max-h-60 overflow-auto py-1">
                {options.map((option, index) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 transition-colors flex items-center justify-between',
                      selectedValue === option.value
                        ? 'bg-primary-500/20 text-primary-400'
                        : 'text-gray-300 hover:bg-gray-800',
                      index === 0 && 'rounded-t-lg',
                      index === options.length - 1 && 'rounded-b-lg'
                    )}
                    role="option"
                    aria-selected={selectedValue === option.value}
                  >
                    <span>{option.label}</span>
                    {selectedValue === option.value && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-5 w-5 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
