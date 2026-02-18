import { Zap, Users, Target } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'We explore cutting-edge technologies and implement groundbreaking solutions to solve real-world problems.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description:
        'Build meaningful connections with passionate tech enthusiasts and collaborate on exciting projects.',
    },
    {
      icon: Target,
      title: 'Growth Focused',
      description:
        'Develop technical skills, leadership abilities, and professional expertise through hands-on experience.',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Enigma Tech Club
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enigma Tech Club is a dynamic community of innovators at Ambalika
            Institute of Management & Technology, dedicated to exploring emerging
            technologies and fostering collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 bg-card/30 border border-border/30 rounded-2xl p-8 sm:p-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            To create an environment where students can explore, experiment, and
            excel in technology. We bridge the gap between academic learning and
            practical application, fostering innovation, collaboration, and
            continuous growth.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through workshops, hackathons, and collaborative projects, we
            empower our members to become industry-ready tech professionals who
            can solve complex challenges and drive technological advancement.
          </p>
        </div>
      </div>
    </section>
  )
}
