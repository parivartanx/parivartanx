"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Started with a vision to transform digital experiences",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "Growing Team",
    description: "Expanded to 50+ talented professionals",
    icon: Users,
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation",
    icon: Award,
  },
  {
    year: "2024",
    title: "Future Goals",
    description: "Expanding globally with innovative solutions",
    icon: Target,
  },
];

export default function CompanyJourney() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
        <p className="text-xl text-muted-foreground">
          Milestones that define our growth
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 flex justify-center">
                <Card className="p-6 w-96 bg-card/50 backdrop-blur-sm border-primary/10">
                  <milestone.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
              <div className="w-16 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse" />
                </div>
              </div>
              <div className="w-1/2">
                <div className={`text-2xl font-bold text-primary ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}>
                  {milestone.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}