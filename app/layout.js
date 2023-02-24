import { Navigation } from './components/navigation/navigation';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
