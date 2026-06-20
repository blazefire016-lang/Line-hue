import { siteContent } from "../data/siteContent";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Check, Sparkles, Palette, ArrowRight, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type PackageId = (typeof siteContent.packages)[number]["id"];

const stepIcons = [Sparkles, Palette, ArrowRight] as const;

export default function Index() {
  const [selected, setSelected] = useState<PackageId | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", details: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSending(true);
    try {
      const pkg = selected
        ? siteContent.packages.find((p) => p.id === selected)
        : null;
      const res = await fetch("https://formspree.io/f/xnjykggz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          package: pkg ? `${pkg.name} — $${pkg.price}` : "Not selected",
          details: form.details,
        }),
      });
      if (!res.ok) throw new Error("Form submission failed");
      toast.success("Inquiry sent! I'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", address: "", details: "" });
      setSelected(null);
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-serif text-xl font-semibold tracking-tight">
            {siteContent.appName}
          </span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#packages" className="transition-colors hover:text-foreground">
              Packages
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a href="#inquiry" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#inquiry">{siteContent.primaryCta}</a>
          </Button>
          {/* Mobile menu trigger — kept minimal for first build */}
          <Button size="icon" variant="ghost" className="sm:hidden" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden border-b border-border/40">
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/3 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl"
          />

          <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>Accepting limited commissions through March</span>
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                {siteContent.tagline}
              </h1>
              <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                {siteContent.description}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#packages">
                    {siteContent.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {siteContent.secondaryCta}
                </Button>
              </div>
              <p className="mt-8 text-xs text-muted-foreground">
                <Shield className="mr-1 inline-block h-3 w-3" />
                Secure payment &middot; Satisfaction guaranteed &middot; Full commercial rights
              </p>
            </div>
          </div>
        </section>

        {/* ─── Artist intro ─── */}
        <section className="border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Palette className="h-7 w-7 text-brand" />
              </div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                Hi, I'm {siteContent.artist.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{siteContent.artist.title}</p>
              <p className="mt-5 text-balance leading-relaxed text-muted-foreground">
                {siteContent.artist.bio}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">Based in {siteContent.artist.location}</p>
            </div>
          </div>
        </section>

        {/* ─── Packages ─── */}
        <section id="packages" className="scroll-mt-24 border-b border-border/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto mb-14 max-w-xl text-center">
              <Badge variant="outline" className="mb-4 border-brand/30 text-brand">
                Pricing
              </Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Commission packages
              </h2>
              <p className="mt-3 text-muted-foreground">
                Choose the tier that fits your project. All prices in {siteContent.packages[0].currency}.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {siteContent.packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="relative flex flex-col transition-all duration-300 hover:border-border/80 hover:shadow-md"
                >
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                    <div className="mt-3">
                      <span className="font-serif text-4xl font-bold tracking-tight">
                        ${pkg.price}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.delivery}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="shrink-0"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span>{pkg.size}</span>
                    </div>
                    <Separator />
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelected(pkg.id);
                        setTimeout(() => {
                          document
                            .getElementById("inquiry")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      Select {pkg.name}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Process ─── */}
        <section id="process" className="scroll-mt-24 border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto mb-14 max-w-xl text-center">
              <Badge variant="outline" className="mb-4 border-brand/30 text-brand">
                How it works
              </Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                From idea to artwork
              </h2>
              <p className="mt-3 text-muted-foreground">
                A simple three-step process designed around collaboration.
              </p>
            </div>
            <div className="relative grid gap-10 md:grid-cols-3">
              {/* Connector line — desktop only */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
              />
              {siteContent.process.map((step, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <div key={step.step} className="relative text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-border bg-background">
                      <Icon className="h-8 w-8 text-brand" />
                    </div>
                    <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-brand-foreground">
                      {step.step}
                    </div>
                    <h3 className="font-serif text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="scroll-mt-24 border-b border-border/40">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <div className="mb-14 text-center">
              <Badge variant="outline" className="mb-4 border-brand/30 text-brand">
                Questions
              </Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Frequently asked
              </h2>
            </div>
            <div className="space-y-4">
              {siteContent.faq.map((item) => (
                <details
                  key={item.q}
                  className="group cursor-pointer rounded-xl border border-border bg-background p-5 transition-colors hover:border-border/80"
                >
                  <summary className="flex items-center justify-between gap-4 text-sm font-medium">
                    {item.q}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 transition-transform group-open:rotate-180"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Inquiry Form ─── */}
        <section id="inquiry" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-xl text-center">
              <Badge variant="outline" className="mb-4 border-brand/30 text-brand">
                Get started
              </Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Book your commission
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell me about your idea and I'll send you a quote within 24 hours.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 max-w-lg space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="pkg">Selected package</Label>
                <div className="flex flex-wrap gap-2">
                  {siteContent.packages.map((pkg) => (
                    <Button
                      key={pkg.id}
                      type="button"
                      variant={selected === pkg.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelected(pkg.id)}
                    >
                      {pkg.name} — ${pkg.price}
                    </Button>
                  ))}
                  {selected && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelected(null)}
                      className="text-muted-foreground"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Alex Rivera"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="alex@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Street, city, postal code"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Tell me about your idea</Label>
                <Textarea
                  id="details"
                  placeholder="Describe the characters, mood, references, or any inspiration you have..."
                  rows={5}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={sending}>
                {sending ? "Sending…" : "Send inquiry"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No payment needed yet. I'll confirm availability and share a quote first.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-muted-foreground">
          <span className="font-serif text-base font-semibold text-foreground">
            {siteContent.appName}
          </span>
          <p>&copy; {new Date().getFullYear()} {siteContent.artist.name}. All rights reserved.</p>
          <p className="text-xs">
            Hand-drawn with care &middot; Built for collaboration &middot; Made in {siteContent.artist.location}
          </p>
        </div>
      </footer>
    </div>
  );
}
