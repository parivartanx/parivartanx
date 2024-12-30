"use client";

import { services } from "@/components/sections/services/servicesData";
import { ServiceCard } from "./ServiceCard";
import { BackgroundCurves } from "@/components/sections/services/BackgroundCurves";

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundCurves />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions and expert development services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}