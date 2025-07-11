import type { InputHTMLAttributes } from 'react'

export type TFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'required'
> & {
  label: string
  isRequired?: boolean
  mask?: string
}
