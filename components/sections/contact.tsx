"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useState } from "react";

const contactInfo = [
  {
    icon: "/social-icon/Gmail.png",
    label: "Email",
    value: "shrikantg199@gmail.com",
    href: "mailto:shrikantg199@gmail.com",
  },
  {
    icon: "/social-icon/Phone.png",
    label: "Phone",
    value: "+91 7083099887",
    href: "tel:+917083099887",
  },
  {
    icon: "/social-icon/GitHub.png",
    label: "GitHub",
    value: "github.com/shrikantg199",
    href: "https://github.com/shrikantg199",
  },
  {
    icon: "/social-icon/Linkedin.png",
    label: "LinkedIn",
    value: "linkedin.com/in/shrikant11",
    href: "https://linkedin.com/in/shrikant11",
  },
  {
    icon: "/social-icon/Calendly.png",
    label: "Book a Meeting",
    value: "Schedule a call",
    href: "https://calendly.com/shrikantg199", // Replace with your actual Calendly/TidyCal link
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const sendEmail = async (values: FormValues) => {
    setIsSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          message: values.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks! I'll get back to you soon.",
      });

      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const onSubmit = async (values: FormValues) => {
    await sendEmail(values);
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to collaborate on your next project? Let's discuss opportunities."
        />

        <div className="max-w-4xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-0 dark:border rounded-xl"
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={info.label}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300"
                      >
                        <div className="p-2 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-full">
                          <img
                            src={info.icon}
                            alt={info.label}
                            className="w-8 h-8 object-contain rounded-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="font-semibold hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-600 mb-6">
                        Thank you for reaching out! I'll get back to you within
                        24 hours.
                      </p>
                      <Button onClick={handleNewMessage} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      className="space-y-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <Input placeholder="Your name" {...register("name")} />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          placeholder="Email address"
                          type="email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          placeholder="Phone number (optional)"
                          type="tel"
                          {...register("phone")}
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your message"
                          rows={4}
                          {...register("message")}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSending}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
