import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/data/contact"
import { MailIcon, MessageSquareIcon, PhoneIcon } from "lucide-react"

export function Contact() {
	return (
		<section id="contact" className="container space-y-8">
			<div className="text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
				<p className="mt-4 text-muted-foreground">
					Feel free to reach out for collaborations or just a friendly hello
				</p>
			</div>
			<div className="grid gap-8 lg:grid-cols-2">
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
			</div>
		</section>
	)
}
