"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/data/contact"
import { MailIcon, MessageSquareIcon, PhoneIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
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
		<section id="contact" className="container space-y-8">
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
					Get in Touch
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					Feel free to reach out for collaborations or just a friendly hello
				</motion.p>
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="grid gap-8 lg:grid-cols-2"
			>
				<motion.div variants={itemVariants}>
					<Card>
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>Here are the ways you can reach me</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center gap-3">
								<MailIcon className="h-5 w-5 text-primary" />
								<span>{contactInfo.email}</span>
							</div>
							
							<div className="flex items-center gap-3">
								<MessageSquareIcon className="h-5 w-5 text-primary" />
								<span>{contactInfo.socialMedia.linkedin}</span>
							</div>
						</CardContent>
					</Card>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
							<CardDescription>
								This form is currently not functional. Email me directly at {contactInfo.email}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Input placeholder="Your Name" disabled title="Form not yet functional" />
							</div>
							<div className="space-y-2">
								<Input type="email" placeholder="Your Email" disabled title="Form not yet functional" />
							</div>
							<div className="space-y-2">
								<Textarea
									placeholder="Your Message"
									className="min-h-[100px]"
									disabled
									title="Form not yet functional"
								/>
							</div>
							<Button className="w-full" disabled title="Form not yet functional" aria-label="Send Message">
								Send Message
							</Button>
							<p className="text-sm text-muted-foreground">
								Form functionality coming soon. Please use the contact information provided.
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</section>
	)
}
