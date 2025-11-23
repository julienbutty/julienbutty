/**
 * Textarea component
 * Reusable textarea with validation states
 */

import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

/**
 * Textarea component with label and error handling
 * @example
 * ```tsx
 * <Textarea
 *   label="Message"
 *   name="message"
 *   rows={5}
 *   error={errors.message}
 *   value={values.message}
 *   onChange={handleChange}
 * />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className, id, rows = 4, ...props }, ref) => {
    const textareaId = id || props.name

    const baseClasses =
      'bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y'

    const errorClasses = error
      ? 'border-red-500 focus:ring-red-500'
      : ''

    return (
      <div className={cn(fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            baseClasses,
            errorClasses,
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
