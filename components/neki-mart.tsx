"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Globe, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: DollarSign,
    title: "Zero Registration Fees",
    description:
      "Women entrepreneurs can register as vendors for both products and services without any charges—removing financial barriers and enabling everyone to participate.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "We provide ongoing support, training, and resources to help vendors succeed—from digital marketing tips to order management and customer engagement strategies.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description:
      "NekiMart connects women entrepreneurs with customers across India, expanding their market reach beyond local boundaries and creating opportunities for growth and scale.",
  },
  {
    icon: Heart,
    title: "Community & Collaboration",
    description:
      "Join a thriving community of like-minded women entrepreneurs, share experiences, collaborate on projects, and grow together in a supportive ecosystem.",
  },
];

export function NekiMart() {
  return (
    <section className="bg-linear-to-br from-primary/10 via-accent/5 to-primary/10 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              NekiMart: Empowering Women Entrepreneurs
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              We have launched NekiMart, an innovative e-commerce platform
              exclusively designed for women entrepreneurs who work from home.
              Our mission is to empower talented women across India by providing
              them with a digital marketplace to showcase and sell their
              products and services—completely free of cost.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden mb-8 sm:mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <Card className="group p-5 sm:p-6 text-center transition-all hover:shadow-xl h-full">
                      <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                      <h3 className="mb-2 sm:mb-3 text-balance text-base sm:text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
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
          <div className="hidden lg:grid mb-12 gap-6 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-balance text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="min-w-[200px]">
              Visit NekiMart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
