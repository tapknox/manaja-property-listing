import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import RootContent from '@/components/RootContent'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

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
    <html lang="en" className={plusJakartaSans.className}>
      <head />
      <body className="antialiased">
        <RootContent>
          {children}
        </RootContent>
        <Analytics />
      </body>
    </html>
  )
}
