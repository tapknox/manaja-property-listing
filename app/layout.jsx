import { Analytics } from '@vercel/analytics/next'
import { RootClient } from '@/components/RootClient'
import './globals.css'

export const metadata = {
  title: 'Manaja - Property Listings',
  description: 'Find your perfect property with Manaja. Browse verified listings from experienced metro managers across Lagos.',
  themeColor: '#0066CC',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <RootClient>
          {children}
        </RootClient>
        <Analytics />
      </body>
    </html>
  )
}
