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
]

export function ColorToggle() {
	const setAccentColor = (color: string) => {
		document.documentElement.style.setProperty("--accent-color", color)
	}

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
