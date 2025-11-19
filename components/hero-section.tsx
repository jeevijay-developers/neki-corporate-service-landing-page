import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-background via-accent/20 to-background flex items-center">
      <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo Placeholder */}
          <div className="mb-4 md:mb-8 flex justify-center">
            <div className="flex h-10 w-auto text-[12px] md:text-[16px] items-center font-semibold justify-center px-3 rounded-full bg-primary/10 ring-2 ring-primary/20">
              <Sparkles className="mr-2 h-3.5 w-3.5 md:h-5 md:w-5" /> Unlocking
              Opportunities
            </div>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Empowering Growth Through{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Integrated Business Solutions
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-[16px] leading-relaxed text-muted-foreground sm:text-xl">
            Operating at the intersection of training & development, financial
            advisory, real estate services, and women's
            entrepreneurship—delivering comprehensive solutions that drive
            sustainable growth.
          </p>

          <div className="flex items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group min-w-40">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-40">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent"></div>
    </section>
  );
}
