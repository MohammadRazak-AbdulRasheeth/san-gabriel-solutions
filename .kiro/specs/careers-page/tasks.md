# Implementation Plan

- [x] 1. Create careers data structure and content



  - Create `src/data/careersData.js` with all content including compensation details, role information, hiring ad copy, and application form configuration
  - Include all pitch examples, benefits, and candidate characteristics
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 5.4, 5.5_

- [x] 2. Implement CareersHero component





  - Create `src/components/sections/careers/CareersHero.jsx`
  - Display entrepreneurial headline and subheadline
  - Use existing design system styling and ScrollReveal for animations
  - _Requirements: 5.1, 5.2, 5.3, 6.1, 6.3_

- [x] 3. Implement CompensationSection component





  - Create `src/components/sections/careers/CompensationSection.jsx`
  - Display commission rate (10-15%) prominently
  - Show commission basis, earnings cap, flexibility clause, and disclaimer
  - Use visual hierarchy to emphasize key information
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 5.1, 5.2, 6.1, 6.3_


- [x] 4. Implement RolesSection component




  - Create `src/components/sections/careers/RolesSection.jsx`
  - Display both sales paths side-by-side using Card components
  - Show role summaries, responsibilities, pitch examples, compensation, and ideal candidate traits
  - Implement responsive grid layout (two columns on desktop, stacked on mobile)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 6.1, 6.3_



- [x] 5. Implement ApplicationSection component



  - Create `src/components/sections/careers/ApplicationSection.jsx`
  - Display unified hiring advertisement with benefits list
  - Implement "Apply Now" CTA button
  - Create application form with name, email, phone, and sales path preference fields
  - Add required screening question with two radio button options
  - Implement form validation (required fields, email format, phone format)
  - Show/hide form on "Apply Now" button click
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.4, 5.5, 6.1, 6.3_

- [x] 6. Create main Careers page component




  - Create `src/pages/Careers.jsx`
  - Compose all career sections (Hero, Compensation, Roles, Application)
  - Add SEO component with careers page metadata
  - _Requirements: 6.1, 6.3, 6.5_

- [x] 7. Integrate Careers page into application





  - Add `/careers` route to `src/App.jsx`
  - Add "Careers" navigation link to Header component
  - Add careers SEO configuration to `src/utils/seo.js`
  - _Requirements: 6.2, 6.5_

- [x] 8. Checkpoint - Ensure all tests pass











  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Write unit tests for careers data






  - Create `src/data/careersData.test.js`
  - Test data structure completeness
  - Verify all required fields are present
  - Test pitch examples match specification
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 3.1, 3.2, 3.3_

- [ ]* 10. Write unit tests for CareersHero component
  - Create `src/components/sections/careers/CareersHero.test.js`
  - Test component renders with correct headline
  - Verify entrepreneurial tone in messaging
  - _Requirements: 5.1, 5.2, 5.3_

- [ ]* 11. Write unit tests for CompensationSection component
  - Create `src/components/sections/careers/CompensationSection.test.js`
  - Test all five compensation elements are rendered
  - Verify commission rate displays as "10-15%"
  - Test disclaimer text is present and correct
  - Verify no salary/wage language is present
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 5.2_

- [ ]* 12. Write unit tests for RolesSection component
  - Create `src/components/sections/careers/RolesSection.test.js`
  - Test both roles are rendered
  - Verify role differentiation (supply-side vs demand-side)
  - Test pitch examples are displayed correctly
  - Verify ideal candidate characteristics are shown
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.4_

- [ ]* 13. Write unit tests for ApplicationSection component
  - Create `src/components/sections/careers/ApplicationSection.test.js`
  - Test hiring ad is displayed
  - Verify "Apply Now" button is present
  - Test form appears on button click
  - Verify screening question with two options
  - Test form validation (required fields, email format)
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ]* 14. Write unit tests for Careers page
  - Create `src/pages/Careers.test.js`
  - Test all sections are rendered
  - Verify SEO metadata is present
  - Test page structure and layout
  - _Requirements: 6.1, 6.3, 6.5_

- [ ]* 15. Write property test for compensation information completeness
  - **Property 1: Compensation information completeness**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**
  - Generate random page render scenarios
  - Verify all five compensation elements are present in DOM
  - Run minimum 100 iterations

- [ ]* 16. Write property test for role information presence
  - **Property 2: Role information presence**
  - **Validates: Requirements 2.1, 2.2, 2.3**
  - Generate random page render scenarios
  - Verify both roles are present with all required fields
  - Run minimum 100 iterations

- [ ]* 17. Write property test for pitch examples accuracy
  - **Property 3: Pitch examples accuracy**
  - **Validates: Requirements 3.1, 3.2, 3.3**
  - For each role, verify pitch examples match specification exactly
  - Run minimum 100 iterations

- [ ]* 18. Write property test for application flow completeness
  - **Property 4: Application flow completeness**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**
  - Simulate user interactions with application section
  - Verify all required elements appear in correct sequence
  - Run minimum 100 iterations

- [ ]* 19. Write property test for entrepreneurial language consistency
  - **Property 5: Entrepreneurial language consistency**
  - **Validates: Requirements 5.1, 5.2, 5.3**
  - Parse all text content on page
  - Verify performance-based phrases are present
  - Verify salary/wage language is absent
  - Run minimum 100 iterations

- [ ]* 20. Write property test for design system integration
  - **Property 6: Design system integration**
  - **Validates: Requirements 6.1, 6.3**
  - Verify all UI components use existing design system components
  - Check that styling follows established patterns
  - Run minimum 100 iterations

- [ ]* 21. Write integration tests for Careers page navigation
  - Create integration test in `src/App.integration.test.js`
  - Test navigation to /careers route from header
  - Verify page loads correctly
  - Test "Apply Now" button interaction
  - _Requirements: 6.2, 4.2, 4.3_

- [ ] 22. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
