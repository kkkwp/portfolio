import type { Metadata } from 'next'
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
