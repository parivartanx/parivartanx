import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import ContactSection from '../components/sections/contact';
import HeroSection from '@/components/3d/HeroSection';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { ClientLogos } from '@/components/sections/Clients';
import WhatMakesUsDifferent from '@/components/sections/what-makes-us-different';
import ServicesSection from '@/components/sections/services/ServicesSection';
import CompanyJourney from '@/components/sections/company-journey';

function App() {
  return (
    <div className="overflow-y-auto">
      <Navbar/>
      <Hero/>
      <ClientLogos />
      <ServicesSection />
      <WhatMakesUsDifferent/>
      <CompanyJourney/>
      <Projects />
      <About />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;

