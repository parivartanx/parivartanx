"use client";

import { Service } from "@/components/sections/services/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconComponent } from "@/components/sections/services/icon-component";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-slate-900 backdrop-blur-sm hover:transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <IconComponent Icon={service.icon} />
        <h3 className="text-xl font-semibold  mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        <Button variant="outline" className="mt-auto hover:bg-blue-600 hover:text-white">
          Learn More
        </Button>
      </div>
    </Card>
  );
}