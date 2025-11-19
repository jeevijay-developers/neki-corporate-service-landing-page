"use client";

import { Card } from "@/components/ui/card";
import { Building2, Target } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function WhoWeAre() {
  const cards = [
    {
      icon: Building2,
      title: "Our Foundation",
      content: [
        "Neki Corporate Service LLP is a professionally registered entity with the Ministry of Corporate Affairs (MCA) and recognised under Startup India.",
        "We operate at the intersection of business development, financial advisory, real estate services, and women's entrepreneurship—delivering comprehensive solutions that drive sustainable growth.",
        "Our mission is to empower individuals, corporations, entrepreneurs, and women professionals through expert guidance, strategic advisory, and dedicated support across four core business verticals.",
      ],
    },
    {
      icon: Target,
      title: "Our Vision",
      content: [
        "To be a trusted partner in transformation—enabling businesses to scale efficiently, individuals to unlock their potential, and communities to thrive through innovation and inclusive growth.",
        "We believe in creating lasting impact by combining deep industry expertise with a client-first approach, ensuring every engagement delivers measurable value and fosters long-term success.",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Are
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
                {cards.map((card, index) => (
                  <CarouselItem key={index}>
                    <Card className="group p-6 sm:p-8 transition-all hover:shadow-lg h-fit md:h-full">
                      <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <card.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                      <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <div className="space-y-3 sm:space-y-4 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
                        {card.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className={
                              pIndex === card.content.length - 1
                                ? "font-medium text-foreground"
                                : ""
                            }
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
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
          <div className="hidden lg:grid gap-8 lg:grid-cols-2">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="group p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                  {card.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={
                        pIndex === card.content.length - 1
                          ? "font-medium text-foreground"
                          : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
