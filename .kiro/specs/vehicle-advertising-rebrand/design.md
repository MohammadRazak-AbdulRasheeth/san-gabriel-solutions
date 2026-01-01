# Design Document: Vehicle Advertising Website Rebrand

## Overview

This design document outlines the technical implementation for repositioning the San Gabriel Solutions website as a Vehicle Advertising & Mobile Visibility Solutions provider. The implementation will transform the existing React-based website to focus on vehicle advertising as the flagship offering, with transparent pricing, compliance information, and conversion-optimized user flows.

The core positioning is: "Advertise While You Drive" with Rear Window Vehicle Advertising as the flagship product.

## Architecture

### Technology Stack
- **Frontend**: React 18 with React Router for SPA navigation
- **Styling**: Tailwind CSS for responsive, mobile-first design
- **Animations**: Framer Motion for smooth transitions
- **Build**: Create React App (existing infrastructure)
- **Deployment**: Netlify (existing)

### Page Structure
```
/                    → Home (Vehicle Advertising Hero)
/services            → Services (Vehicle Advertising First)
/pricing             → Pricing (Cards with Bundles)
/portfolio           → Portfolio (Vehicle Mockups)
/contact             → Contact (Quote Form)
/careers             → Careers (Commission-Only)
```

### Component Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          (Updated navigation)
│   │   └── Footer.jsx          (Updated CTAs)
│   ├── sections/
│   │   ├── home/
│   │   │   ├── VehicleHero.jsx       (New hero component)
│   │   │   ├── FlagshipProduct.jsx   (Rear Window highlight)
│   │   │   └── PricingPreview.jsx    (Homepage pricing)
│   │   ├── pricing/
│   │   │   ├── PricingCard.jsx       (Individual service card)
│   │   │   ├── BundleCard.jsx        (Bundle packages)
│   │   │   └── ComplianceFooter.jsx  (Material/safety info)
│   │   ├── services/
│   │   │   ├── VehicleServices.jsx   (Primary section)
│   │   │   └── SecondaryServices.jsx (De-prioritized)
│   │   ├── portfolio/
│   │   │   └── VehicleGallery.jsx    (Mockups/before-after)
│   │   └── contact/
│   │       └── QuoteForm.jsx         (Vehicle-specific form)
│   └── ui/
│       ├── Badge.jsx                 (Best Seller badge)
│       └── CTAButton.jsx             (Consistent CTAs)
├── data/
│   ├── pricing.js                    (Pricing configuration)
│   ├── services.js                   (Service definitions)
│   └── compliance.js                 (Material/safety data)
└── pages/
    ├── Home.jsx
    ├── Services.jsx
    ├── Pricing.jsx
    ├── Portfolio.jsx
    ├── Contact.jsx
    └── Careers.jsx
```

## Components and Interfaces

### VehicleHero Component
```jsx
interface VehicleHeroProps {
  headline: string;        // "Advertise While You Drive"
  subheadline: string;     // "Turn Your Vehicle Into a 24/7 Moving Billboard"
  primaryCTA: CTAConfig;   // "Get My Vehicle Wrapped"
  secondaryCTA: CTAConfig; // "Get Realtor Package"
  backgroundImage?: string;
}

