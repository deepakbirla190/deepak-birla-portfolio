import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Deepak Birla | Frontend_React.js Developer India'

const description =
  "Experienced React.js Frontend Developer with 2.5+ years of hands-on experience building scalable web applications. Expert in JavaScript, React.js, Next.js, Redux, and modern frontend technologies. Based in Indore, India. Let's bring your vision to life!"

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Deepak Birla Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@deepak_birla',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        {/* <Footer /> */}
      </body>
    </html>
  )
}