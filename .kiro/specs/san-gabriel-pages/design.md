# Design Document

## Overview

This design extends the San Gabriel Solutions website with enhanced Home, About, Contact, and Insights pages. The implementation builds upon the existing React/Tailwind CSS architecture and integrates with the already-implemented Services section. The design follows the brand guidelines: professional, strategic, trustworthy, results-focused, and modern.

Primary conversion goal: **Consultation / Discovery Call**

## Architecture

### Technology Stack (Existing)
- **Frontend Framework**: React (Create React App)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Testing**: Jest + React Testing Library + fast-check

### Project Structure Updates
```
src/
├── components/
│   ├── sections/
│   │   ├── about/
│   │   │   ├── MissionSection.jsx
│   │   │   ├── ValuesSection.jsx
│   │   │   └── ApproachSection.jsx
│   │   ├── insights/
│   │   │   ├── InsightCard.jsx
│   │   │   ├── InsightGrid.jsx
│   │   │   └── CategoryFilter.jsx
│   │   └── home/
│   │       └── DifferentiatorsSection.jsx
├── pages/
│   ├── Home.jsx (update)
│   ├── About.jsx (update)
│   ├── Contact.jsx (update)
│   ├── Insights.jsx (new)
│   └── InsightDetail.jsx (new)
├── data/
│   ├── insights.js (new)
│   └── differentiators.js (new)
```

## Components and Interfaces

### Home Page Components

#### DifferentiatorsSection Component
```jsx
const DifferentiatorsSection = () => {
  // Displays "Why San Gabriel Solutions" section
  // Shows 4 key differentiators: strategic, professional, trustworthy, results-focused
  // Each differentiator has icon, title, and description
}
```

#### Updated Hero Component
```jsx
// Existing Hero.jsx - ensure CTA button says "Schedule a Consultation"
// Verify value proposition headline is clear and prominent
```

### About Page Components

#### MissionSection Component
```jsx
const MissionSection = () => {
  // Displays company mission and philosophy
  // Emphasizes strategy-first approach
}
```

#### ValuesSection Component
```jsx
const ValuesSection = () => {
  // Displays core values
  // Includes: ethical practices, data-driven results
}
```

#### ApproachSection Component
```jsx
const ApproachSection = () => {
  // Emphasizes long-term partnerships over transactional services
  // Shows partnership philosophy
}
```

### Insights Page Components

#### InsightCard Component
```jsx
const InsightCard = ({
  id,
  title,
  category,
  excerpt,
  publishedDate,
  imageUrl,
  slug
}) => {
  // Displays individual insight article preview
  // Clickable to navigate to full article
}
```

#### InsightGrid Component
```jsx
const InsightGrid = ({
  insights,
  selectedCategory
}) => {
  // Responsive grid layout for insight cards
  // Filters by category when selected
}
```

#### CategoryFilter Component
```jsx
const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  // Filter buttons for: All, Marketing Strategy, Industry Trends, Business Growth
}
```

### Contact Page Updates

#### Enhanced Inquiry Form
```jsx
// Update existing Contact.jsx form to include:
// - Name (required)
// - Email (required, with validation)
// - Company (optional)
// - Phone (optional)
// - Service Interest (required)
// - Message (required)
// - Validation error display
// - Submit button enable/disable based on validation
```

### Navigation Updates

#### Header Component Updates
```jsx
// Update Header.jsx to include Insights link
// Navigation: Home, About, Services, Insights, Contact
```

## Data Models

### Insight Model
```javascript
const insight = {
  id: 'marketing-strategy-2024',
  title: 'Marketing Strategy Trends for 2024',
  category: 'marketing-strategy', // marketing-strategy | industry-trends | business-growth
  excerpt: 'Discover the key marketing strategies...',
  content: '...full article content...',
  publishedDate: '2024-12-15',
  imageUrl: '/insights/marketing-2024.jpg',
  slug: 'marketing-strategy-trends-2024',
  author: 'San Gabriel Team'
}
```

### Insight Categories
```javascript
const insightCategories = [
  { id: 'all', label: 'All Insights' },
  { id: 'marketing-strategy', label: 'Marketing Strategy' },
  { id: 'industry-trends', label: 'Industry Trends' },
  { id: 'business-growth', label: 'Business Growth' }
]
```

