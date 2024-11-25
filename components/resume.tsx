"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/data/resume"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCapIcon, BriefcaseIcon, AwardIcon } from "lucide-react"

export function Resume() {
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

	const formatDate = (date: Date) => {
		return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
	}

	const getDateRange = (start: Date, end?: Date) => {
		const startDate = new Date(start)
		if (!end) {
			const now = new Date()
			const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth())
			const years = Math.floor(months / 12)
			const remainingMonths = months % 12

			const duration =
				years > 0
					? remainingMonths > 0
						? `${years}y ${remainingMonths}m`
						: `${years}y`
					: `${remainingMonths}m`

			return `${formatDate(startDate)} - Present · ${duration}`
		}
		const endDate = new Date(end)
		return `${formatDate(startDate)} - ${formatDate(endDate)}`
	}

	const sortedEducation = [...resume.education].sort((a, b) => b.start.getTime() - a.start.getTime())
	const sortedExperience = [...resume.experience].sort((a, b) => b.start.getTime() - a.start.getTime())
	const sortedCertificates = [...resume.certificates].sort((a, b) => b.date.getTime() - a.date.getTime())

	return (
		<section id="resume" className="container space-y-8">
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
					Resume
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					My educational and professional journey
				</motion.p>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
			>
				<motion.div variants={itemVariants}>
					<Card>
						<CardHeader>
							<div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
								<GraduationCapIcon className="h-6 w-6" />
							</div>
							<CardTitle>Education</CardTitle>
							<CardDescription>Academic background</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
								{sortedEducation.map((edu) => (
									<div key={edu.degree} className="relative flex items-start">
										<div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
											<GraduationCapIcon className="h-5 w-5" />
										</div>
										<div className="ml-14 space-y-1">
											<h3 className="font-semibold">{edu.degree}</h3>
											<p className="text-sm text-muted-foreground">{edu.institution}</p>
											<p className="text-xs text-muted-foreground">
												{getDateRange(edu.start, edu.end)}
											</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Card>
						<CardHeader>
							<div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
								<BriefcaseIcon className="h-6 w-6" />
							</div>
							<CardTitle>Experience</CardTitle>
							<CardDescription>Professional journey</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
								{sortedExperience.map((exp, index) => (
									<div key={index} className="relative flex items-start">
										<div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
											<BriefcaseIcon className="h-5 w-5" />
										</div>
										<div className="ml-14 space-y-1">
											<h3 className="font-semibold">{exp.title}</h3>
											<p className="text-sm text-muted-foreground">{exp.company}</p>
											<div className="flex items-center gap-2">
												<p className="text-xs text-muted-foreground">
													{getDateRange(exp.start, exp.end)}
												</p>
												<span className="text-xs text-primary">•</span>
												<p className="text-xs text-muted-foreground">{exp.type}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Card>
						<CardHeader>
							<div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
								<AwardIcon className="h-6 w-6" />
							</div>
							<CardTitle>Certificates</CardTitle>
							<CardDescription>Professional certifications</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
								{sortedCertificates.map((cert) => (
									<div key={cert.name} className="relative flex items-start">
										<div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
											<AwardIcon className="h-5 w-5" />
										</div>
										<div className="ml-14 space-y-1">
											<h3 className="font-semibold">{cert.name}</h3>
											<p className="text-sm text-muted-foreground">{cert.issuer}</p>
											<p className="text-xs text-muted-foreground">{formatDate(cert.date)}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</section>
	)
}
