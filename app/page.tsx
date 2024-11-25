import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"

export default function Home() {
	return (
		<div className="flex flex-col gap-20 p-5 md:p-10 lg:p-20">
			<Hero />
			<Skills />
			<Resume />
			<Projects />
			<Contact />
		</div>
	)
}
