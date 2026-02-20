import React from 'react'
import styles from './Buttons.module.css'

/**
 * Boutons réutilisables — Primary (noir plein) et Secondary (blanc, bordure noire).
 * Hover : transitions CSS.
 */
export function Button({ children, variant = 'primary', href, onClick, type = 'button', className = '' }) {
  const classNames = `${styles.btn} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
