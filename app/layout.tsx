import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { about } from "@/data/about"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: `${about.name} | ${about.title}`,
	description: about.description,
	keywords: about.keywords,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Navigation />
					<main className="min-h-screen bg-background">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
