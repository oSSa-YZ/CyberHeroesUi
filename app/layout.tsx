import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
