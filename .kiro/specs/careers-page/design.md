# Careers Page Design Document

## Overview

The Careers page will be a new standalone page in the San Gabriel Solutions website that recruits commission-based sales partners. The page will present two distinct sales paths (Inventory Acquisition and Advertising Sales) through a unified hiring advertisement, with a simple application flow that routes candidates based on their preferences.

The design emphasizes clarity around the commission-based compensation model (10-15%), maintains an entrepreneurial tone, and integrates seamlessly with the existing website's design system and component library.

## Architecture

### Page Structure

The Careers page follows the established pattern used by other pages in the application:

```
/careers route
  ├── Careers.jsx (main page component)
  ├── components/sections/careers/
  │   ├── CareersHero.jsx (hero section with headline)
  │   ├── CompensationSection.jsx (commission details)
  │   ├── RolesSection.jsx (two sales paths)
  │   └── ApplicationSection.jsx (unified hiring ad + form)
  └── data/
      └── careersData.js (content and configuration)
```

### Integration Points

- **Routing**: Add `/careers` route to App.jsx Routes configuration
- **Navigation**: Add "Careers" link to Header component navigation menu
- **SEO**: Add careers page configuration to `utils/seo.js`
- **Design System**: Reuse existing Button, Card, and form components

## Components and Interfaces

### 1. Careers Page Component (`pages/Careers.jsx`)

Main page component that orchestrates all career sections.

```javascript
interface CareersProps {
  // No props - standalone page
}

export default function Careers() {
  return (
    <div className="relative">
      <SEO {...pageSEOConfig.careers} />
      <CareersHero />
      <CompensationSection />
      <RolesSection />
      <ApplicationSection />
    </div>
  );
}
```

### 2. CareersHero Component (`components/sections/careers/CareersHero.jsx`)

Hero section with entrepreneurial messaging.

```javascript
interface CareersHeroProps {
  // No props - uses static content
}

// Displays:
// - Headline: "Join Our Sales Team"
// - Subheadline: Performance-based messaging
// - Visual: Background or icon representing partnership
```

### 3. CompensationSection Component (`components/sections/careers/CompensationSection.jsx`)

Displays commission structure prominently.

```javascript
interface CompensationSectionProps {
  commissionRate: string;        // "10-15%"
  commissionBasis: string;        // "collected and paid revenue"
  earningsCap: string;            // "No cap on earnings"
  flexibilityClause: string;      // Case-by-case adjustment text
  disclaimer: string;             // Commission-only disclaimer
}

// Visual treatment:
// - Large, prominent display of 10-15% rate
// - Clear bullet points for key details
// - Highlighted disclaimer box
```

### 4. RolesSection Component (`components/sections/careers/RolesSection.jsx`)

Displays two sales paths side-by-side.

```javascript
interface Role {
  id: string;                     // 'inventory' | 'advertising'
  title: string;                  // Role name
  summary: string;                // Role description
  responsibilities: string[];     // What they onboard/sell
  pitchExamples: string[];        // Example pitches
  compensation: string[];         // Compensation details
  idealCandidate: string[];       // Candidate characteristics
}

interface RolesSectionProps {
  roles: Role[];                  // Array of two roles
}

// Layout:
// - Two-column grid on desktop
// - Stacked on mobile
// - Each role in a Card component
// - Clear visual differentiation between supply/demand
```

### 5. ApplicationSection Component (`components/sections/careers/ApplicationSection.jsx`)

Unified hiring advertisement and application form.

```javascript
interface ApplicationSectionProps {
  hiringAdCopy: {
    title: string;
    description: string;
    benefits: string[];
  };
  onSubmit: (formData: ApplicationFormData) => void;
}

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  salesPathPreference: 'inventory' | 'advertising';
  message?: string;
}

// Features:
// - Hiring ad with benefits list
// - "Apply Now" CTA button
// - Application form (initially hidden, shown on click)
// - Required screening question with radio buttons
// - Form validation
```

## Data Models

### Careers Data Structure (`data/careersData.js`)

