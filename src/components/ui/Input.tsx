/**
 * Input component
 * Reusable text input with validation states
 */

import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

/**
 * Input component with label and error handling
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   name="email"
 *   type="email"
 *   error={errors.email}
 *   value={values.email}
 *   onChange={handleChange}
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className, id, ...props }, ref) => {
    const inputId = id || props.name

    const baseClasses =
      'bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'

    const errorClasses = error
      ? 'border-red-500 focus:ring-red-500'
      : ''

    return (
      <div className={cn(fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
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

Input.displayName = 'Input'
