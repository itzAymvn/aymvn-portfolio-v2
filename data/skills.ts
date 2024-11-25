import { Code2Icon, PaintbrushIcon, ServerIcon, WrenchIcon, DatabaseIcon } from "lucide-react"

export const skills = {
	en: [
		{
			title: "Frontend Development",
			description: "Creating responsive and interactive user interfaces",
			icon: PaintbrushIcon,
			technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
		},
		{
			title: "Backend Development",
			description: "Building robust server-side applications",
			icon: ServerIcon,
			technologies: ["Laravel", "PHP", "Node.js", "Express"],
		},
		{
			title: "Database & APIs",
			description: "Managing data and building APIs",
			icon: DatabaseIcon,
			technologies: ["MySQL", "PostgreSQL", "MongoDB"],
		},
		{
			title: "Tools & DevOps",
			description: "Utilizing modern development tools and practices",
			icon: WrenchIcon,
			technologies: ["Git", "Docker", "AWS", "CI/CD"],
		},
		{
			title: "Languages",
			description: "Programming languages I work with",
			icon: Code2Icon,
			technologies: ["PHP", "JavaScript", "TypeScript", "Python"],
		},
	],
	fr: [
		{
			title: "Développement Frontend",
			description: "Création d'interfaces utilisateur réactives et interactives",
			icon: PaintbrushIcon,
			technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
		},
		{
			title: "Développement Backend",
			description: "Construction d'applications côté serveur robustes",
			icon: ServerIcon,
			technologies: ["Laravel", "PHP", "Node.js", "Express"],
		},
		{
			title: "Base de données & APIs",
			description: "Gestion des données et construction d'APIs",
			icon: DatabaseIcon,
			technologies: ["MySQL", "PostgreSQL", "MongoDB"],
		},
		{
			title: "Outils & DevOps",
			description: "Utilisation d'outils et de pratiques de développement modernes",
			icon: WrenchIcon,
			technologies: ["Git", "Docker", "AWS", "CI/CD"],
		},
		{
			title: "Langages",
			description: "Langages de programmation avec lesquels je travaille",
			icon: Code2Icon,
			technologies: ["PHP", "JavaScript", "TypeScript", "Python"],
		},
	],
}
