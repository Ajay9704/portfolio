import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budida Ajay - Software Engineer & ML Enthusiast',
  description: 'Backend-focused Software Engineer specializing in API design, ML pipelines, and cloud technologies. Currently at IIIT Jabalpur with expertise in Python, Go, and containerized deployments.',
  keywords: ['Software Engineer', 'Machine Learning', 'Backend Developer', 'API Design', 'Cloud Technologies', 'Python', 'Go', 'Docker', 'Kubernetes'],
  authors: [{ name: 'Budida Ajay', url: 'https://github.com/Ajay9704' }],
  creator: 'Budida Ajay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://budida-ajay.vercel.app',
    title: 'Budida Ajay - Software Engineer & ML Enthusiast',
    description: 'Backend-focused Software Engineer specializing in API design, ML pipelines, and cloud technologies.',
    siteName: 'Budida Ajay Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Budida Ajay - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budida Ajay - Software Engineer & ML Enthusiast',
    description: 'Backend-focused Software Engineer specializing in API design, ML pipelines, and cloud technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Budida Ajay",
              "jobTitle": "Software Engineer",
              "description": "Backend-focused Software Engineer specializing in API design, ML pipelines, and cloud technologies",
              "url": "https://budida-ajay.vercel.app",
              "sameAs": [
                "https://github.com/Ajay9704",
                "https://www.linkedin.com/in/budida-ajay"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Rakumura IT Solutions"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "IIIT Jabalpur"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}