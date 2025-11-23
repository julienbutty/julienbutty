/**
 * Select component
 * Reusable select dropdown with validation states
 */

import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  fullWidth?: boolean
  options: SelectOption[]
  placeholder?: string
}

/**
 * Select component with label and error handling
 * @example
 * ```tsx
 * <Select
 *   label="Service"
 *   name="serviceInterest"
 *   options={[
 *     { value: 'wordpress', label: 'WordPress' },
 *     { value: 'custom', label: 'Développement sur mesure' }
 *   ]}
 *   value={values.serviceInterest}
 *   onChange={handleChange}
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      fullWidth = true,
      className,
      id,
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name

    const baseClasses =
      'bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer'

    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : ''

    return (
      <div className={cn(fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              baseClasses,
              errorClasses,
              fullWidth && 'w-full',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
