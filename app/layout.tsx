import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { about } from "@/data/about"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ColorScript } from "@/components/color-script"
import { MousePointer } from "@/components/mouse-pointer"
import { ScrollProgress } from "@/components/scroll-progress"
import { PageTransition } from "@/components/page-transition"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: `${about.name} | ${about.title}`,
	description: about.description,
	icons: {
		icon: "/favicon.ico",
	},
	keywords: about.keywords,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorScript />
			</head>
			<body className={`${inter.className} overflow-x-hidden`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<ScrollProgress />
					<MousePointer />
					<Navigation />
					<main className="relative min-h-screen bg-background">
						<PageTransition>
							{children}
						</PageTransition>
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
