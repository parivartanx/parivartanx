"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  stat: {
    icon: LucideIcon;
    value: string;
    label: string;
  };
  index: number;
}

export function StatsCard({ stat, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}