"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MousePointer() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
    const [isPointerVisible, setIsPointerVisible] = useState(true)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updateMousePosition)
        
        const initialEvent = new MouseEvent('mousemove', {
            clientX: mousePosition.x,
            clientY: mousePosition.y
        })
        updateMousePosition(initialEvent)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, [])

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999999] h-3 w-3 rounded-full bg-primary"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                opacity: isPointerVisible ? 1 : 0
            }}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 30,
                mass: 0.1,
            }}
            initial={false}
        />
    )
} 