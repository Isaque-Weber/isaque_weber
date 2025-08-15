import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Isaque Weber - Desenvolvedor de Sistemas',
  description: 'Desenvolvedor especializado em soluções aplicadas à IA para democratização do uso de IA',
  keywords: 'Desenvolvedor, React, TypeScript, NextJS, NestJS, Python, FastAPI, IA, Inteligência Artificial',
  authors: [{ name: 'Isaque Weber' }],
  openGraph: {
    type: 'website',
    url: 'https://isaque-weber.vercel.app/',
    title: 'Isaque Weber - Desenvolvedor de Sistemas',
    description: 'Desenvolvedor especializado em soluções aplicadas à IA para democratização do uso de IA',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://isaque-weber.vercel.app/',
    title: 'Isaque Weber - Desenvolvedor de Sistemas',
    description: 'Desenvolvedor especializado em soluções aplicadas à IA para democratização do uso de IA',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}