"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Johnson's Bakery",
    location: "Seattle, WA",
    rating: 5,
    text: "MapFixIn transformed our online presence completely. Our Google Business Profile went from invisible to the top of local searches. We've seen a 300% increase in foot traffic and our phone hasn't stopped ringing!",
    result: "300% increase in foot traffic",
  },
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Auto Repair",
    location: "Austin, TX",
    rating: 5,
    text: 'The SEO work they did for us is incredible. We went from page 3 to position 1 for "auto repair Austin" in just 2 months. Our revenue has increased by 45% since working with MapFixIn.',
    result: "45% revenue increase",
  },
  {
    name: "Emily Chen",
    business: "Chen's Dental Practice",
    location: "San Francisco, CA",
    rating: 5,
    text: "Their Google Ads management is outstanding. We're getting high-quality leads at half the cost of our previous agency. The ROAS is consistently above 5:1. Highly recommend!",
    result: "5:1 return on ad spend",
  },
  {
    name: "David Thompson",
    business: "Thompson Landscaping",
    location: "Denver, CO",
    rating: 5,
    text: "The Reddit marketing strategy they developed for us was genius. We're now the go-to landscaping company in several local subreddits, and it's driving consistent, high-quality leads.",
    result: "Became #1 in local subreddits",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real businesses, real results. See how MapFixIn has helped local businesses thrive online.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-accent" />
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].business}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-accent">{testimonials[currentIndex].result}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="w-10 h-10 p-0 bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="w-10 h-10 p-0 bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
