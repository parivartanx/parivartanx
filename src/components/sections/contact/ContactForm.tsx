"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Input
          placeholder="Your Name"
          className="bg-background/50 border-violet-100/20 h-12"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-background/50 border-violet-100/20 h-12"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          className="bg-background/50 border-violet-100/20 min-h-[120px] resize-none"
        />
      </div>
      <Button className="w-full md:w-auto bg-indigo-600 hover:bg-violet-700 text-white">
        Send Message
      </Button>
    </form>
  );
}