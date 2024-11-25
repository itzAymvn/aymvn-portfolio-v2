"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/skills"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
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
		<section id="skills" className="container space-y-8">
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
					Skills & Expertise
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					Here are some of the technologies and tools I work with
				</motion.p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
			>
				{skills.map((skill) => {
					return (
						<motion.div key={skill.title} variants={itemVariants}>
							<Card className="transition-all duration-300 hover:bg-primary/5">
								<CardHeader>
									<div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
										<skill.icon className="h-6 w-6" />
									</div>
									<CardTitle>{skill.title}</CardTitle>
									<CardDescription>{skill.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="list-inside list-disc space-y-2">
										{skill.technologies.map((tech) => (
											<li key={tech}>{tech}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					)
				})}
			</motion.div>
		</section>
	)
}
