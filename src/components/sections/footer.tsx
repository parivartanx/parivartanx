import { Rocket } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">ParivartanX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming Ideas into Impactful Software Solutions
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Custom Software</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Web Development</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cloud & DevOps</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Instagram</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ParivartanX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}