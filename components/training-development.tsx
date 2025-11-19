"use client";

import { Card } from "@/components/ui/card";
import { Lightbulb, Building2, User, GraduationCap, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const segments = [
  {
    icon: Lightbulb,
    title: "For Entrepreneurs",
    subtitle: "Entrepreneurship Development",
    points: [
      "Practical solutions to burning business problems",
      "Strategic planning and market positioning",
      "Financial management expertise",
      "Scaling operations effectively",
    ],
  },
  {
    icon: Building2,
    title: "For Corporates",
    subtitle: "Corporate Training Excellence",
    points: [
      "Enhance organisational efficiency",
      "Employee performance improvement",
      "Presentation skills mastery",
      "Leadership and management capabilities",
    ],
  },
  {
    icon: User,
    title: "For Individuals",
    subtitle: "Personal Growth & Empowerment",
    points: [
      "Comprehensive life skills development",
      "Emotional intelligence training",
      "Communication mastery",
      "Resilience-building techniques",
    ],
  },
  {
    icon: GraduationCap,
    title: "For Students",
    subtitle: "Corporate Readiness Programme",
    points: [
      "Professional communication skills",
      "Workplace etiquette training",
      "Interview preparation",
      "Industry-relevant skill development",
    ],
  },
  {
    icon: Heart,
    title: "For All",
    subtitle: "Re-discovering Oneself",
    points: [
      "Nature-based transformation retreats",
      "Neuro-linguistic programming (NLP) workshops",
      "Overcoming limiting beliefs",
      "Unlocking true potential",
    ],
  },
];

export function TrainingDevelopment() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Training & Development: Tailored for Every Journey
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
                {segments.map((segment, index) => (
                  <CarouselItem key={index}>
                    <Card className="group p-5 sm:p-6 transition-all hover:shadow-xl h-full">
                      <div className="mb-3 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                        <segment.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="mb-1 text-lg sm:text-xl font-bold text-foreground">
                        {segment.title}
                      </h3>
                      <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary">
                        {segment.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {segment.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                            <span className="text-pretty leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
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
          <div className="hidden lg:grid gap-6 lg:grid-cols-3">
            {segments.map((segment, index) => (
              <Card
                key={index}
                className="group p-6 transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <segment.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  {segment.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">
                  {segment.subtitle}
                </p>
                <ul className="space-y-2">
                  {segment.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                      <span className="text-pretty leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
