import './globals.css'

export const metadata = {
  title: 'Mon Programme 8 Semaines',
  description: 'Programme sport + alimentation — objectif 55-60kg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
