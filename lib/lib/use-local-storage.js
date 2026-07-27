'use client'
import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) setValue(JSON.parse(stored))
    } catch (e) { console.warn('localStorage read error:', e) }
    setLoaded(true)
  }, [key])

  useEffect(() => {
    if (!loaded) return
    try { localStorage.setItem(key, JSON.stringify(value)) }
    catch (e) { console.warn('localStorage write error:', e) }
  }, [key, value, loaded])

  return [value, setValue, loaded]
}
