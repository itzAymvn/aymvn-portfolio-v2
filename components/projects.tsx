"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })

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
					Featured Projects
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					Here are some of my recent projects
				</motion.p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<motion.div key={project.title} variants={itemVariants}>
						<Card className="overflow-hidden group relative transition-transform duration-300 hover:shadow-lg flex flex-col">
							<div className="aspect-video relative overflow-hidden">
								{project.image ? (
									<>
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</>
								) : (
									<div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-colors duration-300">
										<div className="text-center transform transition-transform duration-300 group-hover:scale-110">
											<GithubIcon className="h-12 w-12 mx-auto text-primary/40" />
											<p className="mt-2 text-sm text-muted-foreground">No preview available</p>
										</div>
									</div>
								)}
							</div>
							<CardHeader className="transition-colors duration-300 group-hover:bg-primary/5 flex-grow">
								<CardTitle className="transition-colors duration-300">{project.title}</CardTitle>
								<CardDescription className="line-clamp-3">{project.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-transform duration-300 hover:bg-primary/20 cursor-default"
										>
											{tag}
										</span>
									))}
								</div>
							</CardContent>
							<CardFooter className="gap-2 mt-auto">
								{project.demoUrl && (
									<Button
										variant="outline"
										size="sm"
										asChild
										className="transition-all duration-300 hover:bg-primary/10"
										aria-label="Demo"
									>
										<a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
											<ExternalLinkIcon className="mr-2 h-4 w-4" />
											Demo
										</a>
									</Button>
								)}
								{project.githubUrl && (
									<Button
										variant="outline"
										size="sm"
										asChild
										className="transition-all duration-300 hover:bg-primary/10"
										aria-label="Code"
									>
										<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
											<GithubIcon className="mr-2 h-4 w-4" />
											Code
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
