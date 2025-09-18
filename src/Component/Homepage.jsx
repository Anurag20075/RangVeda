import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  CheckCircle,
  Clock,
  ShieldCheck,
  Star,
  PaintBucket,
  Image,
} from "lucide-react";
import { useState } from "react";
import ContactSection from "./Contact";

// Usage:
// 1) Place this component in your React app (e.g. src/components/HomePaintingLandingPage.jsx)
// 2) Ensure Tailwind CSS is configured in your project.
// 3) Install dependencies: framer-motion and lucide-react
//    npm i framer-motion lucide-react
// 4) Add real images and wire up backend / WhatsApp link / pricing calculator as needed.

export default function HomePage() {
  const services = [
    {
      title: "Budget",
      price: "₹6 - ₹15 / sqft",
      benefits: [
        "Basic prep + 2 coats",
        "Branded emulsion",
        "2-3 day timeline",
      ],
      icon: <PaintBucket className="w-6 h-6" />,
    },
    {
      title: "Standard",
      price: "₹16 - ₹30 / sqft",
      benefits: [
        "Surface repair + primer",
        "Premium emulsion",
        "3-5 day timeline",
      ],
      icon: <PaintBucket className="w-6 h-6" />,
    },
    {
      title: "Premium",
      price: "₹31 - ₹55 / sqft",
      benefits: [
        "Full prep + textures/options",
        "Top-tier brands",
        "5-7 day timeline",
      ],
      icon: <PaintBucket className="w-6 h-6" />,
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1596495577886-d920f3a6e9b4?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1582582494704-3f9f0b4a8c0f?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1542317854-27e07f5e8c8d?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1616627981362-6e4618c7b7da?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=60",
  ];

  const testimonials = [
    {
      name: "Sunita R.",
      quote: "Quick, clean and affordable — my living room looks brand new!",
      rating: 5,
    },
    {
      name: "Amit K.",
      quote: "Transparent pricing and on-time completion. Highly recommend.",
      rating: 5,
    },
    {
      name: "Meera S.",
      quote: "Friendly painters and tidy after the job. Great warranty too.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Hassle-Free & Affordable Home Painting Services
                </h2>
                <p className="mt-4 text-slate-600 max-w-xl">
                  Book online, get instant pricing, and refresh your home
                  stress-free. Trusted painters, clear pricing, and a
                  satisfaction-backed warranty.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-orange-500 text-white shadow hover:scale-[1.02] transition"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="https://wa.me/919000000000"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    <MessageSquare className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-xs">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold">
                        Transparent Pricing
                      </p>
                      <p className="text-xs text-slate-500">
                        No hidden charges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm font-semibold">Fast Turnaround</p>
                      <p className="text-xs text-slate-500">
                        Most jobs 2–7 days
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* before/after demo card */}
                <div className="relative rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="p-6 bg-slate-50 flex flex-col items-center justify-center">
                      <p className="text-xs uppercase text-slate-500 tracking-wide">
                        Before
                      </p>
                      <img
                        src={gallery[0]}
                        alt="before"
                        className="mt-3 w-full h-48 object-cover rounded-md shadow-sm"
                      />
                    </div>
                    <div className="p-6 bg-white flex flex-col items-center justify-center">
                      <p className="text-xs uppercase text-amber-600 tracking-wide">
                        After
                      </p>
                      <img
                        src={gallery[1]}
                        alt="after"
                        className="mt-3 w-full h-48 object-cover rounded-md shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="absolute left-4 bottom-4 bg-white/90 px-3 py-1 rounded-full text-xs shadow">
                    See full gallery
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">Service Packages</h3>
            <p className="text-slate-600 mt-2">
              Choose a package that fits your budget and timeline. Prices are
              indicative — get a tailored estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s) => (
              <motion.article
                key={s.title}
                whileHover={{ y: -6 }}
                className="rounded-xl border p-6 shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{s.title}</h4>
                      <p className="text-sm text-slate-500">{s.price}</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Est. timeline</div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />{" "}
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 text-white text-sm shadow-sm">
                    Select
                  </a>
                  <a className="text-sm text-slate-500">Learn more</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-slate-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <TrustCard
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Professional Painters"
                subtitle="Trained & background-checked"
              />
              <TrustCard
                icon={<CheckCircle className="w-6 h-6" />}
                title="Affordable Rates"
                subtitle="Transparent, competitive pricing"
              />
              <TrustCard
                icon={<Clock className="w-6 h-6" />}
                title="On-Time Completion"
                subtitle="We respect your schedule"
              />
              <TrustCard
                icon={<Star className="w-6 h-6" />}
                title="3-Month Warranty"
                subtitle="Satisfaction & touch-up warranty"
              />
            </div>
          </div>
        </section>

        {/* Portfolio / Gallery */}
        <section
          id="portfolio"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">Portfolio</h3>
            <p className="text-slate-600 mt-2">
              Real before/after photos from recent projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {gallery.map((src, idx) => (
              <figure
                key={src}
                className="rounded-lg overflow-hidden shadow-sm group"
              >
                <img
                  src={src}
                  alt={`project-${idx}`}
                  className="w-full h-44 object-cover transition-transform group-hover:scale-105"
                />
                <figcaption className="p-3 bg-white">
                  <p className="text-sm font-medium">Living room makeover</p>
                  <p className="text-xs text-slate-500">
                    2-day turnaround · Fresh emulsion
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h3 className="text-2xl font-semibold">What our customers say</h3>
            <p className="text-slate-600 mt-2">
              Short reviews from real customers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {testimonials.map((t) => (
              <motion.blockquote
                whileHover={{ y: -4 }}
                key={t.name}
                className="rounded-xl border p-6 shadow-sm bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-slate-600">“{t.quote}”</p>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* Instant Quote CTA */}
        <section
          id="quote"
          className="bg-gradient-to-r from-green-50 to-white py-12"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Calculate My Estimate</h3>
              <p className="text-slate-600">
                Know your cost in 2 minutes — basic estimate without a site
                visit.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a className="inline-flex items-center px-5 py-3 rounded-full bg-orange-500 text-white shadow">
                Calculate My Estimate
              </a>
              <a
                href="https://wa.me/919000000000"
                className="inline-flex items-center px-4 py-3 rounded-full border border-slate-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section
          id="contact"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold">Contact & Booking</h3>
              <p className="text-slate-600 mt-2">
                Fill the form and our estimator will contact you within 24
                hours.
              </p>

              <div className="mt-6 space-y-4">
                <ContactSection />
              </div>
            </div>

            <aside className="rounded-xl border p-6 bg-slate-50">
              <h4 className="font-semibold">Quick Contact</h4>
              <p className="text-sm text-slate-600 mt-2">
                Call or WhatsApp us directly for instant help.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="p-3 rounded-lg bg-white shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">+91 90000 00000</p>
                  <p className="text-sm text-slate-500">Mon–Sat · 9:00–18:00</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-slate-500">Service Areas</p>
                <ul className="text-sm mt-2 space-y-1 text-slate-700">
                  <li>Delhi NCR</li>
                  <li>Gurgaon</li>
                  <li>Noida</li>
                </ul>
              </div>

              <div className="mt-4 flex gap-2">
                <img
                  src="https://seeklogo.com/images/A/asian-paints-logo-273C1AD8A6-seeklogo.com.png"
                  alt="Asian Paints"
                  className="h-8 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/Berger_Paints_Logo.png"
                  alt="Berger"
                  className="h-8 object-contain"
                />
              </div>
            </aside>
          </div>
        </section>
        <a
          href="https://wa.me/+916398802517"
          className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full bg-green-600 text-white shadow-lg"
        >
          <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
        </a>
      </main>
    </div>
  );
}

function TrustCard({ icon, title, subtitle }) {
  return (
    <div className="rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
      <div className="p-3 rounded-lg bg-green-50">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
<ContactSection />;
