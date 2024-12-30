import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-muted-foreground">
        <MapPin className="h-5 w-5 text-indigo-400" />
        <span>70 Feet, Sipara,Patna-800001 Bihar , India</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <Phone className="h-5 w-5 text-indigo-400" />
        <span>+91 9060924752</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <Mail className="h-5 w-5 text-indigo-400" />
        <span>info@parivartanx@gmail.com</span>
      </div>
    </div>
  );
}