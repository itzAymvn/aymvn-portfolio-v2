import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/skills"

export function Skills() {
	return (
		<section id="skills" className="container space-y-8">
			<div className="text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
				<p className="mt-4 text-muted-foreground">Here are some of the technologies and tools I work with</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{skills.map((skill) => {
					return (
						<Card key={skill.title} className="transition-all duration-300 hover:bg-primary/5">
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
					)
				})}
			</div>
		</section>
	)
}
