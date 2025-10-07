# Shrikant Gaikwad - Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 13, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: Image optimization, code splitting, Core Web Vitals monitoring
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Meta tags, structured data, Open Graph
- **Error Handling**: Error boundaries and graceful fallbacks
- **Performance Monitoring**: Core Web Vitals tracking and optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Custom components
- **Performance**: Next.js Image, Web Vitals
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📧 Email Setup

The contact form requires email configuration to work properly:

1. Create a `.env.local` file in your project root
2. Add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. For Gmail, you need to use an App Password instead of your regular password
4. Follow the detailed instructions in [EMAIL_SETUP.md](EMAIL_SETUP.md)

If you don't set up email configuration:

- The form will still appear to work in production (for security)
- You'll see error messages in development
- Consider using a service like [Ethereal Email](https://ethereal.email/) for testing

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build artifacts

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js 13 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # Base UI components
│   ├── sections/          # Page sections
│   ├── navigation.tsx     # Navigation component
│   ├── theme-provider.tsx # Theme context
│   └── error-boundary.tsx # Error handling
├── hooks/                  # Custom React hooks
│   └── use-performance.ts # Performance monitoring
├── lib/                    # Utility functions
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Helper functions
├── public/                 # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization

### Colors and Themes

- Update color schemes in `tailwind.config.ts`
- Modify theme variables in `app/globals.css`
- Customize dark/light mode in `components/theme-provider.tsx`

### Content

- Update personal information in `components/sections/hero.tsx`
- Modify projects in `components/sections/projects.tsx`
- Edit skills in `components/sections/skills.tsx`
- Update experience in `components/sections/experience.tsx`

### Styling

- Customize animations in `components/sections/hero.tsx`
- Modify layout spacing and typography
- Update component variants and props

## 🔧 Development Guidelines

### Code Quality

- **TypeScript**: Use strict typing, avoid `any`
- **ESLint**: Follow Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Components**: Keep components small and focused

### Performance

- **Images**: Use Next.js Image component with proper sizing
- **Lazy Loading**: Implement for non-critical components
- **Bundle Size**: Monitor with `npm run analyze`
- **Core Web Vitals**: Track with performance monitoring

### Accessibility

- **Semantic HTML**: Use proper tags and structure
- **ARIA Labels**: Provide context for screen readers
- **Keyboard Navigation**: Ensure all interactive elements are accessible
- **Color Contrast**: Maintain WCAG AA compliance

### SEO

- **Meta Tags**: Update in `app/layout.tsx`
- **Structured Data**: Modify JSON-LD schema
- **Open Graph**: Customize social media previews
- **Sitemap**: Generate for better indexing

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy `.next` folder
- **AWS Amplify**: Configure build settings for Next.js
- **Docker**: Create custom Dockerfile for containerization

## 📊 Performance Monitoring

The portfolio includes built-in performance monitoring:

- **Core Web Vitals**: CLS, FID, FCP, LCP, TTFB
- **Long Tasks**: Detection and reporting
- **Memory Usage**: Heap size monitoring
- **Render Times**: Component performance tracking

## 🧪 Testing

### Current Status

- Basic error boundary testing
- Performance monitoring
- Type checking with TypeScript

### Future Improvements

- Unit tests with Jest and React Testing Library
- E2E tests with Cypress or Playwright
- Visual regression testing
- Performance testing with Lighthouse CI

## 🔒 Security

- **Dependencies**: Regular updates with `npm audit`
- **Environment Variables**: Use `.env.local` for secrets
- **Content Security Policy**: Implement CSP headers
- **HTTPS**: Enforce secure connections

## 📈 Analytics

### Google Analytics

1. Create Google Analytics 4 property
2. Add tracking ID to environment variables
3. Implement tracking in components

### Performance Monitoring

- Vercel Analytics (built-in)
- Custom performance metrics
- Error tracking and reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Accessible components

## 📞 Contact

- **Portfolio**: [shrikant-portfolio-10.vercel.app](https://shrikant-portfolio-10.vercel.app)
- **GitHub**: [@shrikantg199](https://github.com/shrikantg199)
- **LinkedIn**: [@shrikant11](https://linkedin.com/in/shrikant11)
- **Email**: shrikantg199@gmail.com

---

Built with ❤️ by Shrikant Gaikwad
