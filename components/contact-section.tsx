"use client"

// @ts-nocheck
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Successfully sent the message" })
        reset() // Clear form on success
      } else {
        setSubmitStatus({ success: false, message: result.error || "Failed to send message" })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and discover how we can help your business thrive online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {submitStatus && (
                <Alert className={`${submitStatus.success ? "border-none ring-1 ring-emerald-400/40 bg-gradient-to-r from-emerald-50 to-emerald-100/70 text-emerald-900 dark:from-emerald-950/40 dark:to-emerald-900/30 dark:text-emerald-50 ring-emerald-500/20" : "border-none ring-1 ring-red-400/40 bg-gradient-to-r from-red-50 to-red-100/70 text-red-900 dark:from-red-950/40 dark:to-red-900/30 dark:text-red-50 ring-red-500/20"} rounded-xl shadow-lg animate-in fade-in-50 slide-in-from-top-2 duration-300`}>
                  <CheckCircle className={`h-5 w-5 flex-shrink-0 ${submitStatus.success ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`} />
                  <div className="ml-3">
                    <AlertTitle className={`font-semibold ${submitStatus.success ? "text-emerald-900 dark:text-emerald-50" : "text-red-900 dark:text-red-50"}`}>{submitStatus.success ? "Message Sent!" : "Oops! Something went wrong."}</AlertTitle>
                    <AlertDescription className={`text-sm ${submitStatus.success ? "text-emerald-800 dark:text-emerald-200" : "text-red-800 dark:text-red-200"}`}>{submitStatus.message}</AlertDescription>
                  </div>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="ml-auto h-7 w-7 rounded-md p-1 hover:bg-background/50 transition-colors"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Dismiss</span>
                  </button>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input 
                      placeholder="John" 
                      {...register("firstName")} 
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      {...register("lastName")} 
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")} 
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Business Name</label>
                  <Input 
                    placeholder="Your Business Name" 
                    {...register("businessName")} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    {...register("phoneNumber")} 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your business and how we can help..." 
                    className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`} 
                    {...register("message")} 
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
                <CardDescription>Ready to start your digital transformation? Contact Faheem directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">faheem@mapfix.shop</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">Available via email</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Service Area</div>
                    <div className="text-muted-foreground">Worldwide (Remote)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground border-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Consultation Available</h3>
                <p className="mb-4 opacity-90">
                  Schedule a free 30-minute consultation to discuss your business goals and how we can help you achieve
                  them.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.open("https://mapfix.fillout.com/meet-us", "_blank")}
                >
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
