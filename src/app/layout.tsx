import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa de Repouso Bem estar',
  description: 'Casa de Respouso bem estar, casa de repouso em hortolândia , campinas  e região',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
