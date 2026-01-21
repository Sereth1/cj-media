'use client';

import { motion } from 'framer-motion';
import { Share2, Users, Code, Bot, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

function ServiceCard({ icon: Icon, title, description, features, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const services = [
  {
    icon: Share2,
    title: 'Social Media & Content',
    description: 'Strategic social media management that builds real engagement and grows your brand.',
    features: ['Strategy & Planning', 'Content Production Support', 'Performance Analytics'],
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Dedicated community specialists who nurture your audience and build brand loyalty.',
    features: ['24/7 Moderation', 'Engagement Strategy', 'Crisis Management'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack web development from landing pages to complex applications.',
    features: ['Frontend & Backend', 'E-commerce Solutions', 'Performance Optimization'],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Custom AI chatbots and workflow automation that save time and enhance CX.',
    features: ['Custom Chatbots', 'Workflow Automation', 'Integration Services'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Services Built for Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From social media strategy to custom development — we provide end-to-end 
            digital solutions tailored to ambitious brands.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
