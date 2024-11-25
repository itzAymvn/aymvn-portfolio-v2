"use client"

import { motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
            }}
        >
            {children}
        </motion.div>
    )
} 