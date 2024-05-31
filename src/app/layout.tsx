'use client'
import { Poppins } from 'next/font/google'
import '../utils/language/i18n'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

require('dotenv').config()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    )
}
