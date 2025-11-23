# Julien Butty - Portfolio Freelance

Site portfolio moderne pour développeur freelance basé à Lyon, spécialisé en développement web, WordPress et applications sur mesure.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript 5
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Data**: Static TypeScript files (simple & fast)
- **Deployment**: Netlify
- **Performance**: Lighthouse > 90, FCP < 1.5s, Bundle < 100KB gzipped

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Card, Input, etc.)
│   └── sections/        # Page sections (Hero, Services, Contact, Footer)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (animations, validators, utils)
├── styles/              # Global styles, Tailwind config
├── types/               # TypeScript type definitions
├── data/                # Content data (edit services.ts to update)
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## 🎨 Design Philosophy

- **"Resonant Stark" aesthetic**: Minimalist and clean with strategic "wow" moments
- **Dark mode default**: With indigo/violet electric accents
- **Mobile-first**: Fully responsive 320px-2560px
- **Performance-first**: GPU-accelerated animations, lazy loading
- **Accessibility**: WCAG 2.1 AA compliant, prefers-reduced-motion support

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your Git repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

See `netlify.toml` for detailed configuration.

## 📄 Features

- ✅ Modern, animated homepage with hero section
- ✅ 3 service offerings (WordPress, Web Apps, Features)
- ✅ Contact form with Netlify Forms integration
- ✅ Static content (fast, simple, no CMS needed)
- ✅ SEO optimized for local Lyon market
- ✅ RGPD/GDPR compliant
- ✅ Bundle size < 100KB gzipped

## ✏️ Edit Content

To update your services, simply edit:

**`src/data/services.ts`**

Each service has:
- `name`: Service name
- `shortDescription`: One-line pitch
- `description`: Full description (supports markdown)
- `icon`: Icon name (wordpress, code, settings)
- `pricingGuidance`: Price indication or "Sur devis"

Then rebuild: `npm run build`

## 📚 Documentation

- [Project Status](./PROJECT_STATUS.md) - Current state and next steps

## 🧪 Testing

```bash
# Manual testing checklist
- [ ] Homepage loads in < 3 seconds
- [ ] All sections visible on mobile/tablet/desktop
- [ ] Animations smooth and respectful of prefers-reduced-motion
- [ ] Contact form submits successfully
- [ ] Portfolio filtering works
- [ ] Images lazy-load and use WebP format
- [ ] Keyboard navigation works
- [ ] Lighthouse scores > 90 (Performance, Accessibility, Best Practices, SEO)
```

## 📝 License

© 2025 Julien Butty. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. For inquiries, please contact via the website contact form.

---

**Built with ❤️ in Lyon, France**
