"use client"

import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { ColorToggle } from "./color-toggle"
import { LanguageToggle } from "./language-toggle"

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)

	const menuVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		visible: {
			opacity: 1,
			height: "auto",
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	}

	const itemVariants = {
		hidden: {
			opacity: 0,
			x: -20,
		},
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.2,
				ease: "easeInOut",
			},
		}),
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
					<MenuIcon className="h-6 w-6" />
					<span className="sr-only">Toggle menu</span>
				</Button>
				<div className="hidden md:flex">
					<nav className="flex items-center space-x-6 text-sm font-medium p-6">
						<Link href="/" className="transition-colors hover:text-foreground/80">
							Home
						</Link>
						<Link href="#skills" className="transition-colors hover:text-foreground/80">
							Skills
						</Link>
						<Link href="#resume" className="transition-colors hover:text-foreground/80">
							Resume
						</Link>
						<Link href="#projects" className="transition-colors hover:text-foreground/80">
							Projects
						</Link>
						<Link href="#contact" className="transition-colors hover:text-foreground/80">
							Contact
						</Link>
					</nav>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="absolute top-14 left-0 w-full bg-background border-b md:hidden"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={menuVariants}
						>
							<nav className="container py-4">
								<ul className="space-y-4">
									{[
										{ href: "/", text: "Home" },
										{ href: "#skills", text: "Skills" },
										{ href: "#resume", text: "Resume" },
										{ href: "#projects", text: "Projects" },
										{ href: "#contact", text: "Contact" },
									].map((item, i) => (
										<motion.li
											key={item.text}
											custom={i}
											variants={itemVariants}
											initial="hidden"
											animate="visible"
										>
											<Link
												href={item.href}
												className="block px-4 py-2 hover:bg-primary/10 rounded-md"
												onClick={() => setIsOpen(false)}
											>
												{item.text}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
				<div className="ml-auto flex items-center gap-2">
					<LanguageToggle />
					<ColorToggle />
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}