### Differentiator Model
```javascript
const differentiator = {
  id: 'strategic',
  title: 'Strategic Approach',
  description: 'We develop comprehensive strategies aligned with your business goals',
  icon: 'Strategy' // Icon component reference
}
```

### Form Validation Schema
```javascript
const formValidation = {
  name: { required: true, minLength: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  company: { required: false },
  phone: { required: false },
  serviceInterest: { required: true },
  message: { required: true, minLength: 10 }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation Link Consistency
*For any* page rendered in the application, the header SHALL contain navigation links to all required pages: Home, About, Services, Insights, Contact.
**Validates: Requirements 6.1**

### Property 2: Footer Presence Consistency
*For any* page rendered in the application, the footer SHALL be present with company information and navigation links.
**Validates: Requirements 6.2**

### Property 3: Contact Form Field Completeness
*For any* rendering of the Contact page inquiry form, the form SHALL contain all required fields: name, email, company, phone, service interest, and message.
**Validates: Requirements 4.2**

### Property 4: Form Validation Error Display
*For any* combination of empty required fields in the inquiry form, validation error messages SHALL be displayed for each empty required field when submission is attempted.
**Validates: Requirements 8.1**

### Property 5: Email Format Validation
*For any* string that does not match a valid email pattern, the inquiry form SHALL display an email format validation error.
**Validates: Requirements 8.2**

### Property 6: Validation Error Removal
*For any* form field displaying a validation error, correcting the field value to a valid state SHALL remove the error message for that field.
**Validates: Requirements 8.3**

### Property 7: Insight Card Content Completeness
*For any* insight card rendered, the card SHALL display: title, category, excerpt, and publication date.
**Validates: Requirements 5.3**

### Property 8: Insight Category Classification
*For any* insight article in the system, it SHALL be categorized as one of: marketing-strategy, industry-trends, or business-growth.
**Validates: Requirements 5.2**

### Property 9: Responsive Layout Adaptation
*For any* viewport width below 768px, page layouts SHALL adapt to mobile-friendly stacked layouts with touch-friendly button sizing (minimum 44px tap targets).
**Validates: Requirements 7.1**

## Error Handling

### Form Validation
- Real-time validation feedback as user types
- Clear error messages below each invalid field
- Prevent submission until all required fields are valid
- Graceful handling of submission failures with retry option

### Navigation
- 404 page for invalid routes
- Redirect to home for undefined insight slugs
- Loading states for page transitions

### Content Loading
- Skeleton loaders for insight cards
- Fallback content if insights data fails to load
- Error boundaries around page sections

## Testing Strategy

### Unit Testing
- Form validation logic
- Navigation link rendering
- Insight card content display
- Category filtering logic

### Property-Based Testing
The project will use **fast-check** as the property-based testing library.

Each property-based test MUST:
- Run a minimum of 100 iterations
- Be tagged with format: **Feature: san-gabriel-pages, Property {number}: {property_text}**
- Reference the correctness property it implements

Property test implementations:
- **Property 1**: Generate page renders, verify all nav links present
- **Property 2**: Generate page renders, verify footer present
- **Property 3**: Generate form renders, verify all fields present
- **Property 4**: Generate combinations of empty required fields, verify error display
- **Property 5**: Generate invalid email strings, verify error display
- **Property 6**: Generate field corrections, verify error removal
- **Property 7**: Generate insight data, verify card displays all fields
- **Property 8**: Generate insights, verify valid category assignment
- **Property 9**: Generate mobile viewports, verify responsive behavior

### Integration Testing
- Full page navigation flow
- Form submission and confirmation
- Insight filtering and navigation
- Mobile responsive behavior

## Responsive Design

### Breakpoint Strategy (Existing)
```javascript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px'   // Large desktop
}
```

### Layout Adaptations
- **Mobile (< 768px)**: Single column, stacked sections, hamburger menu, 44px+ tap targets
- **Tablet (768px - 1024px)**: Two-column grids, side navigation
- **Desktop (> 1024px)**: Full multi-column layouts, hover interactions

## Animation and Interaction Design

### Page Transitions
- Fade-in animations on page load
- Staggered animations for grid items
- Smooth scroll behavior

### Micro-interactions
- Button hover states with scale/color transitions
- Form field focus states
- Card hover effects on insights grid
- Navigation link hover underlines

### Accessibility
- Respect prefers-reduced-motion
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels for form fields

