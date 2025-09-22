# MapFix Agency Website

A modern, responsive website for MapFix digital marketing agency, specializing in local SEO, Google Business Profile (GMB) optimization, and Reddit marketing for local businesses. Built with Next.js, React, and TypeScript, featuring a dynamic blog with MDX support.

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive design using Tailwind CSS
- **Performance Optimized**: Next.js App Router for fast loading and SEO
- **Interactive Components**: shadcn/ui components with React hooks for forms, modals, and navigation
- **Contact Forms**: Integrated API route for contact submissions with email notifications
- **Blog System**: Dynamic blog with MDX posts, static generation, and slug-based routing
- **Meeting Scheduling**: Calendly integration and Fillout links for consultations
- **SEO Optimized**: Sitemap generation, metadata handling, and GMB-focused content
- **Responsive**: Mobile-first design with optimized navigation and touch interactions
- **Analytics**: Vercel Analytics integrated for traffic insights

Recent enhancements include:
- Fixed navbar overlapping issues in mobile and desktop views
- Resolved blog content overflow under fixed header with proper padding
- Fixed 404 errors on individual blog posts by updating MDX compilation with `next-mdx-remote/rsc`

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui (Button, Input, Dialog, etc.) + Lucide React icons
- **MDX Blog**: next-mdx-remote for rendering Markdown/MDX posts
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Context for theme and mobile menu
- **Utils**: Custom utilities for class merging and toast notifications
- **Deployment**: Vercel-ready with environment variables

## 📦 Project Structure

```
personal_website/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form handler
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/               # Dynamic post pages (page.tsx)
│   │   ├── layout.tsx            # Blog-specific layout with header
│   │   └── page.tsx              # Blog index listing posts
│   ├── globals.css               # Global Tailwind styles
│   ├── layout.tsx                # Root layout with fonts and analytics
│   ├── page.tsx                  # Home page with sections
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # Reusable React components
│   ├── header.tsx                # Fixed navigation with mobile menu
│   ├── hero-section.tsx          # Homepage hero with CTA
│   ├── services-section.tsx      # Services showcase for local SEO/GMB
│   ├── pricing-section.tsx       # Pricing plans with consultation buttons
│   ├── contact-section.tsx       # Contact form with validation
│   ├── footer.tsx                # Site footer with links
│   ├── calendly-widget.tsx       # Embedded Calendly for scheduling
│   ├── stats-section.tsx         # Performance stats
│   ├── testimonials-section.tsx  # Client testimonials
│   └── ui/                       # shadcn/ui primitives (button, input, etc.)
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile detection hook
│   └── use-toast.ts              # Toast notification hook
├── lib/                          # Utilities
│   └── utils.ts                  # cn() class merger
├── posts/                        # MDX blog content
│   ├── why-local-seo-is-essential.mdx
│   ├── google-business-profile-optimization.mdx
│   ├── why-reddit-marketing-is-necessary-for-local-businesses.mdx
│   └── first-post.mdx            # Sample post
├── public/                       # Static assets
│   ├── placeholder-logo.svg      # Logo and images
│   └── robots.txt                # SEO robots file
├── styles/                       # Additional CSS (if needed)
│   └── globals.css               # (symlink to app/)
├── next.config.mjs               # Next.js config
├── package.json                  # Dependencies including next-mdx-remote
├── tailwind.config.ts            # Tailwind theme config
├── tsconfig.json                 # TypeScript config
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm (project uses pnpm-lock.yaml)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal_website
```

2. Install dependencies:
```bash
pnpm install
# or npm install / yarn install
```

3. Run the development server (runs on port 3002 by default if 3000/3001 in use):
```bash
pnpm dev
# or npm run dev / yarn dev
```

4. Open [http://localhost:3002](http://localhost:3002) in your browser

The blog is accessible at `/blog`, and individual posts at `/blog/[slug]` (e.g., `/blog/why-local-seo-is-essential`).

## 📖 Available Scripts

- `pnpm dev` - Start development server (hot reload enabled)
- `pnpm build` - Build for production
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint for code quality

## 🎨 Customization

### Updating Content

- **Homepage Sections**: Edit `app/page.tsx` and components like `hero-section.tsx`, `services-section.tsx` for services (local SEO, GMB optimization, Reddit marketing).
- **Blog Posts**: Add new MDX files in `/posts/` with frontmatter (title, date, excerpt, tags). Slugs auto-generated from filenames.
- **Company Branding**: Update logo in `/public/`, text in `header.tsx` and `footer.tsx`.
- **Pricing & Testimonials**: Modify arrays in `pricing-section.tsx` and `testimonials-section.tsx`.
- **Contact Links**: Update scheduler URLs in `header.tsx`, `contact-section.tsx`, and pricing buttons.

### Styling & Theme

- Extend Tailwind in `tailwind.config.ts` for custom colors (e.g., brand blues).
- Global styles: `app/globals.css` with Geist fonts.
- Dark mode: Supported via `theme-provider.tsx`.

### Blog Customization

- Post rendering uses `next-mdx-remote/rsc` for secure MDX compilation.
- Customize blog layout in `app/blog/layout.tsx` (includes fixed header with pt-24 padding).
- Add tags/categories by extending frontmatter in MDX files.

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3002
RESEND_API_KEY=your_resend_key_for_emails
NEXT_PUBLIC_CALENDLY_URL=your_calendly_embed_url
```

### Deployment

- Optimized for Vercel: Includes analytics script in `layout.tsx`.
- Build command: `pnpm build`
- Ensure posts directory is included in git for static generation.

## 📱 Responsive Design & Accessibility

- Mobile-first with Tailwind breakpoints.
- Fixed header with backdrop blur, non-overlapping navbar after recent fixes.
- ARIA labels on UI components for screen readers.
- Hydration warnings minimized; contact form uses server actions.

## Recent Fixes & Improvements

- **UI Overlap**: Restructured mobile navigation in `header.tsx` to prevent contact/consultation button overlap.
- **Blog Overflow**: Added `pt-24` padding to blog layout main to clear fixed header.
- **Blog 404s**: Updated MDX handling to use `compileMDX` instead of deprecated `serialize`; enabled direct rendering of compiled content.
- **Static Params**: Auto-generates routes from `/posts/` filenames for SSG.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch: `git checkout -b feature/new-post`
3. Add changes (e.g., new MDX post or component)
4. Commit: `git commit -m 'Add Reddit marketing blog post'`
5. Push: `git push origin feature/new-post`
6. Open a Pull Request

Contributions welcome for new blog content on local marketing topics!

## 📄 License

This project is proprietary and belongs to MapFix Agency. For commercial use, contact us at mapfix.shop.

## 📞 Support & Contact

- Website: [mapfix.shop](https://mapfix.shop)
- Email: Via contact form
- Blog: Read our latest on local SEO, GMB optimization, and Reddit strategies

For consultations on Google Business Profile optimization or Reddit marketing, schedule via the site.

---

Built with ❤️ for local businesses by MapFix Agency

*Last updated: October 2024*