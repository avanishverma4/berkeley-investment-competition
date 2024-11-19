"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/svg";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/placeholder.svg"
          alt="Students collaborating over financial charts with UC Berkeley's Sather Gate in the background"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl mb-4">
            UC Berkeley Investment Competition 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            For Middle and High School Students
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Register Now!
          </Button>
        </div>
      </section>

      {/* This Competition is for You If... Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            This Competition is for You If...
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "You're interested in investment",
              "You want to learn about finance",
              "You enjoy problem-solving",
            ].map((item, index) => (
              <Card
                key={index}
                className="flex items-center p-6 transition-shadow hover:shadow-lg"
              >
                <Image
                  src={`/placeholder.svg?text=${index + 1}`}
                  alt={`Icon for ${item}`}
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <p className="text-lg">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About UC Berkeley Finance Club */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            About UC Berkeley Finance Club
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
              <p className="mb-6">
                To foster a strong understanding of finance and investment
                within the campus community.
              </p>
              <h3 className="mb-4 text-2xl font-semibold">What We Offer</h3>
              <ul className="mb-6 list-inside list-disc">
                <li>Hands-on workshops</li>
                <li>Speaker events with industry professionals</li>
                <li>Engaging competitions</li>
              </ul>
              <h3 className="mb-4 text-2xl font-semibold">
                Join Our Community
              </h3>
              <p>
                Empowering students from diverse backgrounds to explore their
                interests in finance.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Corporate Finance",
                  "Investment Banking",
                  "Equity Research",
                  "Portfolio Management",
                ].map((area, index) => (
                  <Card
                    key={index}
                    className="p-4 text-center transition-shadow hover:shadow-md"
                  >
                    <Image
                      src={`/placeholder.svg?text=${index + 1}`}
                      alt={`Icon for ${area}`}
                      width={50}
                      height={50}
                      className="mx-auto mb-2"
                    />
                    <p>{area}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does the Competition Work? */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            How Does the Competition Work?
          </h2>
          <div className="flex flex-col items-start justify-between md:flex-row">
            {[
              {
                title: "Form Your Team",
                content:
                  "Team size: 2-5 students per team (all team members must be from the same school).",
                icon: "👥",
              },
              {
                title: "Preliminary Round",
                content:
                  "Submit a pitch deck evaluating a stock (Middle School) or within a specific industry (High School).",
                icon: "📊",
              },
              {
                title: "Final Round",
                content:
                  "8 finalist teams from each category present live on Zoom to judges (10-minute presentation + 5-minute Q&A).",
                icon: "🏆",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="mb-8 flex flex-1 flex-col items-center text-center md:mb-0"
              >
                <div className="mb-4 text-4xl">{step.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p>{step.content}</p>
                {index < 2 && (
                  <div className="mt-4 hidden text-4xl text-blue-500 md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Categories</h2>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            {[
              {
                title: "Middle School Category",
                grades: "Grades: 6 - 8 (Year 7 - 9)",
              },
              {
                title: "High School Category",
                grades: "Grades: 9 - 12 (Year 10 - 13)",
              },
            ].map((category, index) => (
              <Card key={index} className="flex-1 max-w-md">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{category.grades}</p>
                  <Image
                    src={`/placeholder.svg?text=Category ${index + 1}`}
                    alt={`Image representing ${category.title}`}
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Take on the Challenge?
          </h2>
          <p className="mb-8 text-xl">
            Register Now and Start Your Investment Journey!
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Register Now!
          </Button>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* FAQs */}
            <div>
              <h2 className="mb-8 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible>
                {[
                  {
                    question: "Who can participate in the competition?",
                    answer:
                      "Middle and high school students can participate in their respective categories.",
                  },
                  {
                    question: "How do I register my team?",
                    answer:
                      "You can register your team through our online registration form. Make sure all team members are from the same school.",
                  },
                  {
                    question: "What is the format of the competition?",
                    answer:
                      "The competition consists of a preliminary round with pitch deck submissions, followed by a final round where selected teams present live to judges.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            {/* Testimonials */}
            <div>
              <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>
              {[
                {
                  quote:
                    "This competition opened my eyes to the world of finance and investing. It was an incredible learning experience!",
                  author: "Sarah L., High School Participant",
                },
                {
                  quote:
                    "The UC Berkeley Investment Competition challenged me to think critically and apply financial concepts in real-world scenarios.",
                  author: "Michael T., Middle School Participant",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="pt-6">
                    <p className="mb-2 italic">"{testimonial.quote}"</p>
                    <p className="text-right font-semibold">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Contact Information
              </h3>
              <p>Email: info@ucberkeleyinvestment.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#">
                  <FacebookIcon />
                </Link>
                <Link href="#">
                  <TwitterIcon />
                </Link>
                <Link href="#">
                  <InstagramIcon />
                </Link>
                <Link href="#">
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">About the Competition</Link>
                </li>
                <li>
                  <Link href="#">Categories</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 UC Berkeley Finance Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
