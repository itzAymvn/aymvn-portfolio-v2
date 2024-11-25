"use client"

import { about } from "@/data/about"
import { contactInfo } from "@/data/contact"
import { CodeIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	}

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			className="container flex flex-col items-center justify-center gap-4 pt-20 text-center"
		>
			<motion.div variants={itemVariants} className="relative mb-4">
				<div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
					<CodeIcon className="h-12 w-12 text-primary" />
				</div>
				<div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
					<CodeIcon className="h-4 w-4 text-primary" />
				</div>
			</motion.div>
			<motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
				Hi, I'm <span className="gradient-text">{about.name}</span>
			</motion.h1>
			<motion.p variants={itemVariants} className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
				{about.description}
			</motion.p>
			<motion.div variants={itemVariants} className="flex gap-4">
				<Link href={contactInfo.socialMedia.github} target="_blank">
					<Button variant="outline" size="icon" aria-label="GitHub">
						<GithubIcon className="h-5 w-5" />
					</Button>
				</Link>
				<Link href={contactInfo.socialMedia.linkedin} target="_blank">
					<Button variant="outline" size="icon" aria-label="LinkedIn">
						<LinkedinIcon className="h-5 w-5" />
					</Button>
				</Link>
				<Link href={`mailto:${contactInfo.email}`} target="_blank">
					<Button variant="outline" size="icon" aria-label="Email">
						<MailIcon className="h-5 w-5" />
					</Button>
				</Link>
			</motion.div>
		</motion.div>
	)
}
