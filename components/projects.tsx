"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })
	const { t, language } = useLanguage()

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<section id="projects" className="container space-y-8">
			<motion.div
				ref={ref}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="text-center"
			>
				<motion.h2
					variants={itemVariants}
					className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
				>
					{t.projects.title}
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					{t.projects.subtitle}
				</motion.p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{projects[language].map((project) => (
					<motion.div key={project.title} variants={itemVariants}>
						<Card className="overflow-hidden">
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="relative aspect-video overflow-hidden rounded-md">
									{project.image ? (
										<Image
											src={project.image}
											alt={project.title}
											className="object-cover"
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									) : (
										<div className="flex h-full items-center justify-center bg-secondary">
											<span className="text-sm text-muted-foreground">{t.projects.noPreview}</span>
										</div>
									)}
								</div>
								<div className="mt-4 flex flex-wrap gap-2">
									{project.tags.map((tag: string) => (
										<span
											key={tag}
											className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary"
										>
											{tag}
										</span>
									))}
								</div>
							</CardContent>
							<CardFooter className="gap-2">
								{project.demoUrl && (
									<Button asChild variant="secondary">
										<a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
											<ExternalLinkIcon className="mr-2 h-4 w-4" />
											{t.projects.demo}
										</a>
									</Button>
								)}
								{project.githubUrl && (
									<Button asChild variant="outline">
										<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
											<GithubIcon className="mr-2 h-4 w-4" />
											{t.projects.code}
										</a>
									</Button>
								)}
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
