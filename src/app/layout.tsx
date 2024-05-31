'use client'
import { baselightTheme } from '@/utils/theme/DefaultColors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Poppins } from 'next/font/google'
import '../utils/language/i18n'
import { LicenseInfo } from '@mui/x-license'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

require('dotenv').config()
const theme = createTheme({
    typography: {},
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    LicenseInfo.setLicenseKey(
        '6742b74fbe859d492c60eedcd43f85c0Tz04Mzk1MSxFPTE3MzkwOTIyMjcwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI='
    )
    return (
        <html lang="es">
            <body className={poppins.className}>
                <DndProvider backend={HTML5Backend}>
                    <ThemeProvider theme={baselightTheme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </DndProvider>
            </body>
        </html>
    )
}
