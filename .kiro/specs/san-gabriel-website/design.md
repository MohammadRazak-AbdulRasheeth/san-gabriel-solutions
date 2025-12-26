# Design Document

## Overview

The San Gabriel Solutions Services section will be rebuilt as a revenue-focused services architecture that positions Traffic Monetization & Advertising Infrastructure as the core differentiator. The design follows the master instructions document structure with 10 services displayed in a specific required order, clear pricing transparency, integrated portfolio proof, and strategic CTAs designed to drive leads, quotes, and partnerships.

The core business model anchors on: **Traffic → Visibility → Monetization**

All services connect back to this central value proposition, with Revenue-Generating Advertising Solutions as the anchor service.

## Architecture

### Technology Stack
- **Frontend Framework**: React (existing Create React App setup)
- **Styling**: Tailwind CSS (existing configuration)
- **Animations**: Framer Motion for smooth, performant animations
- **Routing**: React Router for service navigation
- **Content Management**: JavaScript objects for service content

### Project Structure Updates
```
src/
├── components/
│   ├── sections/
│   │   ├── services/
│   │   │   ├── ServiceHero.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ServicePricing.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── PortfolioItem.jsx
│   │   │   └── FinalCTA.jsx
├── pages/
│   └── Services.jsx
├── data/
│   ├── services.js
│   └── portfolio.js
```


## Components and Interfaces

### Design System Extensions

#### Service-Specific Colors
```javascript
const serviceColors = {
  revenue: '#10B981',      // Green for revenue/monetization
  advertising: '#F59E0B',  // Amber for advertising
  digital: '#3B82F6',      // Blue for digital services
  foundation: '#6B7280'    // Gray for foundational services
}
```

### Core Components

#### ServiceHero Component
```jsx
// Hero section introducing traffic monetization
const ServiceHero = () => {
  // Displays core value proposition
  // Shows Traffic → Visibility → Monetization flow
  // Communicates that San Gabriel converts high-traffic environments into revenue
}
```

#### ServiceCard Component
```jsx
// Individual service display with business case
const ServiceCard = ({ 
  title,           // Service name
  tagline,         // What to say (one-liner)
  businessCase,    // Why this service exists
  services,        // List of specific services/formats
  advantages,      // Design advantages or unique selling points
  pricing,         // Pricing information (if applicable)
  ctas,            // Array of CTA buttons
  portfolioItems,  // Related portfolio examples
  order            // Display order (1-10)
}) => {
  // Renders complete service section with all required information
}
```

#### ServicePricing Component
```jsx
// Clear pricing display
const ServicePricing = ({ 
  amount,          // Price value
  unit,            // Per truck, per window, etc.
  note             // Additional pricing notes
}) => {
  // Displays pricing prominently and transparently
}
```

#### PortfolioSection Component
```jsx
// Visual-first portfolio showcase
const PortfolioSection = ({ 
  items,           // Array of portfolio items
  categories       // Filter categories: windows, trucks, banners, websites, events
}) => {
  // Visual grid of executed work
  // Filterable by category
}
```

#### FinalCTA Component
```jsx
// Bottom of page CTA section
const FinalCTA = () => {
  // Headline: "Turn Visibility Into Revenue"
  // Three CTAs: Monetize My Location, Advertise My Business, Earn With My Trucks
}
```

## Data Models

### Service Model (Updated)
```javascript
const service = {
  id: 'revenue-generating-advertising',
  order: 1,
  name: 'Revenue-Generating Advertising Solutions',
  tagline: 'Turn existing traffic into new income streams',
  businessCase: {
    problems: [
      'Digital advertising costs are rising',
      'Small businesses and nonprofits are priced out',
      'Physical traffic still exists but is under-monetized',
      'Vulnerable businesses need additional revenue'
    ]
  },
  services: [
    'Identify high-traffic locations and routes',
    'Deploy physical and mobile advertising assets',
    'Match advertisers to locations, windows, trucks, and routes',
    'Manage design, pricing, placement, and monetization'
  ],
  advantages: [],
  pricing: null,
  ctas: [
    { label: 'Turn My Traffic Into Revenue', action: 'lead-form', primary: true },
    { label: 'Explore Advertising Options', action: 'scroll-services', primary: false }
  ],
  portfolioItems: [],
  isCore: true
}
```

### Portfolio Item Model
```javascript
const portfolioItem = {
  id: 'kavin10oc-website',
  type: 'website',
  title: 'kavin10oc.com',
  description: 'Website built and launched by San Gabriel Solutions',
  imageUrl: '/portfolio/kavin10oc.jpg',
  url: 'https://kavin10oc.com',
  featured: true,
  relatedServices: ['website-design']
}
```

### Services Data Structure (Required Order)
```javascript
const servicesInOrder = [
  { order: 1, id: 'revenue-generating-advertising', name: 'Revenue-Generating Advertising Solutions' },
  { order: 2, id: 'branding-banners-signs', name: 'Branding, Banners & Signs' },
  { order: 3, id: 'mobile-advertising', name: 'Mobile Advertising – Trucking Fleets' },
  { order: 4, id: 'monetize-location', name: 'Monetize Your Location' },
  { order: 5, id: 'advertise-with-us', name: 'Advertise With Us' },
  { order: 6, id: 'social-media-digital', name: 'Social Media & Digital Advertising' },
  { order: 7, id: 'website-design', name: 'Website Design & Development' },
  { order: 8, id: 'events-community', name: 'Events & Community Advertising' },
  { order: 9, id: 'incorporation-services', name: 'Incorporation & Not-for-Profit Services' },
  { order: 10, id: 'strategy-technology-ai', name: 'Strategy, Technology & AI' }
]
```

