import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 animate-glow rounded-2xl overflow-hidden">
              <Image
                src="/enigma.jpg"
                alt="Enigma Technical Club Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
              Welcome to Enigma Technical Club
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Innovation Meets
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover cutting-edge technology, collaborate with brilliant minds,
            and shape the future of innovation at Enigma Tech Club.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors hover:shadow-lg hover:shadow-primary/50"
            >
              Explore More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Floating cards */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Active Members</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-secondary/50 transition-colors">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-colors">
            <div className="text-3xl font-bold text-accent mb-2">20+</div>
            <p className="text-muted-foreground">Annual Events</p>
          </div>
        </div>
      </div>
    </section>
  )
}
