import { Card } from '@/components/ui/card'
import { User } from 'lucide-react'

const team = [
  {
    name: 'CA Yogesh Chandak, MBA',
    role: 'Chief Mentor',
    credentials: 'International Training Fellow',
  },
  {
    name: 'Ms. Neha Chowdhary, MBA',
    role: 'Sr. Training Head',
    credentials: 'JCI India Author, NLP Master Practitioner and International Trainer',
  },
]

export function MeetTheTeam() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Neki Corporate Service LLP is built on a foundation of expertise, integrity, and a 
              genuine commitment to client success. Our leadership team brings together decades 
              of experience across training, financial advisory, real estate, and entrepreneurship 
              development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20 transition-transform group-hover:scale-110">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-lg font-semibold text-primary">{member.role}</p>
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
  )
}
