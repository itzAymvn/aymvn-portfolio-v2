"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/skills"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Skills() {
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
					{t.skills.title}
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					{t.skills.subtitle}
				</motion.p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
			>
				{skills[language as keyof typeof skills].map((skill: {
					title: string;
					icon: React.ComponentType;
					description: string;
					technologies: string[];
				}) => {
					return (
						<motion.div key={skill.title} variants={itemVariants}>
							<Card className="transition-all duration-300 hover:bg-primary/5">
								<CardHeader>
									<div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
										<div className="h-6 w-6">
											<skill.icon />
										</div>
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
