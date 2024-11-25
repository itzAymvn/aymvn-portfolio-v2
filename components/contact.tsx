"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactInfo } from "@/data/contact"
import { MailIcon, MessageSquareIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function Contact() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })
	const { t } = useLanguage()

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
					{t.contact.title}
				</motion.h2>
				<motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
					{t.contact.subtitle}
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
							<CardTitle>{t.contact.title}</CardTitle>
							<CardDescription>{t.contact.subtitle}</CardDescription>
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
							<CardTitle>{t.contact.form.title}</CardTitle>
							<CardDescription>
								{t.contact.form.notFunctional} {contactInfo.email}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Input 
                  placeholder={t.contact.form.name} 
                  disabled 
                  title={t.contact.form.notFunctional}
                />
							</div>
							<div className="space-y-2">
								<Input 
                  type="email" 
                  placeholder={t.contact.form.email} 
                  disabled 
                  title={t.contact.form.notFunctional}
                />
							</div>
							<div className="space-y-2">
								<Textarea
									placeholder={t.contact.form.message}
									className="min-h-[100px]"
									disabled
									title={t.contact.form.notFunctional}
								/>
							</div>
							<Button
								className="w-full"
								disabled
								title={t.contact.form.notFunctional}
								aria-label={t.contact.form.send}
							>
								{t.contact.form.send}
							</Button>
							<p className="text-sm text-muted-foreground">
								{t.contact.form.comingSoon}
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</motion.div>
		</section>
	)
}
