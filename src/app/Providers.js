"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-800 dark:text-gray-200 text-gray-800 bg-gray-200 transition-colors duration-600 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  )
}
