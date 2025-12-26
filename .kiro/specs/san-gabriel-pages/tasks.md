# Implementation Plan

- [x] 1. Create insights data structure and Insights page






  - [x] 1.1 Create insights data model with sample articles





    - Define insights.js with insight objects containing id, title, category, excerpt, content, publishedDate, imageUrl, slug
    - Include sample articles for each category: marketing-strategy, industry-trends, business-growth
    - Define insightCategories array for filtering
    - _Requirements: 5.2_

  - [x] 1.2 Write property test for insight category classification





    - **Property 8: Insight Category Classification**
    - **Validates: Requirements 5.2**

  - [x] 1.3 Create InsightCard component


    - Build InsightCard.jsx displaying title, category, excerpt, and publication date
    - Add click handler to navigate to full article
    - Include image with lazy loading
    - Style with hover effects
    - _Requirements: 5.3, 5.4_


  - [x] 1.4 Write property test for insight card content completeness


    - **Property 7: Insight Card Content Completeness**
    - **Validates: Requirements 5.3**

  - [x] 1.5 Create InsightGrid and CategoryFilter components


    - Build InsightGrid.jsx with responsive grid layout
    - Build CategoryFilter.jsx with filter buttons for all categories
    - Implement filtering logic
    - _Requirements: 5.1, 5.2_


  - [x] 1.6 Create Insights page

    - Build Insights.jsx with hero section, category filter, and insight grid
    - Add page routing in App.jsx
    - _Requirements: 5.1_

  - [x] 1.7 Create InsightDetail page


    - Build InsightDetail.jsx for full article view
    - Add routing for /insights/:slug
    - Include back navigation and related articles
    - _Requirements: 5.4_

- [x] 2. Update navigation to include Insights link



  - [x] 2.1 Update Header component with Insights navigation


    - Add Insights link to desktop and mobile navigation
    - Ensure navigation order: Home, About, Services, Insights, Contact
    - _Requirements: 6.1, 6.4_


  - [x] 2.2 Write property test for navigation link consistency







    - **Property 1: Navigation Link Consistency**
    - **Validates: Requirements 6.1**

  - [x] 2.3 Write property test for footer presence consistency




    - **Property 2: Footer Presence Consistency**
    - **Validates: Requirements 6.2**

- [x] 3. Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Enhance Home page with differentiators section






  - [x] 4.1 Create differentiators data structure


    - Define differentiators.js with 4 key differentiators: strategic, professional, trustworthy, results-focused
    - Include id, title, description, and icon reference for each
    - _Requirements: 2.2_


  - [x] 4.2 Create DifferentiatorsSection component

    - Build DifferentiatorsSection.jsx displaying "Why San Gabriel Solutions" heading
    - Render 4 differentiator cards with icons
    - Add responsive grid layout
    - _Requirements: 2.1, 2.2_

  - [x] 4.3 Update Home page with differentiators


    - Integrate DifferentiatorsSection into Home.jsx
    - Verify Hero section has "Schedule a Consultation" CTA
    - Ensure services overview section follows hero
    - Verify final CTA section at bottom
    - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.3, 2.4_

- [-] 5. Enhance About page with mission, values, and approach sections




  - [x] 5.1 Update About page content


    - Ensure mission and philosophy section is prominent
    - Add strategy-first approach messaging
    - Include ethical, data-driven values content
    - Emphasize long-term partnerships philosophy
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [-] 6. Enhance Contact page with improved form validation





  - [x] 6.1 Update inquiry form with all required fields

    - Ensure form has: name, email, company, phone, service interest, message fields
    - Mark required fields appropriately
    - Update CTA headline to "Schedule a Discovery Call"
    - Add service area information (Canada / North America)
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 6.2 Write property test for contact form field completeness


    - **Property 3: Contact Form Field Completeness**
    - **Validates: Requirements 4.2**

  - [ ] 6.3 Implement form validation logic


    - Add real-time validation for required fields
    - Implement email format validation with regex
    - Show validation errors below each invalid field
    - Enable/disable submit button based on validation state
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 6.4 Write property test for form validation error display
    - **Property 4: Form Validation Error Display**
    - **Validates: Requirements 8.1**

  - [ ] 6.5 Write property test for email format validation
    - **Property 5: Email Format Validation**
    - **Validates: Requirements 8.2**

  - [ ] 6.6 Write property test for validation error removal
    - **Property 6: Validation Error Removal**
    - **Validates: Requirements 8.3**

  - [ ] 6.7 Implement form submission confirmation
    - Display confirmation message on successful submission
    - _Requirements: 4.5_

- [ ] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement responsive design and accessibility

  - [ ] 8.1 Apply responsive layouts to all new components
    - Ensure mobile-friendly stacked layouts below 768px
    - Verify touch-friendly button sizing (min 44px tap targets)
    - Test insight grid responsiveness
    - _Requirements: 7.1_

  - [ ] 8.2 Write property test for responsive layout adaptation
    - **Property 9: Responsive Layout Adaptation**
    - **Validates: Requirements 7.1**

  - [ ] 8.3 Add accessibility features
    - Implement keyboard navigation support
    - Add ARIA labels to form fields
    - Ensure focus indicators on interactive elements
    - Respect prefers-reduced-motion
    - _Requirements: 7.1_

- [ ] 9. Add animations and micro-interactions

  - Implement fade-in animations on page load
  - Add staggered animations for insight grid items
  - Create smooth scroll behavior for navigation
  - Add hover effects for cards and buttons
  - _Requirements: 7.3, 7.4_

- [ ] 10. Final integration and testing

  - [ ] 10.1 Verify all pages and navigation
    - Test navigation between all pages
    - Verify SPA navigation without full page reload
    - Test mobile menu functionality
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 10.2 Run all property-based tests
    - Execute fast-check tests for all 9 properties
    - Ensure minimum 100 iterations per property
    - Fix any failing tests
    - _Requirements: All correctness properties_

- [ ] 11. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

