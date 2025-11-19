"use client";

import { Users, Briefcase, Rocket } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stats = [
  {
    icon: Users,
    number: "200K+",
    label: "Individuals Trained",
    description:
      "Transforming lives through skill development and personal growth programmes",
  },
  {
    icon: Briefcase,
    number: "100+",
    label: "Corporate Clients",
    description:
      "Enhancing organisational performance through tailored corporate training solutions",
  },
  {
    icon: Rocket,
    number: "3,000+",
    label: "Entrepreneurs Supported",
    description:
      "Empowering business owners with strategic guidance and sustainable growth solutions",
  },
];

export function Achievements() {
  return (
    <section className="bg-primary py-16 sm:py-20 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              Training Experts. Lives Inspired.
            </h2>
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
                {stats.map((stat, index) => (
                  <CarouselItem key={index}>
                    <div className=" text-center px-2">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-2 ring-primary-foreground/20">
                        <stat.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="mb-2 text-3xl font-bold">
                        {stat.number}
                      </div>
                      <div className="mb-2 text-base font-semibold">
                        {stat.label}
                      </div>
                      <p className="w-[20rem] mx-auto text-pretty text-xs leading-relaxed text-primary-foreground/80">
                        {stat.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-primary-foreground/20" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-primary-foreground/20" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-2 ring-primary-foreground/20">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="mb-2 text-5xl font-bold">{stat.number}</div>
                <div className="mb-3 text-xl font-semibold">{stat.label}</div>
                <p className="text-pretty text-sm leading-relaxed text-primary-foreground/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
