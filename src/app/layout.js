import Navbar from '@components/navbar/navbar'
import '@styles/global.css'

export const metadata = {
  title: 'Marcelinda S.R',
  description: 'Made for PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
