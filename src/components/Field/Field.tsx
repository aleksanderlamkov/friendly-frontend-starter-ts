import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'
import type { TFieldProps } from './types'

export default (props: TFieldProps) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs: Record<string, string> = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx('field', className)}>
      <label className="field__label" htmlFor={id}>
        {label}
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            &nbsp;*
          </span>
        )}
      </label>
      <Component
        className="field__control"
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        {...extraAttrs}
      />
    </div>
  )
}
