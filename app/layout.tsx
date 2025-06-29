import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../app/Navbar/Navbar"
import Cursor from "../app/Navbar/Cursor"

export const metadata: Metadata = {
  title: "Moderna Navbar",
  description: "Exemplo com Tailwind 4 e shadcn"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Cursor />
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
