import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="text-5xl md:text-6xl font-bold font-[var(--font-heading)]">Page not found</h1>
      <p className="mt-4 text-muted-foreground text-center max-w-xl">
        Looks like this page stepped out for espresso. Let’s get you back to Bella Notte.
      </p>
      <Button asChild className="mt-8 rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
