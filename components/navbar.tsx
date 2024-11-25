import { LanguageToggle } from "@/components/language-toggle"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
	return (
		<nav>
			<div className="flex items-center gap-2">
				<LanguageToggle />
				<ModeToggle />
			</div>
		</nav>
	)
}
