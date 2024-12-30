"use client";

import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { SocialLinks } from "@/components/sections/contact/SocialLinks";
import { MessageVector } from "@/components/sections/contact/MessageVector";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-br from-background to-background/95 border-indigo-500/10">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                Let&apos;s talk
              </h1>
              <p className="text-muted-foreground">
                To request a quote or want to meet up for coffee, contact us directly
                or fill out the form and we will get back to you promptly.
              </p>
            </div>

            <ContactForm />
            {/* <ContactInfo /> */}
          </div>

          {/* Right Section */}
          <div className="relative hidden md:flex flex-col items-center justify-around bg-gradient-to-br from-violet-500/5 to-violet-600/5 p-12">
            <div className="absolute  top-5 flex items-start justify-center">
              <MessageVector />
            </div>
            <div className="mt-2 pt-48 space-y-8">
             <ContactInfo />

              <SocialLinks />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}