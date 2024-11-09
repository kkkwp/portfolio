import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: '정채윤 포트폴리오',
  description: '정채윤의 포트폴리오입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-950 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
