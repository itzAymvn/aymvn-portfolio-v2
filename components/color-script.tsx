"use client"

export function ColorScript() {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
                    try {
                        const savedColor = localStorage.getItem('accent-color');
                        if (savedColor) {
                            document.documentElement.style.setProperty('--accent-color', savedColor);
                        }
                    } catch (e) {}
                    `,
			}}
		/>
	)
}
