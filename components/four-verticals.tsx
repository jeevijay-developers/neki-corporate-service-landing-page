"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, Building, TrendingUp, Store } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const verticals = [
  {
    icon: GraduationCap,
    title: "Training, Learning & Development",
    description:
      "Comprehensive training solutions for individuals, corporates, students, and entrepreneurs",
  },
  {
    icon: Building,
    title: "Real Estate Services",
    description:
      "End-to-end advisory for property investments, acquisitions, sales, and development",
  },
  {
    icon: TrendingUp,
    title: "Business & Financial Advisory",
    description:
      "Strategic investment planning, fundraising, and IPO guidance for sustainable growth",
  },
  {
    icon: Store,
    title: "Women Entrepreneurship Platform",
    description:
      "NekiMart: An e-commerce platform empowering women entrepreneurs nationwide",
  },
];

export function FourVerticals() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four Verticals, One Vision
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary"></div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {verticals.map((vertical, index) => (
                  <CarouselItem key={index}>
                    <Card className="group p-5 sm:p-6 text-center transition-all hover:shadow-xl h-full">
                      <div className="mx-auto mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <vertical.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 sm:mb-3 text-balance text-base sm:text-lg font-semibold text-foreground">
                        {vertical.title}
                      </h3>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {vertical.description}
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
          <div className="hidden lg:grid gap-6 lg:grid-cols-4">
            {verticals.map((vertical, index) => (
              <Card
                key={index}
                className="group p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <vertical.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-balance text-lg font-semibold text-foreground">
                  {vertical.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {vertical.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
