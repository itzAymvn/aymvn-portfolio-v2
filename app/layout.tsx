import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { about } from "@/data/about"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ColorScript } from "@/components/color-script"
import { ScrollProgress } from "@/components/scroll-progress"
import { PageTransition } from "@/components/page-transition"
import { LanguageProvider } from "@/contexts/language-context"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: `${about.name} | ${about.title}`,
	metadataBase: new URL("https://aymvn.me/"),
	description: about.description,
	openGraph: {
		title: `${about.name} | ${about.title}`,
		description: about.description,
		type: "website",
		url: "https://aymvn.me/",
		images: [
			{
				url: "https://aymvn.me/images/og.png",
				width: 1200,
				height: 630,
				alt: `${about.name} | ${about.title}`,
			},
		],
	},
	keywords: about.keywords,
	applicationName: `${about.name} | ${about.title}`,
	authors: [
		{
			name: about.name,
			url: "https://aymvn.me/",
		},
	],
	verification: { google: "bhbsjgIT5O1yx-sYXonHHqBZL0yFS95h2UGU8oeO9D4" },
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
					<LanguageProvider>
						<ScrollProgress />
						<Navigation />
						<main className="relative min-h-screen bg-background">
							<PageTransition>{children}</PageTransition>
						</main>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
