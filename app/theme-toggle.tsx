'use client'

import { useEffect, useState } from 'react'

const storageKey = 'theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  // Stay in sync with the inline init script (and pick up changes after hydration).
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
    const md = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!window.localStorage.getItem(storageKey)) {
        setTheme(md.matches ? 'dark' : 'light')
      }
    }
    md.addEventListener('change', onChange)
    return () => md.removeEventListener('change', onChange)
  }, [])

  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      window.localStorage.setItem(storageKey, next)
    } catch {}
    document.documentElement.dataset.theme = next
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="bead-toggle"
      onClick={flip}
      data-state={theme ?? 'light'}
      aria-label="Switch color theme"
    >
      <span className="bead" aria-hidden="true" />
      <span className="visually-hidden">Current theme: {theme ?? 'light'}</span>
    </button>
  )
}
