import { TrendingUp, Users, Star, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Business Growth",
    description: "Our clients experience significant growth in visibility and revenue",
  },
  {
    icon: Users,
    value: "500+",
    label: "Satisfied Clients",
    description: "Local businesses trust us with their digital marketing needs",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Satisfaction",
    description: "Consistently high ratings from our business partners",
  },
  {
    icon: Clock,
    value: "30 Days",
    label: "Average Results Time",
    description: "Most clients see measurable improvements within a month",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results That Speak for Themselves</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our data-driven approach delivers measurable results for businesses across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className="text-sm opacity-80">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Key Performance Indicators</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30%</div>
                <div className="text-sm">Average Sales Increase from SEO</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4:1</div>
                <div className="text-sm">Return on Ad Spend (ROAS)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">250%</div>
                <div className="text-sm">Increase in Local Visibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
