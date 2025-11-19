"use client";

import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const team = [
  {
    name: "CA Yogesh Chandak, MBA",
    role: "Chief Mentor",
    credentials: "International Training Fellow",
  },
  {
    name: "Ms. Neha Chowdhary, MBA",
    role: "Sr. Training Head",
    credentials:
      "JCI India Author, NLP Master Practitioner and International Trainer",
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Neki Corporate Service LLP is built on a foundation of expertise,
              integrity, and a genuine commitment to client success. Our
              leadership team brings together decades of experience across
              training, financial advisory, real estate, and entrepreneurship
              development.
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
                {team.map((member, index) => (
                  <CarouselItem key={index}>
                    <Card className="group overflow-hidden transition-all hover:shadow-xl h-full">
                      <div className="flex h-40 sm:h-48 items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                        <div className="flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20 transition-transform group-hover:scale-110">
                          <User className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
                        </div>
                      </div>
                      <div className="p-6 sm:p-8 text-center">
                        <h3 className="mb-2 text-xl sm:text-2xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <p className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-primary">
                          {member.role}
                        </p>
                        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                          {member.credentials}
                        </p>
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
          <div className="hidden md:grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20 transition-transform group-hover:scale-110">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-lg font-semibold text-primary">
                    {member.role}
                  </p>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {member.credentials}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