```javascript
export const careersData = {
  compensation: {
    rate: "10-15%",
    basis: "collected and paid revenue",
    cap: "No cap on earnings",
    flexibility: "Commission rates for large accounts, bundled packages, regional deals, or special campaigns may be discussed and adjusted on a case-by-case basis.",
    disclaimer: "All positions are commission-based only. There is no salary, hourly wage, or guaranteed income."
  },
  
  roles: [
    {
      id: 'inventory',
      title: 'Inventory Acquisition Sales Partner',
      subtitle: 'Supply-Side Sales',
      summary: 'Bring advertising inventory into the San Gabriel advertising network.',
      responsibilities: [
        'Storefront windows',
        'High-traffic business locations',
        'Property owners',
        'Short-haul trucks',
        'LTL trucks, trailers, and fleets',
        'Owner-operators'
      ],
      pitchExamples: [
        'Earn money from your window.',
        'Turn your truck into a paid billboard.',
        'No extra work. Just extra income.'
      ],
      compensation: [
        '10–15% commission on revenue generated from inventory you onboard',
        'Recurring commission while inventory remains active',
        'Potential for higher rates on volume or regional onboarding'
      ],
      idealCandidate: [
        'Comfortable speaking with business owners',
        'Walk-in sales friendly',
        'Trucking or logistics connections',
        'Self-driven and results-focused'
      ]
    },
    {
      id: 'advertising',
      title: 'Advertising Sales Partner',
      subtitle: 'Demand-Side Sales',
      summary: 'Sell advertising campaigns to businesses and nonprofits.',
      targetCustomers: [
        'Small businesses',
        'Nonprofit organizations',
        'Community groups',
        'Local service providers'
      ],
      pitchExamples: [
        'Advertise on real storefronts.',
        'Get your business seen on local trucks.',
        'Affordable alternatives to digital advertising.'
      ],
      compensation: [
        '10–15% commission on all advertising revenue sold',
        'Recurring commission on campaign renewals',
        'Flexible commission structures for large or bundled campaigns'
      ],
      idealCandidate: [
        'Sales or marketing background',
        'Strong local network',
        'Comfortable presenting value-based offers'
      ]
    }
  ],
  
  hiringAd: {
    title: 'Sales Partners Wanted – Commission Based',
    description: 'San Gabriel Solutions is expanding a location-based advertising network using storefronts, windows, banners, and trucking fleets.',
    responsibilities: [
      'Help businesses and truckers earn extra income',
      'Sell affordable advertising to small businesses and nonprofits'
    ],
    benefits: [
      'Earn 10–15% commission on revenue you bring in',
      'No cap on earnings',
      'Flexible, local opportunities',
      'Training, scripts, and materials provided',
      'One application. Two sales paths.',
      'Placement based on your strengths.'
    ]
  },
  
  applicationForm: {
    screeningQuestion: 'Which best describes you?',
    options: [
      {
        value: 'inventory',
        label: 'I prefer onboarding businesses or truckers to help them earn revenue'
      },
      {
        value: 'advertising',
        label: 'I prefer selling advertising and campaigns'
      }
    ]
  }
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Compensation information completeness
*For any* rendering of the Careers page, the compensation section should display all five required elements: commission rate (10-15%), commission basis (collected and paid revenue), earnings cap statement, flexibility clause, and commission-only disclaimer.
**Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

### Property 2: Role information presence
*For any* rendering of the Careers page, both the Inventory Acquisition Sales Partner role and the Advertising Sales Partner role should be displayed with complete information.
**Validates: Requirements 2.1, 2.2, 2.3**

### Property 3: Pitch examples accuracy
*For any* role displayed on the Careers page, the pitch examples shown should exactly match the specified pitch messages from the requirements document.
**Validates: Requirements 3.1, 3.2, 3.3**

### Property 4: Application flow completeness
*For any* user journey through the application process, the page should display the unified hiring advertisement, an "Apply Now" button, and upon interaction, present a form with the required screening question offering exactly two options.
**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

### Property 5: Entrepreneurial language consistency
*For any* text content displayed on the Careers page, performance-based phrases ("Earn what you close", "Commission on revenue", "No cap on earnings") should be present, and salary/hourly wage language should be absent.
**Validates: Requirements 5.1, 5.2, 5.3**

### Property 6: Design system integration
*For any* UI component rendered on the Careers page, it should use existing components from the design system (Button, Card, Form) and follow established visual patterns.
**Validates: Requirements 6.1, 6.3**

## Error Handling

### Form Validation

- **Required Fields**: Name, email, phone, and sales path preference must be provided
- **Email Format**: Validate email format using standard regex pattern
- **Phone Format**: Accept various phone number formats
- **Error Display**: Show inline validation errors below each field
- **Submit Prevention**: Disable submit button until all required fields are valid

### Navigation Errors

- **404 Handling**: If `/careers` route fails to load, fall back to standard 404 page
- **Component Load Failures**: Use React error boundaries to catch component rendering errors

### Data Loading

- **Static Content**: All careers content is static (no API calls), so no loading states needed
- **Form Submission**: Handle form submission errors gracefully with user-friendly messages

## Testing Strategy

### Unit Testing

Unit tests will verify specific examples and component behavior:

1. **Component Rendering Tests**
   - CareersHero renders with correct headline and subheadline
   - CompensationSection displays all five required elements
   - RolesSection renders both roles with complete information
   - ApplicationSection shows hiring ad and form

2. **Form Validation Tests**
   - Required field validation works correctly
   - Email format validation accepts valid emails and rejects invalid ones
   - Phone format validation handles various formats
   - Screening question requires selection before submission

3. **Content Accuracy Tests**
   - Pitch examples match specified text exactly
   - Commission rate displays as "10-15%"
   - Disclaimer text matches requirements

4. **Integration Tests**
   - Careers route is accessible from navigation
   - "Apply Now" button reveals application form
   - Form submission captures all required data
   - SEO metadata is present and correct

### Property-Based Testing

Property-based tests will verify universal properties across all inputs using **fast-check** library (JavaScript property-based testing framework). Each test will run a minimum of 100 iterations.

1. **Property 1 Test: Compensation information completeness**
   - Generate random page render scenarios
   - Verify all five compensation elements are present in DOM
   - **Feature: careers-page, Property 1: Compensation information completeness**

2. **Property 2 Test: Role information presence**
   - Generate random page render scenarios
   - Verify both roles are present with all required fields
   - **Feature: careers-page, Property 2: Role information presence**

3. **Property 3 Test: Pitch examples accuracy**
   - For each role, verify pitch examples match specification exactly
   - **Feature: careers-page, Property 3: Pitch examples accuracy**

4. **Property 4 Test: Application flow completeness**
   - Simulate user interactions with application section
   - Verify all required elements appear in correct sequence
   - **Feature: careers-page, Property 4: Application flow completeness**

5. **Property 5 Test: Entrepreneurial language consistency**
   - Parse all text content on page
   - Verify performance-based phrases are present
   - Verify salary/wage language is absent
   - **Feature: careers-page, Property 5: Entrepreneurial language consistency**

6. **Property 6 Test: Design system integration**
   - Verify all UI components use existing design system components
   - Check that styling follows established patterns
   - **Feature: careers-page, Property 6: Design system integration**

### Testing Framework Configuration

```javascript
// Property-based testing configuration
import fc from 'fast-check';

