import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'

export default function Document() {
  const [darkMode, setDarkMode] = useState(false)
  setDarkMode(true) // TODO: remove this line when dark mode toggle button is implemented

  return (
    <Html lang="en">
      <Head />
      <body className={darkMode ? 'dark' : undefined}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
