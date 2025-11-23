/**
 * useForm hook
 * Form state management and validation
 */

import { useState, ChangeEvent, FormEvent } from 'react'

interface UseFormOptions<T> {
  initialValues: T
  validate?: (values: T) => Partial<Record<keyof T, string>>
  onSubmit: (values: T) => void | Promise<void>
}

interface UseFormReturn<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  isSubmitting: boolean
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  setFieldValue: (field: keyof T, value: any) => void
  setFieldError: (field: keyof T, error: string) => void
  resetForm: () => void
}

/**
 * Hook for form state management and validation
 * @param options - Form configuration options
 * @returns Form state and handlers
 *
 * @example
 * ```tsx
 * const form = useForm({
 *   initialValues: { name: '', email: '' },
 *   validate: (values) => {
 *     const errors: any = {}
 *     if (!values.name) errors.name = 'Required'
 *     if (!values.email) errors.email = 'Required'
 *     return errors
 *   },
 *   onSubmit: async (values) => {
 *     await submitForm(values)
 *   }
 * })
 *
 * return (
 *   <form onSubmit={form.handleSubmit}>
 *     <input name="name" value={form.values.name} onChange={form.handleChange} />
 *     {form.errors.name && <span>{form.errors.name}</span>}
 *     <button type="submit" disabled={form.isSubmitting}>Submit</button>
 *   </form>
 * )
 * ```
 */
export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    // Handle checkbox separately
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setValues((prev) => ({ ...prev, [name]: checked }))
    } else {
      setValues((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error for this field when user starts typing
    if (errors[name as keyof T]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof T]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate if validate function provided
    if (validate) {
      const validationErrors = validate(values)
      setErrors(validationErrors)

      // Don't submit if there are errors
      if (Object.keys(validationErrors).length > 0) {
        return
      }
    }

    // Submit form
    setIsSubmitting(true)
    try {
      await onSubmit(values)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const setFieldValue = (field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const setFieldError = (field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
  }
}
