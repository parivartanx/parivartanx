"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">Trusted By Industry Leaders</h2>
          <p className="text-muted-foreground">Companies we've worked with</p>
        </motion.div>

        <div className="relative">
          {/* First row of logos */}
          <div className="flex space-x-24 animate-scroll-left">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
          
          {/* Second row of logos (reversed direction) */}
          <div className="flex space-x-24 animate-scroll-right mt-12">
            {[...clients, ...clients].reverse().map((client, index) => (
              <div
                key={`${client.name}-reverse-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
