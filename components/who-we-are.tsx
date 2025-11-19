import { Card } from '@/components/ui/card'
import { Building2, Target } from 'lucide-react'

export function WhoWeAre() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="group p-8 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Our Foundation</h3>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Neki Corporate Service LLP is a professionally registered entity with the 
                  Ministry of Corporate Affairs (MCA) and recognised under Startup India.
                </p>
                <p>
                  We operate at the intersection of business development, financial advisory, 
                  real estate services, and women's entrepreneurship—delivering comprehensive 
                  solutions that drive sustainable growth.
                </p>
                <p className="font-medium text-foreground">
                  Our mission is to empower individuals, corporations, entrepreneurs, and women 
                  professionals through expert guidance, strategic advisory, and dedicated support 
                  across four core business verticals.
                </p>
              </div>
            </Card>

            <Card className="group p-8 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Our Vision</h3>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  To be a trusted partner in transformation—enabling businesses to scale efficiently, 
                  individuals to unlock their potential, and communities to thrive through innovation 
                  and inclusive growth.
                </p>
                <p className="font-medium text-foreground">
                  We believe in creating lasting impact by combining deep industry expertise with a 
                  client-first approach, ensuring every engagement delivers measurable value and fosters 
                  long-term success.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
