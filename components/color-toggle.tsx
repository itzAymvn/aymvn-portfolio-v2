"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { PaletteIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const colors = [
	{ name: "Lavender", value: "267 100% 67%" },
	{ name: "Blue", value: "221 83% 53%" },
	{ name: "Green", value: "142 71% 45%" },
	{ name: "Red", value: "0 84% 60%" },
	{ name: "Orange", value: "24 95% 53%" },
	{ name: "Pink", value: "330 81% 60%" },
	{ name: "Purple", value: "272 81% 53%" },
	{ name: "Teal", value: "171 77% 44%" },
	{ name: "Yellow", value: "48 96% 53%" },
	{ name: "Cyan", value: "190 95% 39%" },
	{ name: "Indigo", value: "243 75% 59%" },
	{ name: "Lime", value: "84 81% 44%" },
	{ name: "Rose", value: "336 80% 58%" },
	{ name: "Sky", value: "199 89% 48%" },
	{ name: "Amber", value: "38 92% 50%" },
]

export function ColorToggle() {
	const setAccentColor = (color: string) => {
		document.documentElement.style.setProperty("--accent-color", color)
		localStorage.setItem("accent-color", color)
	}

	React.useEffect(() => {
		const savedColor = localStorage.getItem("accent-color")
		if (savedColor) {
			document.documentElement.style.setProperty("--accent-color", savedColor)
		}
	}, [])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" aria-label="Toggle color theme">
					<PaletteIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Toggle color</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{colors.map((color) => (
					<DropdownMenuItem
						key={color.name}
						onClick={() => setAccentColor(color.value)}
						className="flex items-center gap-2"
					>
						<div className="h-4 w-4 rounded-full" style={{ backgroundColor: `hsl(${color.value})` }} />
						{color.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
