"use client";

import { Card } from "@/components/ui/card";
import { PieChart, DollarSign, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: PieChart,
    title: "Investment Planning & Portfolio Management",
    description:
      "We create tailored investment strategies aligned with your financial goals, risk appetite, and growth objectives—ensuring optimal returns and diversified portfolios.",
  },
  {
    icon: DollarSign,
    title: "Strategic Fundraising Solutions",
    description:
      "From venture capital to private equity and debt financing, we assist businesses in securing the right funding at the right time to fuel expansion and innovation.",
  },
  {
    icon: TrendingUp,
    title: "IPO Advisory & Capital Markets",
    description:
      "We provide end-to-end IPO guidance—from regulatory compliance and valuation to investor relations—ensuring a smooth transition to public markets and sustainable long-term success.",
  },
];

export function FinancialAdvisory() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Financial Advisory Services
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              As a trusted financial advisory service, we specialise in
              comprehensive investment planning, strategic fundraising, and
              guiding businesses through the complex process of bringing initial
              public offerings (IPOs) to market.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <Card className="group p-6 sm:p-8 text-center transition-all hover:shadow-xl h-full">
                      <div className="mx-auto mb-4 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <h3 className="mb-3 sm:mb-4 text-balance text-lg sm:text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-balance text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
