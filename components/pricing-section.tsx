import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Profile optimization",
    subtitle: "Business Profile optimization",
    price: "$525",
    period: "One-time payment",
    description: "Perfect for Business that are getting ranked poorly on google maps ",
    features: [
      "Google Business Profile optimization",
      "Social media profile setup (3 platforms)",
      "Review management ",
      "Basic SEO optimization",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Marketing",
    subtitle: "Local Marketing",
    price: "$300",
    period: "per month + ad spend",
    description: "Comprehensive advertising across Facebook, Instagram & Google",
    features: [
      "Facebook & Instagram ad campaigns",
      "Google Ads management",
      "Audience research & targeting",
      "Ad creative design",
      "Landing page optimization",
      "Monthly performance reports",
      "Campaign optimization",
    ],
    popular: false,
    cta: "Start Marketing",
  },
  {
    name: "SEO",
    subtitle: "SEO & Social Media",
    price: "$300",
    period: "per month",
    description: "Boost your online presence and appear on top of google search results",
    features: [
      "Local SEO optimization",
      "Keyword research & targeting",
      "Content creation & optimization",
      "Social media management",
      "Review generation & management",
      "Monthly SEO reports",
      "Competitor analysis",
    ],
    popular: false,
    cta: "Boost Visibility",
  },
  {
    name: "Reddit",
    subtitle: "Reddit Marketing",
    price: "$200",
    period: "per month",
    description: "Authentic community engagement and brand building",
    features: [
      "Community engagement",
      "Content creation for Reddit",
      "Brand reputation management",
      "Organic traffic generation",
     
    ],
    popular: false,
    cta: "Join Communities",
  },
  {
    name: "Full solution",
    subtitle: "All-in-One Solution",
    price: "$800",
    period: "per month",
    description: "Everything you need for complete digital dominance",
    features: [
      "Business profile optimization",
      "Social media & Google ads",
      "Complete SEO package",
      "Reddit marketing",
      "Priority support",
      "Dedicated account manager",
      
    ],
    popular: true,
    cta: "Go Complete",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Growth Package</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full ${pkg.popular ? "border-accent shadow-lg md:scale-105" : "border-border"} hover:shadow-lg transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold text-foreground">{pkg.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{pkg.subtitle}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-foreground">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.period}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">
                <ul className="space-y-2 min-h-[180px]">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Button
                    className={`w-full ${pkg.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We create tailored packages for enterprise clients.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
