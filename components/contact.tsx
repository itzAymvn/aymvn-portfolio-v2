"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactInfo } from "@/data/contact"
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

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
                                                                <PhoneIcon className="h-5 w-5 text-primary" />
                                                                <span>{contactInfo.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                                <GithubIcon className="h-5 w-5 text-primary" />
                                                                <span>{contactInfo.socialMedia.github}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                                <LinkedinIcon className="h-5 w-5 text-primary" />
                                                                <span>{contactInfo.socialMedia.linkedin}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                                <TwitterIcon className="h-5 w-5 text-primary" />
                                                                <span>{contactInfo.socialMedia.twitter}</span>
                                                        </div>
                                                </CardContent>
                                        </Card>
                                </motion.div>
                        </motion.div>
                </section>
        )
}