// Configure to run minimum 100 iterations per property
const propertyTestConfig = {
  numRuns: 100,
  verbose: true
};

// Example property test structure
describe('Careers Page Properties', () => {
  it('Property 1: Compensation information completeness', () => {
    fc.assert(
      fc.property(
        fc.record({}), // Generate random render scenarios
        (scenario) => {
          // Test implementation
        }
      ),
      propertyTestConfig
    );
  });
});
```

## Visual Design

### Color Palette

- **Primary CTA**: Orange (#F97316) - matches existing Button primary variant
- **Secondary Elements**: Blue (#1E3A8A) - matches existing brand colors
- **Success/Revenue**: Green (#16A34A) - for commission/earnings highlights
- **Text**: Gray scale (#111827, #4B5563, #6B7280)
- **Backgrounds**: White, light gray (#F9FAFB)

### Typography

- **Headlines**: Font-bold, text-3xl to text-5xl
- **Subheadlines**: Font-semibold, text-xl to text-2xl
- **Body**: Font-normal, text-base to text-lg
- **Emphasis**: Font-semibold for key numbers and phrases

### Layout

- **Container**: Max-width-7xl, centered with padding
- **Sections**: Vertical spacing with py-16 to py-24
- **Grid**: Two-column grid for roles (lg:grid-cols-2)
- **Responsive**: Mobile-first, stacks on small screens

### Micro-interactions

- **Buttons**: Hover scale, shadow effects (existing Button component)
- **Cards**: Hover lift and shadow (existing Card component)
- **Form**: Focus states, validation feedback
- **Scroll**: Smooth scroll to application form on "Apply Now" click

## Accessibility

- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- **ARIA Labels**: Add aria-labels to form inputs and buttons
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Focus Indicators**: Visible focus states on all interactive elements
- **Color Contrast**: Maintain WCAG AA contrast ratios
- **Screen Readers**: Provide descriptive text for all content
- **Touch Targets**: Minimum 44px touch targets (existing Button component)

## SEO Configuration

```javascript
// Add to utils/seo.js
export const pageSEOConfig = {
  // ... existing pages
  careers: {
    title: 'Careers - Join Our Sales Team | San Gabriel Solutions',
    description: 'Join San Gabriel Solutions as a commission-based sales partner. Earn 10-15% on revenue with no cap. Two sales paths: inventory acquisition or advertising sales.',
    keywords: 'sales jobs, commission sales, advertising sales, inventory acquisition, sales partner, entrepreneurial opportunities',
    ogType: 'website',
    ogImage: '/sangabriel-hero-image.jpg'
  }
};
```

## Performance Considerations

- **Code Splitting**: Careers page components loaded on-demand via React.lazy if needed
- **Image Optimization**: Use optimized images for any visual elements
- **Bundle Size**: Reuse existing components to minimize additional bundle size
- **Lazy Loading**: Defer loading of application form until "Apply Now" is clicked

## Future Enhancements

- **Form Submission Backend**: Currently form captures data client-side; future integration with backend API
- **Application Tracking**: Track application submissions and route to appropriate sales manager
- **A/B Testing**: Test different messaging and layouts to optimize conversion
- **Video Content**: Add video testimonials from existing sales partners
- **FAQ Section**: Add frequently asked questions about commission structure and roles
