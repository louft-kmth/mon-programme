import './globals.css'

export const metadata = {
  title: 'Mon Programme',
  description: '4 seances par semaine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
