// "use client";

// import { services } from "@/components/sections/services/servicesData";
// import { ServiceCard } from "./ServiceCard";
// import { BackgroundCurves } from "@/components/sections/services/BackgroundCurves";

// export default function ServicesSection() {
//   return (
//     <section className="relative py-32 overflow-hidden">
//       <BackgroundCurves />
      
//       <div className="relative container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Empowering businesses with cutting-edge technology solutions and expert development services
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import { services } from "@/components/sections/services/servicesData";

function ServicesSection() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">OUR SERVICES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Empowering Your Business with Technology Solutions
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={services.map(service => ({
              title: service.title,
              description: service.description,
              icon: service.icon,
              link: `/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`,
              button: (
                <Link 
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} 
                  className="mt-4 inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                >
                  Learn More
                </Link>
              )
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
