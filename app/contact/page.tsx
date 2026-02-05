"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import React, { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-12">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Let&apos;s <span className="text-accent">Collaborate</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Have a complex problem that needs a robust solution? I&apos;m currently open for new opportunities.
                    </p>
                </section>

                <Card className="p-8">
                    {isSuccess ? (
                        <div className="text-center space-y-4 py-8">
                            <div className="text-4xl">🚀</div>
                            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="text-muted-foreground">
                                I&apos;ll verify the complexity of your request and get back to you shortly.
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline">
                                Send Another
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                    <Input id="name" required placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                    <Input id="email" type="email" required placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                                <Input id="subject" required placeholder="Project Inquiry" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[150px] w-full rounded-md border border-border bg-black/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell me about the problem you're trying to solve..."
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                                Send Message
                            </Button>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
}
