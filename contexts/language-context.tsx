"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { en } from "@/data/i18n/en"
import { fr } from "@/data/i18n/fr"
import { ar } from "@/data/i18n/ar"
type Language = "en" | "fr" | "ar"
type Translations = typeof en

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: Translations
	isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

// RTL languages list
const RTL_LANGUAGES: Language[] = ["ar"]

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en")

	useEffect(() => {
		// Get saved language from localStorage on mount
		const savedLanguage = localStorage.getItem("language") as Language
		if (savedLanguage) {
			setLanguage(savedLanguage)
		} else {
			// If no saved language, try to use browser language
			const browserLanguage = navigator.language.split("-")[0]
			setLanguage(browserLanguage === "fr" ? "fr" : browserLanguage === "ar" ? "ar" : "en")
		}
	}, [])

	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang)
		localStorage.setItem("language", lang)
		// Update HTML lang attribute
		document.documentElement.lang = lang
		// Update HTML dir attribute for RTL support
		document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr"
	}

	// Update direction on language change
	useEffect(() => {
		document.documentElement.dir = RTL_LANGUAGES.includes(language) ? "rtl" : "ltr"
	}, [language])

	const translations = {
		en,
		fr,
		ar,
	}

	const isRTL = RTL_LANGUAGES.includes(language)

	const value = {
		language,
		setLanguage: handleSetLanguage,
		t: translations[language as keyof typeof translations],
		isRTL,
	} as LanguageContextType

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
