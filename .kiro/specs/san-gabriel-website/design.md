# Design Document

## Overview

The San Gabriel Consulting website will be built as a modern, conversion-focused single-page application with multiple service detail pages. The design follows contemporary web standards with a mobile-first responsive approach, emphasizing clean typography, strategic use of whitespace, and a professional color scheme that builds trust while encouraging action.

The architecture will support fast loading times, smooth animations, and excellent SEO performance while maintaining a scalable codebase that can easily accommodate future service additions and content updates.

## Architecture

### Technology Stack
- **Frontend Framework**: React with Create React App for rapid development
- **Styling**: Tailwind CSS for rapid development and consistent design system
- **Animations**: Framer Motion for smooth, performant animations
- **Form Handling**: React state with basic validation
- **Deployment**: Netlify or Vercel for static hosting
- **Content Management**: JavaScript objects for service content

### Project Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Form.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── TrustIndicators.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ServicesOverview.jsx
│   │   ├── FeaturedServices.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── LeadForm.jsx
│   │   └── Footer.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Navigation.jsx
├── pages/
│   ├── Home.jsx
│   └── ServiceDetail.jsx
├── data/
│   ├── services.js
│   └── content.js
├── styles/
│   └── index.css
├── App.jsx
├── index.js
└── public/
    ├── images/
    └── icons/
