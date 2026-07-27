'use client'

import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StateProvider } from '@/components/StateProvider'
import theme from '@/lib/theme'
import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <title>Manaja - Property Listings</title>
        <meta name="description" content="Find your perfect property with Manaja. Browse verified listings from experienced metro managers across Lagos." />
        <meta name="theme-color" content="#0066CC" />
        <link rel="icon" href="/logo.png" />
        <style>{`
          :root {
            --manaja-blue: #0066CC;
            --manaja-gold: #FFB800;
            --text-primary: #1a1a1a;
            --text-secondary: #666666;
            --bg-light: #f8f9fa;
            --border-light: #e5e5e5;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #ffffff;
            color: var(--text-primary);
          }
        `}</style>
      </head>
      <body className="antialiased">
        <StateProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </ThemeProvider>
        </StateProvider>
      </body>
    </html>
  )
}
