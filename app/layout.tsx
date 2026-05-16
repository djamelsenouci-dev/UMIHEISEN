import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata =  {
  title: 'UMIHEISEN - Comparateur de Bateaux Méditerranée',
  description: 'Comparez et réservez les plus beaux bateaux de la Méditerranée. Yachts, voiliers, catamarans - trouvez le bateau parfait pour votre prochaine aventure.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      {/* Verifcation IMPACT */}
        <head>
        <meta
          name="impact-site-verification"
          content="d625079f-f535-4562-82b6-b0a17633a2c8"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