```

## Components and Interfaces

### Design System

#### Color Palette
```javascript
const colors = {
  primary: {
    50: '#f0f4f8',
    500: '#1e3a5f', // Deep professional blue
    600: '#1a3252',
    900: '#0f1c2e'
  },
  accent: {
    500: '#f97316', // Vibrant orange for CTAs
    600: '#ea580c'
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    600: '#4b5563',
    900: '#111827'
  }
}
```

#### Typography Scale
```javascript
const typography = {
  h1: 'text-4xl md:text-6xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-2xl md:text-3xl font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
  small: 'text-sm text-neutral-600'
}
```

### Core Components

#### Button Component
```jsx
// Button component with variants and sizes
const Button = ({ variant, size, children, onClick, href, className }) => {
  // Supports 'primary', 'secondary', 'outline' variants
  // Supports 'sm', 'md', 'lg' sizes
  // Can be used as button or link
}
```

#### Card Component
```jsx
// Reusable card component for services and content
const Card = ({ title, description, icon, action, className }) => {
  // Displays title, description, optional icon
  // Optional action button with label and href
}
```

#### Form Components
```jsx
// Form field component with validation
const FormField = ({ label, name, type, required, options, validation }) => {
  // Supports text, email, tel, textarea, select types
  // Optional validation with error display
}
```

### Section Components

#### Hero Section
- Full-width container with gradient background
- Responsive typography scaling
- Two-column layout on desktop (content + visual element)
- Prominent CTA buttons with hover animations
- Scroll indicator for below-the-fold content

#### Trust Indicators
- CSS Grid layout (responsive: 2x2 on mobile, 4x1 on desktop)
- Counter animation using Intersection Observer
- Icon + large number + description structure
- Subtle background patterns for visual interest

#### How It Works
- Horizontal card layout with connecting lines
- Progressive disclosure on mobile (accordion-style)
- Icon + step number + content structure
- Smooth scroll animations between steps

#### Services Overview
- Grid layout with hover effects
- Card-based design with consistent spacing
- Icon + title + description + CTA structure
- Smooth transitions to detail pages

#### Featured Services
- Tabbed interface with smooth transitions
- Expandable content areas
- Structured service information display
- Pre-populated form integration

#### Lead Generation Form
- Two-column responsive layout
- Real-time validation with error states
- Progressive enhancement for better UX
- Success/error state handling
- Integration with email service

## Data Models

### Service Category Model
```javascript
// Service category structure
const serviceCategory = {
  id: 'marketing-outreach',
  name: 'Marketing & Outreach Services',
  description: 'Grow your brand with social media, advertising, and community engagement.',
  icon: 'marketing-icon',
  services: [], // Array of service objects
  slug: 'marketing-outreach'
}
```

### Service Model
```javascript
// Individual service structure
const service = {
  id: 'social-media-management',
  name: 'Social Media Management',
  description: 'End-to-end social media management designed to grow your online presence...',
  deliverables: [
    'Monthly content calendar',
    '12–20 curated posts per month',
    'Engagement monitoring & response'
  ],
  bestFor: ['Small businesses', 'brands launching products', 'influencers'],
  category: 'marketing-outreach',
  featured: true,
  pricing: {
    startingAt: 1500,
    currency: 'USD'
  }
}
```

### Lead Form Model
```javascript
// Lead form data structure
const leadFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  serviceInterest: '',
  description: '',
  budgetRange: '',
  contactMethod: 'email', // 'email' | 'phone' | 'whatsapp'
  timeline: ''
}
```

### Trust Indicator Model
```javascript
// Trust indicator structure
const trustIndicator = {
  id: 'businesses-transformed',
  value: '50+',
  label: 'Businesses Transformed',
  icon: 'growth-icon',
  animationDelay: 0
}
```

## Error Handling

### Form Validation
- Client-side validation using Zod schemas
- Real-time field validation with debouncing
- Clear error messages with field highlighting
- Accessibility-compliant error announcements

### API Error Handling
- Graceful degradation for form submission failures
- Retry mechanisms for transient errors
- User-friendly error messages
- Fallback contact information display

### Loading States
- Skeleton loaders for dynamic content
- Progressive image loading with placeholders
- Form submission loading indicators
- Smooth transitions between states

### 404 and Error Pages
- Custom 404 page with navigation back to main site
- Error boundary components for React errors
- Fallback UI for failed component renders

## Testing Strategy

### Unit Testing
- Component testing with React Testing Library
- Form validation logic testing
- Utility function testing
- Mock API responses for form submission

### Integration Testing
- End-to-end user flows with Playwright
- Form submission workflows
- Navigation and routing
- Mobile responsiveness testing

### Performance Testing
- Lighthouse CI integration
- Core Web Vitals monitoring
- Image optimization validation
- Bundle size analysis

### Accessibility Testing
- Automated a11y testing with axe-core
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast validation

## Performance Optimization

### Image Optimization
- Next.js Image component with automatic optimization
- WebP format with fallbacks
- Lazy loading for below-the-fold images
- Responsive image sizing

### Code Splitting
- Route-based code splitting
- Dynamic imports for heavy components
- Tree shaking for unused code elimination
- Bundle analysis and optimization

### Caching Strategy
- Static generation for service pages
- Edge caching for API routes
- Browser caching for static assets
- Service worker for offline functionality

### SEO Optimization
- Server-side rendering for all pages
- Structured data markup
- Open Graph and Twitter Card meta tags
- XML sitemap generation
- Robots.txt configuration

## Responsive Design

### Breakpoint Strategy
```javascript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px'   // Large desktop
}
```

### Mobile-First Approach
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactive elements
- Optimized mobile navigation

### Layout Adaptations
- Hero: Single column on mobile, two-column on desktop
- Services: Single column on mobile, grid on desktop
- Form: Single column on mobile, two-column on desktop
- Navigation: Hamburger menu on mobile, horizontal on desktop

## Animation and Interaction Design

### Scroll Animations
- Fade-in animations using Intersection Observer
- Staggered animations for card grids
- Parallax effects for hero section
- Smooth scroll behavior for navigation

### Micro-interactions
- Button hover states with scale and color transitions
- Form field focus states
- Loading spinners and progress indicators
- Success/error state animations

### Performance Considerations
- Hardware acceleration for smooth animations
- Reduced motion preferences respect
- Animation duration optimization
- Memory-efficient animation cleanup