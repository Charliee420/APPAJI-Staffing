# Website Development Plan — Appaji Staffing Solutions Pvt. Ltd.

## 1. Project Snapshot

| Item | Detail |
|---|---|
| Client | Appaji Staffing Solutions Private Limited |
| Industry | Manpower & Facility Management Services |
| Tagline (hero) | "Manpower & Facility Solutions You Can Trust." |
| Sub-tagline | "YOUR PEOPLE. YOUR PLACE. OUR RESPONSIBILITY." |
| Services strip | Security · Housekeeping · Pest Control · Electric · Plumbing · Garden · Painting · Civil Work · Carpentry · Pantry · Eldercare · Child Care · Driver · Receptionist |
| Brand tone | Professional, trustworthy, no-nonsense, service-industry B2B |
| Goal | A clean, credible marketing site that converts visiting facility managers / HR heads / housing societies into enquiry leads |

## 2. Objectives

1. Establish trust fast — a staffing/facility company lives or dies on perceived reliability.
2. Clearly communicate the full service catalog (14 services) with rich visual imagery and scope matrices.
3. Make "Request a Quote / Contact Us" the dominant call-to-action on every page via instant WhatsApp.
4. Be usable on mobile — most first contact will come via WhatsApp/Google search on phones.
5. Rank for local + service-intent search ("security guard services Bengaluru", "housekeeping staffing company", etc.).
6. Incorporate high-trust client testimonials in an interactive rolling (sliding) carousel.

## 3. Information Architecture / Sitemap

```
Home
├── About Us (Story, Vision, Mission, Leadership Team, 7 Pillars)
├── Services (Catalog of 14 Services)
│   ├── Security Guard Services
│   ├── Housekeeping Services
│   ├── Pest Control Services
│   ├── Electric Services & AMC
│   ├── Plumbing Services
│   ├── Landscaping & Garden Services
│   ├── Painting & Waterproofing
│   ├── Civil Work Services
│   ├── Carpenter Services
│   ├── Pantry & Café Services
│   ├── Eldercare Specialist Services
│   ├── Child Care Services
│   ├── Personal Car Driver Services
│   └── Receptionist Services
├── FAQ (7 Comprehensive Facility Questions & Answers)
├── Gallery (Filterable photo showcase of workforce in action)
├── Careers / Join Our Workforce (Supply-side recruitment funnel)
├── Contact Us (Form + Direct WhatsApp + Telegram + Instagram + Map)
└── Rolling Testimonials Slider (Brigade Panorama, Brigade Orchards, Assetz Marq, etc.)
```

## 4. Page-by-Page Content Plan

### Home
- Hero: tagline + sub-tagline + primary CTA button ("Get a Free Quote" / "Talk to Us")
- Services strip (icons, 7 services, links to detail sections/pages)
- Brand promise banner: "Your Requirement. Our Responsibility."
- Why Choose Appaji — 7 checklist points from the source doc (Reliable Workforce, Professional Approach, Quality-Focused, One-Stop Solution, Client-Centric, Safety & Responsibility, Skilled Personnel)
- Vision/Mission one-liners
- CTA footer band + contact form

### About Us
- Company Overview paragraph
- Vision (full + one-line)
- Mission (bulleted list + one-line)
- Company commitment quote block

### Services (7 sub-sections or pages)
Each service section follows the same template for consistency:
- Icon/illustration
- Tagline (from source doc, e.g. "Protecting People, Property & Peace of Mind.")
- 2–3 sentence description (expand slightly beyond the one-liner in the doc — will need client input or reasonable industry-standard copy)
- "Enquire about this service" micro-CTA

### Contact
- Enquiry form (Name, Company, Service Interested In, Phone, Message)
- Phone / Email / Office address (pending from client)
- Google Map embed (pending address)
- WhatsApp click-to-chat button (common for this industry in India)

### Optional: Careers
- Simple "Join our workforce" form for candidates — useful since staffing companies also need supply-side lead gen.

## 5. Visual/Design Direction

- **Palette:** Navy/steel-blue + white + a warm accent (amber/orange) — conveys trust + energy, standard for security/facility brands in India.
- **Typography:** Strong, clean sans-serif for headings (authority), readable body font.
- **Imagery:** Real or stock photos of uniformed staff, housekeeping, gardens, tools — avoid generic corporate clipart, it undercuts trust for a blue-collar-facing service brand.
- **Icons:** Simple line icons per service for the services strip/grid.
- Will follow structured frontend design practices (spacing, hierarchy, distinct visual identity) rather than a generic template look.

## 6. Tech Stack Recommendation

| Layer | Option A (fastest/cheapest) | Option B (more scalable) |
|---|---|---|
| Frontend | Static HTML/CSS/JS or single React app | Next.js |
| Hosting | Vercel / Netlify / GitHub Pages | Vercel |
| Form handling | Formspree / EmailJS / simple backend endpoint | Custom API route + email service |
| Domain | Client to purchase (e.g. appajistaffing.com) | same |

Given the scope (marketing site, no login/dashboard needed), **Option A is recommended** — lighter, faster to ship, easy to hand off.

## 7. SEO & Content Basics

- Page titles/meta descriptions per service page (if multi-page route chosen)
- Local SEO: Google Business Profile setup (needs city/address)
- Schema.org `LocalBusiness` / `Service` markup
- Alt text on all images
- Fast load (compressed images, minimal JS)

## 8. Build (Draft)

| Phase | Task |
|---|---|---|
| 1 | Finalize sitemap + get remaining client info (see Open Questions) |
| 2 | Wireframe / layout structure | 1 day |
| 3 | Visual design (colors, type, hero, service icons) |
| 4 | Build Home + About + Services |
| 5 | Build Contact + form integration |
| 6 | Content polish, responsive QA, SEO basics |
| 7 | Deploy + handoff |

## 9. Open Questions / Info Still Needed from Client

- [ Bengalore ( Major cities )] City/service area(s) covered (for local SEO + map)
- [ Demo : +91 0987654321 ] Phone number, email, physical office address
- [logo.jpeg ] Logo (existing or needs design?)
- [ https://korifacility.com/ ] Any existing brand for reffrance ?
- [ ] Real photos available, or should we use licensed stock?
- [ multi and Static page (no need of server )] Single-page vs multi-page preference
- [ just add cards it will be added in future ] Any testimonials/client logos to showcase?
- [ need to purchase (appajistaffing.com)] Domain name status (owned already or needs purchase?)

---
*This plan is based on the company overview/services document provided. Update this file as more assets and answers to the open questions come in.*


"very imp" : --> static page where clints gets info and contact to middle man [Vendor] (redirecting to whatsapp , Telegram , Insta Page ) then they can talk 