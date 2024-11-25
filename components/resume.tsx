"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/data/resume"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCapIcon, BriefcaseIcon, AwardIcon } from "lucide-react"

export function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="resume" className="container space-y-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Resume
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
          My educational and professional journey
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
                <GraduationCapIcon className="h-6 w-6" />
              </div>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resume.education.map((edu) => (
                <div key={edu.degree} className="space-y-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Professional journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resume.experience.map((exp, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                    <span className="text-xs text-primary">•</span>
                    <p className="text-xs text-muted-foreground">{exp.type}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="mb-2 inline-block rounded-lg bg-primary/10 p-2 text-primary">
                <AwardIcon className="h-6 w-6" />
              </div>
              <CardTitle>Certificates</CardTitle>
              <CardDescription>Professional certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resume.certificates.map((cert) => (
                <div key={cert.name} className="space-y-1">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
} 