### CTA Model
```javascript
const cta = {
  label: 'Turn My Traffic Into Revenue',
  action: 'lead-form',
  servicePreselect: 'revenue-generating-advertising',
  primary: true
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Service Order Consistency
*For any* rendering of the Services page, the services SHALL appear in the exact order specified (1-10), with Revenue-Generating Advertising Solutions always first and Strategy, Technology & AI always last.
**Validates: Requirements 1.3**

### Property 2: Pricing Display Completeness
*For any* service with defined pricing (Mobile Advertising at $300-$500/truck, Monetize Your Location at $200/window), the pricing information SHALL be displayed clearly and include the amount, unit, and any conditional notes.
**Validates: Requirements 4.4, 5.3**

### Property 3: CTA Navigation Integrity
*For any* CTA button click that specifies a lead-form action with servicePreselect, the Lead_Form SHALL open with that specific service pre-selected in the service interest field.
**Validates: Requirements 13.3**

### Property 4: Portfolio Website Attribution
*For any* display of website portfolio items (kavin10oc.com, luxuryautocollision.ca), the display SHALL include the attribution text "Websites built and launched by San Gabriel Solutions".
**Validates: Requirements 8.4, 12.3**

### Property 5: Service Card Content Completeness
*For any* service card rendered, the card SHALL contain: title, tagline/description, business case (why it exists), list of services/formats, and at least one CTA button.
**Validates: Requirements 2.1-2.4, 3.1-3.4, 4.1-4.5, 5.1-5.4, 6.1-6.3, 7.1-7.5, 8.1-8.5, 9.1-9.3, 10.1-10.4, 11.1-11.3**

### Property 6: Final CTA Section Presence
*For any* complete render of the Services page, the bottom of the page SHALL display the final CTA section with headline "Turn Visibility Into Revenue" and exactly three CTA options: "Monetize My Location", "Advertise My Business", "Earn With My Trucks".
**Validates: Requirements 13.1, 13.2**

### Property 7: Responsive Layout Adaptation
*For any* viewport width below 768px, service cards SHALL stack vertically and all interactive elements SHALL have touch-friendly sizing (minimum 44px tap targets).
**Validates: Requirements 14.1**

## Error Handling

### Content Loading
- Graceful fallback if service data fails to load
- Skeleton loaders for portfolio images
- Error boundaries around service sections

### Form Integration
- Validation of service preselection on CTA clicks
- Fallback to general inquiry if service ID not found
- Clear error messages for form submission failures

### Image Loading
- Lazy loading for portfolio images
- Placeholder images for failed loads
- WebP with fallbacks for browser compatibility

## Testing Strategy

### Unit Testing
- Service data structure validation
- CTA action handling
- Pricing display formatting
- Service order verification

### Property-Based Testing
The project will use **fast-check** as the property-based testing library for JavaScript/React.

Each property-based test MUST:
- Run a minimum of 100 iterations
- Be tagged with format: **Feature: san-gabriel-website, Property {number}: {property_text}**
- Reference the correctness property it implements

Property test implementations:
- **Property 1**: Generate random service arrays, verify order is always maintained after sorting
- **Property 2**: Generate services with/without pricing, verify pricing display rules
- **Property 3**: Generate CTA clicks with various service IDs, verify form preselection
- **Property 4**: Generate portfolio renders with website items, verify attribution presence
- **Property 5**: Generate service card data, verify all required fields present
- **Property 6**: Generate page renders, verify final CTA section content
- **Property 7**: Generate viewport sizes below 768px, verify responsive behavior

### Integration Testing
- Full page render with all 10 services
- CTA to lead form navigation
- Portfolio filtering functionality
- Mobile responsive behavior

### Visual Testing
- Service card layout consistency
- Pricing display prominence
- Portfolio grid alignment
- CTA button visibility

## Performance Optimization

### Image Optimization
- Lazy loading for portfolio images below fold
- Responsive image sizing for different viewports
- WebP format with JPEG fallbacks

### Code Splitting
- Lazy load portfolio section
- Dynamic import for service detail modals

### Caching
- Static service data (no API calls)
- Browser caching for portfolio images

## Responsive Design

### Breakpoint Strategy
```javascript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet - stack to grid transition
  lg: '1024px',  // Desktop
  xl: '1280px'   // Large desktop
}
```

### Layout Adaptations
- **Mobile (< 768px)**: Single column, stacked service cards, collapsible business case sections
- **Tablet (768px - 1024px)**: Two-column grid for services, side-by-side CTAs
- **Desktop (> 1024px)**: Full layout with inline portfolio items, expanded business cases

## Animation and Interaction Design

### Scroll Animations
- Fade-in for service cards as they enter viewport
- Staggered animation for service lists
- Smooth scroll to sections on CTA clicks

### Micro-interactions
- CTA button hover states with scale and color transitions
- Portfolio item hover to reveal details
- Pricing highlight on hover

### Performance Considerations
- Respect reduced motion preferences
- Hardware-accelerated animations only
- Debounced scroll handlers
