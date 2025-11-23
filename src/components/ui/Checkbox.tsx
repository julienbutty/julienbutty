/**
 * Checkbox component
 * Reusable checkbox with label
 */

import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode
  error?: string
}

/**
 * Checkbox component with label and error handling
 * @example
 * ```tsx
 * <Checkbox
 *   name="rgpdConsent"
 *   label="J'accepte la politique de confidentialité"
 *   checked={values.rgpdConsent}
 *   onChange={handleChange}
 *   error={errors.rgpdConsent}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const checkboxId = id || props.name

    return (
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={cn(
                'w-5 h-5 bg-gray-900 border-2 border-gray-700 rounded focus:ring-2 focus:ring-primary-500 text-primary-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
                error && 'border-red-500',
                className
              )}
              {...props}
            />
          </div>
          <label
            htmlFor={checkboxId}
            className="ml-3 text-sm text-gray-300 cursor-pointer"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
        {error && (
          <p className="mt-2 ml-8 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