interface CTAConfig {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

### PricingCard Component
```jsx
interface PricingCardProps {
  id: string;
  name: string;
  price: number;
  priceUnit?: string;      // "per side" for Vehicle_Side_Ad
  description: string;
  features: string[];
  badge?: 'best-seller' | 'popular' | null;
  ctaText: string;
  ctaHref: string;
}
```

### BundleCard Component
```jsx
interface BundleCardProps {
  id: string;
  name: string;
  price: number;
  targetAudience: string;  // "Ideal for Realtors"
  includes: string[];
  savings?: string;        // "Save $XX"
  badge?: string;
  ctaText: string;
  ctaHref: string;
}
```

### QuoteForm Component
```jsx
interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
}

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  vehicleType: 'sedan' | 'suv' | 'truck' | 'van' | 'trailer' | 'other';
  location: string;        // GTA area
  industry: string;        // Default: "Real Estate"
  logoFile?: File;
  message?: string;
}
```

### ComplianceFooter Component
```jsx
interface ComplianceFooterProps {
  materials: MaterialInfo[];
  regulations: string[];
  disclaimers: string[];
}

interface MaterialInfo {
  placement: string;       // "Rear Window" | "Side/Hood"
  material: string;        // "Perforated Vinyl" | "3M IJ35 Blockout"
  safetyNote: string;
}
```

## Data Models

### Pricing Configuration
```javascript
// src/data/pricing.js
export const PRICING = {
  individual: [
    {
      id: 'rear-window',
      name: 'Rear Window Ad',
      price: 349,
      badge: 'best-seller',
      description: 'Perforated vinyl rear window advertising',
      features: ['Professional design', 'Installation included', 'Perforated vinyl (see-through)'],
      material: 'Perforated Vinyl'
    },
    {
      id: 'vehicle-side',
      name: 'Vehicle Side / Door',
      price: 299,
      priceUnit: 'per side',
      description: 'Side or door panel advertising',
      features: ['Professional design', 'Installation included', '3M IJ35 Blockout Vinyl'],
      material: '3M IJ35 Blockout Vinyl'
    },
    {
      id: 'hood-branding',
      name: 'Vehicle Hood Branding',
      price: 449,
      description: 'Hood wrap advertising',
      features: ['Professional design', 'Installation included', '3M IJ35 Blockout Vinyl'],
      material: '3M IJ35 Blockout Vinyl'
    }
  ],
  bundles: [
    {
      id: 'realtor-starter',
      name: 'Real Estate Starter Pack',
      price: 699,
      targetAudience: 'Ideal for Realtors',
      includes: ['Rear window ad', 'Side panel branding', 'Professional design'],
      savings: null
    },
    {
      id: 'professional-package',
      name: 'Professional Vehicle Package',
      price: 999,
      targetAudience: 'Complete vehicle branding',
      includes: ['Rear window', 'Both sides', 'Hood branding', 'Professional design'],
      savings: null
    },
    {
      id: 'truck-visibility',
      name: 'Straight Truck Visibility Package',
      price: 3299,
      targetAudience: 'Commercial fleets',
      includes: ['Full truck wrap', 'Trailer panels', 'Fleet branding', 'Professional design'],
      savings: null
    }
  ]
};
```

### Compliance Data
```javascript
// src/data/compliance.js
export const COMPLIANCE = {
  materials: [
    {
      placement: 'Rear Window',
      material: 'Perforated Vinyl',
      safetyNote: 'See-through material maintains driver visibility'
    },
    {
      placement: 'Side Panels, Doors, Hood',
      material: '3M IJ35 Blockout Vinyl',
      safetyNote: 'Premium blockout vinyl for non-window surfaces'
    }
  ],
  regulations: [
    'Compliant with Ontario Highway Traffic Act visibility requirements',
    'No solid vinyl on rear windows',
    'Professional installation ensures safety compliance'
  ],
  disclaimers: [
    'Pricing may vary based on vehicle size and complexity',
    'No guaranteed advertising performance claims',
    'Installation times vary by vehicle type'
  ]
};
```

### CTA Configuration
```javascript
// src/data/cta.js
export const PRIMARY_CTAS = {
  getWrapped: {
    text: 'Get My Vehicle Wrapped',
    href: '/contact',
    variant: 'primary'
  },
  realtorPackage: {
    text: 'Get Realtor Package',
    href: '/pricing#realtor-starter',
    variant: 'secondary'
  },
  advertise: {
    text: 'Advertise While You Drive',
    href: '/services',
    variant: 'primary'
  }
};
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the acceptance criteria analysis, the following properties must be validated:

### Property 1: Pricing Card Completeness

*For any* pricing card (individual service or bundle) displayed on the website, the card SHALL contain: a numeric price value, a list of included features, and a CTA button.

**Validates: Requirements 2.1, 2.8**

### Property 2: Vehicle Services Include Pricing

*For any* vehicle advertising service displayed on the Services page, the service SHALL include its associated price.

**Validates: Requirements 3.4**

### Property 3: Non-Rear Window Material Specification

*For any* vehicle advertising product that is NOT a rear window placement, the product description SHALL specify "3M IJ35 Blockout Vinyl" as the material.

**Validates: Requirements 4.2**

### Property 4: No Guaranteed Performance Claims

*For any* text content displayed on the website, the content SHALL NOT contain phrases indicating guaranteed advertising performance (e.g., "guaranteed results", "guaranteed ROI", "guaranteed impressions").

**Validates: Requirements 4.5**

### Property 5: Portfolio Mockup Labeling

*For any* portfolio item that is a mockup or concept (not real executed work), the item SHALL be labeled with "Sample" or "Concept".

**Validates: Requirements 5.3**

### Property 6: Quote Form Data Capture

*For any* valid quote form submission, the system SHALL capture all required fields: name, email, vehicleType, location, and industry.

**Validates: Requirements 6.6**

### Property 7: No Salary Language on Careers Page

*For any* text content displayed on the Careers page, the content SHALL NOT contain salary-related terms (e.g., "salary", "annual pay", "base pay", "hourly rate").

**Validates: Requirements 7.2**

### Property 8: Primary CTA Text Consistency

*For any* primary CTA button on the website, the button text SHALL be one of: "Get My Vehicle Wrapped", "Advertise While You Drive", or "Get Realtor Package".

**Validates: Requirements 8.1**

### Property 9: No Duplicate CTAs Per Section

*For any* page section, there SHALL NOT be duplicate CTA buttons with the same text within that section.

**Validates: Requirements 8.2, 10.4**

### Property 10: CTA Navigation Correctness

*For any* CTA button click, the navigation SHALL route to either the contact/quote form page or the pricing page.

**Validates: Requirements 8.3**

### Property 11: Mobile Touch Target Size

*For any* interactive element (button, link, form input) on mobile viewport, the element SHALL have a minimum touch target size of 44x44 pixels.

**Validates: Requirements 9.3**

### Property 12: Bundle Includes List

*For any* bundle pricing card, the card SHALL contain a non-empty list of included items.

**Validates: Requirements 11.2**

### Property 13: De-emphasized Consulting Language

*For any* homepage content, consulting-focused terms (e.g., "consulting", "advisory", "strategic planning") SHALL NOT appear in primary headlines or hero sections.

**Validates: Requirements 10.2**

## Error Handling

### Form Validation Errors
- **Empty required fields**: Display inline error message below field
- **Invalid email format**: Display "Please enter a valid email address"
- **File upload errors**: Display "File upload failed. Please try again or contact us directly."
- **Form submission failure**: Display toast notification with retry option

### Navigation Errors
- **404 Page Not Found**: Display branded 404 page with navigation back to home
- **Route loading errors**: Display loading skeleton, fallback to error boundary

### Image Loading Errors
- **Portfolio images**: Display placeholder with "Image unavailable" text
- **Hero background**: Fallback to solid brand color background

### Data Loading Errors
- **Pricing data**: Display cached pricing with "Prices may have changed" disclaimer
- **Services data**: Display error state with contact information

## Testing Strategy

### Unit Tests
Unit tests verify specific examples and edge cases:

1. **Component Rendering Tests**
   - VehicleHero renders with correct headline and subheadline
   - PricingCard displays correct price and badge
   - QuoteForm renders all required fields
   - ComplianceFooter displays material information

2. **Data Validation Tests**
   - Pricing configuration matches approved amounts
   - CTA configuration uses approved text options
   - Compliance data includes required materials

3. **Form Behavior Tests**
   - Form validation rejects empty required fields
   - Form submission captures all field values
   - File upload handles valid and invalid files

### Property-Based Tests
Property-based tests verify universal properties across all inputs using **fast-check** library:

1. **Property 1 Test**: Generate random pricing card data, verify completeness
2. **Property 4 Test**: Generate random content strings, verify no performance claims
3. **Property 7 Test**: Generate careers page content, verify no salary terms
4. **Property 8 Test**: Generate CTA configurations, verify text matches approved options
5. **Property 9 Test**: Generate page sections with CTAs, verify no duplicates
6. **Property 11 Test**: Generate interactive elements, verify touch target sizes

### Integration Tests
1. **Navigation Flow**: Verify CTA clicks navigate to correct pages
2. **Form Submission Flow**: Verify quote form submits and captures data
3. **Responsive Layout**: Verify pages render correctly at mobile breakpoints

### Test Configuration
- Property-based tests: Minimum 100 iterations per property
- Test framework: Jest with React Testing Library
- Property testing library: fast-check
- Each property test tagged with: **Feature: vehicle-advertising-rebrand, Property {number}: {property_text}**

