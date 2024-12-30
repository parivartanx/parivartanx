import { Facebook, Twitter, Instagram } from "lucide-react";

function SocialButton({ Icon, href }: { Icon: any; href: string }) {
  return (
    <a
      href={href}
      className="p-2.5 bg-indigo-500/10 rounded-full text-indigo-400 hover:bg-violet-500/20 transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <SocialButton Icon={Facebook} href="#" />
      <SocialButton Icon={Twitter} href="#" />
      <SocialButton Icon={Instagram} href="#" />
    </div>
  );
}