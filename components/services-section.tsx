import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Megaphone, Search, MessageSquare, ArrowRight } from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Business Profile Optimization",
    description:
      "Complete optimization of your Google Business Profile, social media profiles, and online directories.",
    details:
      "We optimize your business listings across 50+ platforms including Google My Business, Yelp, Facebook, and industry-specific directories. This includes professional photos, compelling descriptions, accurate contact information, and strategic keyword placement.",
    benefits:
      "Increases local visibility by 250% and improves customer trust through consistent, professional online presence.",
    stats: "Our clients see 40% more phone calls and 60% more website visits within 30 days.",
  },
  {
    icon: Megaphone,
    title: "Social Media & Google Ads",
    description: "Targeted advertising campaigns on Facebook, Instagram, and Google to reach your ideal customers.",
    details:
      "We create and manage high-converting ad campaigns with precise audience targeting, compelling ad copy, and optimized landing pages. Our team continuously monitors and adjusts campaigns for maximum ROI.",
    benefits: "Generates qualified leads at 50% lower cost than traditional advertising methods.",
    stats: "Average ROAS of 4:1 - for every $1 spent, clients earn $4 in revenue.",
  },
  {
    icon: Search,
    title: "Local Business SEO",
    description: "Improve your search engine rankings for local searches and attract more nearby customers.",
    details:
      "Comprehensive SEO strategy including keyword research, on-page optimization, local citations, review management, and technical SEO improvements. We focus on local search terms that drive foot traffic and phone calls.",
    benefits: "Increases organic website traffic by 200% and improves local search rankings significantly.",
    stats: "SEO increases sales by 30% on average and provides long-term sustainable growth.",
  },
  {
    icon: MessageSquare,
    title: "Organic Reddit Marketing",
    description: "Strategic community engagement and content marketing on Reddit to build brand awareness.",
    details:
      "We identify relevant subreddits, create valuable content, engage authentically with communities, and build your brand reputation through helpful contributions and strategic mentions.",
    benefits: "Builds authentic brand awareness and drives high-quality traffic from engaged communities.",
    stats: "Reddit marketing generates 3x higher engagement rates compared to traditional social media.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Specialized Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to maximize your business growth and online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How It Works:</h4>
                  <p className="text-sm text-muted-foreground">{service.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                  <p className="text-sm text-muted-foreground">{service.benefits}</p>
                </div>
                <div className="bg-accent/5 p-3 rounded-lg">
                  <p className="text-sm font-medium text-accent">{service.stats}</p>
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-accent/10 group-hover:text-accent">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
