import { Code2, Smartphone, Globe2, Database, Cpu, LineChart, Shield, Cloud } from "lucide-react";
import type { Service } from "@/components/sections/services/types";

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create scalable and responsive solutions for your business.",
    icon: Globe2,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver high-performance mobile experiences.",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description: "Robust and scalable backend solutions using Node.js, Python, and Java. We build secure APIs and microservices architecture.",
    icon: Database,
  },
  {
    title: "DevOps Services",
    description: "Streamline your development pipeline with our DevOps expertise. We implement CI/CD, container orchestration, and cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of AI with our custom machine learning solutions. We build intelligent systems that drive business growth.",
    icon: Cpu,
  },
  {
    title: "Software Testing",
    description: "Comprehensive testing services including automated testing, performance testing, and quality assurance to ensure robust software delivery.",
    icon: Shield,
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs. We transform your ideas into powerful applications.",
    icon: Code2,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our analytics solutions. We help you make data-driven decisions.",
    icon: LineChart,
  },
];