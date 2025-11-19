import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Globe, MapPin } from 'lucide-react'

export function ContactUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's Start a Conversation
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you're looking to enhance your team's capabilities, grow your business, 
              invest in real estate, or join our women entrepreneurship platform, we're here to help.
            </p>
          </div>

          <Card className="p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:inbox.neha@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      inbox.neha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+919829955006"
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        +91 9829955006
                      </a>
                      <a
                        href="tel:+917892031623"
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        +91 7892031623
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Website</h3>
                    <a
                      href="https://www.nekimart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      www.nekimart.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Registered Office</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      22, Behind Gumanpura Police Station,
                      <br />
                      Kota 324007, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Corporate Office</h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      Chamrajpet,
                      <br />
                      Bangalore 560018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" className="min-w-[200px]">
                Get in Touch
              </Button>
            </div>
          </Card>

          <p className="mt-8 text-center text-pretty text-sm text-muted-foreground">
            We look forward to partnering with you and creating lasting value together.
          </p>
        </div>
      </div>
    </section>
  )
}
