import { about } from "@/data/about"
import { contactInfo } from "@/data/contact"
import { CodeIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function Hero() {
	return (
		<div className="container flex flex-col items-center justify-center gap-4 pt-20 text-center">
			<div className="relative mb-4">
				<div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
					<CodeIcon className="h-12 w-12 text-primary" />
				</div>
				<div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
					<CodeIcon className="h-4 w-4 text-primary" />
				</div>
			</div>
			<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
				Hi, I'm <span className="gradient-text">{about.name}</span>
			</h1>
			<p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">{about.description}</p>
			<div className="flex gap-4">
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
			</div>
		</div>
	)
}
