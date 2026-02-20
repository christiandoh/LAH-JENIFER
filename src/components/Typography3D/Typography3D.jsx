import React, { useEffect, useRef, useState } from 'react'
import styles from './Typography3D.module.css'

/**
 * Typography3D — "HOTEL" (noir plein) + "& Hospitality" (outline seulement).
 * Animation légère : fade-in / slide. Effet de profondeur 3D.
 */
export function Typography3D({ mainText = 'HOTEL', subText = '& Hospitality', animated = true }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(!animated)

  useEffect(() => {
    if (!animated || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated])

  return (
    <div ref={ref} className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      <h1 className={styles.mainText} aria-hidden="false">
        {mainText}
      </h1>
      <p className={styles.subText} aria-hidden="false">
        {subText}
      </p>
    </div>
  )
}

export default Typography3D
