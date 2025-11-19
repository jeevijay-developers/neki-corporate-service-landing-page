"use client";

import { Card } from "@/components/ui/card";
import { Home, HandshakeIcon, Hammer, BarChart3 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Home,
    title: "Property Investment Advisory",
    description:
      "Strategic guidance on residential, commercial, and industrial investments—identifying high-potential opportunities aligned with your financial goals and market dynamics.",
  },
  {
    icon: HandshakeIcon,
    title: "Acquisitions & Sales",
    description:
      "Expert support throughout the buying and selling process—from market analysis and negotiation to documentation and legal compliance, ensuring smooth transactions.",
  },
  {
    icon: Hammer,
    title: "Project Development",
    description:
      "Comprehensive project management services for developers—covering feasibility studies, planning, execution, and delivery to achieve timely and profitable project completion.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis & Valuation",
    description:
      "In-depth market research and accurate property valuations based on current trends, location dynamics, and future growth potential to inform strategic decision-making.",
  },
];

export function RealEstateServices() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real Estate Services
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              We offer end-to-end real estate advisory and management services,
              assisting clients in property investments, acquisitions, sales,
              and project development. With a deep understanding of market
              trends, valuation methodologies, and regulatory frameworks, we
              provide strategic guidance that helps investors, developers, and
              individuals make informed decisions.
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
                    <Card className="group p-6 sm:p-8 transition-all hover:shadow-xl h-full">
                      <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
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
          <div className="hidden md:grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-8 transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-balance text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
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
