"use client";

import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  Icon: LucideIcon;
}

export function IconComponent({ Icon }: ServiceIconProps) {
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-full">
      <Icon className="w-12 h-12 text-blue-600" />
    </div>
  );
}