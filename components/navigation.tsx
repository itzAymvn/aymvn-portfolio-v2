"use client"

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ColorToggle } from "./color-toggle"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)

	const menuVariants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.2,
			},
		}),
	}

	return (
		<div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
					<Menu className="h-6 w-6" />
				</Button>
				<NavigationMenu className="hidden md:block">
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="/" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#skills" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#resume" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Resume</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#projects" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Projects
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="#contact" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Contact
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
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
				<div className="ml-auto flex items-center mr-4">
					<ColorToggle />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}
