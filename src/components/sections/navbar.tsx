"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed  inset-x-0 shadow-md mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>

            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="About">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Services"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/Services">Service Name</HoveredLink>
            <HoveredLink href="/Services">
             Service Name
            </HoveredLink>
            <HoveredLink href="/Services">
              Service Name
            </HoveredLink>
            <HoveredLink href="/Services">Service Name</HoveredLink>
            <HoveredLink href="/Services">
            Service Name
            </HoveredLink>
               </div>
            </MenuItem>
            <MenuItem  setActive={setActive} active={active} item="Product"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/Product">Service Name</HoveredLink>
            <HoveredLink href="/Product">
            Service Name
            </HoveredLink>
            <HoveredLink href="/Product">
            Service Name
            </HoveredLink>
            <HoveredLink href="/Product">Songwriting</HoveredLink>
            <HoveredLink href="/Product">
             Service Name
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/blog"}>
            <MenuItem setActive={setActive} active={active} item="Blog">
            
            </MenuItem>
            </Link>
            <Link href={"/faq"}>
            <MenuItem setActive={setActive} active={active} item="Support">
            
            </MenuItem>
            </Link>
            <Link href={"/Careers"}>
            <MenuItem setActive={setActive} active={active} item="Careers">
            
            </MenuItem>
            </Link>

            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar


// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Rocket } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";


// const navigation = [
//   { name: "What We Do", href: "#services" },
//   { name: "Portfolio", href: "#portfolio" },
//   { name: "Company", href: "#about" },
//   { name: "Careers", href: "#careers" },
//   { name: "Contacts", href: "#contact" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   console.log("")

//   return (
//         <>
//         <h1>hello</h1>
//         </>
//     // <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex justify-between h-20 items-center">
//     //       <div className="flex items-center">
//     //         <Link href="/" className="flex items-center space-x-2">
//     //           <Rocket className="h-8 w-8 text-primary" />
//     //           <div className="flex items-center">
//     //             <span className="font-bold text-xl">Parivartan</span>
//     //             <span className="font-bold text-4xl text-indigo-400 tracking-wide transform scale-110">
//     //               X
//     //             </span>
//     //           </div>
//     //         </Link>
//     //       </div>

//     //       {/* Desktop navigation */}
//     //       <div className="hidden md:flex items-center space-x-8">
//     //         {navigation.map((item) => (
//     //           <Link
//     //             key={item.name}
//     //             href={item.href}
//     //             className="text-muted-foreground hover:text-primary transition-colors"
//     //           >
//     //             {item.name}
//     //           </Link>
//     //         ))}
//     //         {/* <Button>Request Estimate</Button> */}
//     //       </div>

//     //       {/* Mobile navigation */}
//     //       <div className="md:hidden">
//     //         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//     //           <SheetTrigger asChild>
//     //             <Button variant="ghost" size="icon">
//     //               <Menu className="h-6 w-6" />
//     //             </Button>
//     //           </SheetTrigger>
//     //           <SheetContent>
//     //             <div className="flex flex-col space-y-4 mt-4">
//     //               {navigation.map((item) => (
//     //                 <Link
//     //                   key={item.name}
//     //                   href={item.href}
//     //                   onClick={() => setIsOpen(false)}
//     //                   className="text-muted-foreground hover:text-primary transition-colors"
//     //                 >
//     //                   {item.name}
//     //                 </Link>
//     //               ))}
//     //               <Button variant={"secondary"} className="w-full">
//     //                 Request Estimate
//     //               </Button>
//     //             </div>
//     //           </SheetContent>
//     //         </Sheet>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// }