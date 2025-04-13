import React from 'react'
import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'InterviewPath - AI Interview Preparation',
  description:
    'InterviewPath is an AI-powered platform designed to help you prepare for interviews effectively. Practice, learn, and succeed with personalized guidance.',
  keywords: [
    'AI interview preparation',
    'interview practice',
    'job interview help',
    'AI-powered platform',
    'InterviewPath',
  ],
  authors: [{ name: 'InterviewPath Team', url: 'https://interviewpath.com' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='dark'>
      <body className={`${monaSans.variable} antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  )
}
