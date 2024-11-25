import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    template: '%s - Bookabl',
    default: 'Bookabl | Booking infrastructure to make reservations possible through your platform',
  },
  icons: {
    icon: [
      { url: '/logo-white.png', sizes: '64x64', type: 'image/png' },  // Larger size
      { url: '/logo-white.png', sizes: '180x180', type: 'image/png' }, // For Apple devices
    ],
    shortcut: '/logo-white.png',
    apple: '/logo-white.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/logo-white.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}<Analytics /></body>
    </html>
  )
}
