
import Navigation from '@/components/Navegation'
import './globals.css'



export const metadata = {
  title: 'My first project serius',
  description: 'Generated by create next app',
  keywords:  'next, react,app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-1">
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
