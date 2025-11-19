import { Card } from '@/components/ui/card'
import { Award, Heart, TrendingUp, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Deep Expertise',
    description: 'Decades of combined experience across multiple industries and business functions',
  },
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Tailored solutions designed around your unique needs, goals, and challenges',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering measurable outcomes and sustainable growth for clients',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'Built on transparency, ethical practices, and long-term partnerships',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Neki Corporate Service LLP?
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-primary"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="group p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20 transition-transform group-hover:scale-110">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-balance text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
