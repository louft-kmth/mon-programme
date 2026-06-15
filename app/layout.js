import './globals.css'

export const metadata = {
  title: 'Programme Congé — Spécial Ventre',
  description: '2 semaines intensives focus ventre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
