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
  CheckCircle,
  Loader2,
  Copy,
  Clock,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useState } from "react";
import Image from "next/image";

const contactInfo = [
  {
    icon: "/social-icon/Gmail.png",
    label: "Email",
    value: "shrikantg199@gmail.com",
    href: "mailto:shrikantg199@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Shrikant%2C",
    copyable: true,
  },
  {
    icon: "/social-icon/Phone.png",
    label: "Phone",
    value: "+91 7083099887",
    href: "tel:+917083099887",
    copyable: true,
  },
  {
    icon: "/social-icon/GitHub.png",
    label: "GitHub",
    value: "github.com/shrikantg199",
    href: "https://github.com/shrikantg199",
    copyable: false,
  },
  {
    icon: "/social-icon/Linkedin.png",
    label: "LinkedIn",
    value: "linkedin.com/in/shrikant11",
    href: "https://linkedin.com/in/shrikant11",
    copyable: false,
  },
  {
    icon: "/social-icon/Calendly.png",
    label: "Book a Meeting",
    value: "Schedule a call",
    href: "https://calendly.com/shrikantg199",
    copyable: false,
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must not exceed 500 characters"),
    website: z.string().optional(), // Honeypot field
  });

  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const messageValue = watch("message");

  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    });
  };

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
        if (response.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        } else if (response.status === 500) {
          throw new Error(
            "Server error. Please contact me directly via email."
          );
        } else {
          throw new Error(data.error || "Failed to send email");
        }
      }

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks! I'll get back to you soon.",
      });

      reset();

      // Track analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          event_category: "Contact",
          event_label: "Contact Form",
        });
      }

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
    // Honeypot check
    if (values.website) {
      // Likely a bot, silently fail
      console.log("Bot detected");
      return;
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      toast({
        title: "Please wait",
        description: "You can send another message in a few seconds",
        variant: "destructive",
      });
      return;
    }

    setLastSubmitTime(now);
    await sendEmail(values);
  };

  const handleNewMessage = () => {
    setIsSuccess(false);
    reset();
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to collaborate on your next project? Let's discuss opportunities."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
                      <div
                        key={info.label}
                        className="flex items-center justify-between space-x-4 p-3 rounded-lg hover:bg-muted/30 hover:scale-[1.02] hover:shadow-md transition-all duration-300 group"
                      >
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center space-x-4 flex-1"
                        >
                          <div className="p-2 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-full group-hover:from-primary/20 group-hover:to-blue-600/20 transition-all">
                            <Image
                              src={info.icon}
                              alt={info.label}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">
                              {info.label}
                            </p>
                            <p className="font-semibold group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                          {info.href.startsWith("http") && (
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                        {info.copyable && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() =>
                              handleCopyToClipboard(info.value, info.label)
                            }
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Response Time Indicator */}
                  <div className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Average response time:{" "}
                      <span className="font-semibold ml-1 text-foreground">
                        24 hours
                      </span>
                    </p>
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
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-600 dark:text-green-500 mb-6">
                        Thank you for reaching out! I&#39;ll get back to you
                        within 24 hours.
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
                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        {...register("website")}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div>
                        <Input
                          placeholder="Your name"
                          {...register("name")}
                          className="transition-all focus:scale-[1.01]"
                        />
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
                          className="transition-all focus:scale-[1.01]"
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
                          className="transition-all focus:scale-[1.01]"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your message"
                          rows={4}
                          {...register("message")}
                          maxLength={500}
                          className="transition-all focus:scale-[1.01] resize-none"
                        />
                        <div className="flex justify-between items-center mt-1">
                          <div>
                            {errors.message && (
                              <p className="text-sm text-destructive">
                                {errors.message.message}
                              </p>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {messageValue?.length || 0}/500
                          </p>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full relative overflow-hidden group"
                        disabled={isSending}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSending ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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
