# MapFix Agency Website

A modern, responsive website for MapFix digital marketing agency built with Next.js, React, and TypeScript.

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive design
- **Performance Optimized**: Built with Next.js for optimal performance
- **Interactive Components**: Client-side interactivity with React hooks
- **Contact Forms**: Integrated contact functionality
- **Meeting Scheduling**: Direct links to Fillout meeting scheduler
- **Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom UI library with shadcn/ui patterns
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📦 Project Structure

```
mapfixin-agency/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/             # Reusable UI components
│   ├── header.tsx      # Navigation header
│   ├── hero-section.tsx # Hero section
│   ├── services-section.tsx # Services showcase
│   ├── pricing-section.tsx # Pricing plans
│   ├── contact-section.tsx # Contact form
│   └── footer.tsx      # Site footer
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mapfixin-agency
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Content
- **Company Info**: Update brand name and details in header and footer components
- **Services**: Modify `services-section.tsx` to update service offerings
- **Pricing**: Update packages array in `pricing-section.tsx`
- **Contact Links**: Update meeting scheduler URLs in button onClick handlers

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom colors and themes can be modified in Tailwind config

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

### Meeting Scheduler URLs

Update the meeting scheduler links in these files:
- `components/header.tsx` - Header consultation button
- `components/contact-section.tsx` - Contact form button
- `components/pricing-section.tsx` - Pricing plan buttons

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation menu
- Mobile-optimized layouts
- Touch-friendly buttons and interactions
- Optimized images and assets

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and belongs to MapFix Agency.

## 📞 Support

For support or questions about this website, contact the development team.

---

Built with ❤️ by MapFix Agency