# Implementation Plan: Vehicle Advertising Website Rebrand

## Overview

This implementation plan transforms the San Gabriel Solutions website to focus on Vehicle Advertising & Mobile Visibility Solutions. Tasks are organized to build core data structures first, then components, then page integration, with testing throughout.

## Tasks

- [x] 1. Set up data layer and configuration
  - [x] 1.1 Create pricing configuration file with approved amounts
    - Create `src/data/vehiclePricing.js` with individual services ($349, $299, $449) and bundles ($699, $999, $3,299)
    - Include badge configurations (Best Seller for rear window)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_
  - [x] 1.2 Create compliance data file
    - Create `src/data/compliance.js` with material specifications (Perforated Vinyl, 3M IJ35)
    - Include Ontario safety regulations references
    - Include disclaimers (no guaranteed performance claims)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [x] 1.3 Create CTA configuration file
    - Create `src/data/ctaConfig.js` with approved CTA text options
    - Define navigation targets for each CTA
    - _Requirements: 8.1, 8.3_
  - [ ]* 1.4 Write property test for pricing data completeness
    - **Property 1: Pricing Card Completeness**
    - **Validates: Requirements 2.1, 2.8**

- [x] 2. Build core UI components
  - [x] 2.1 Create Badge component
    - Create `src/components/ui/Badge.jsx` for "Best Seller" and other badges
    - Support variants: best-seller, popular, new
    - _Requirements: 2.2, 8.4_
  - [x] 2.2 Create PricingCard component
    - Create `src/components/sections/pricing/PricingCard.jsx`
    - Display price, features list, badge, and CTA
    - Include material specification in features
    - _Requirements: 2.1, 2.8, 4.2_
  - [x] 2.3 Create BundleCard component
    - Create `src/components/sections/pricing/BundleCard.jsx`
    - Display price, target audience, includes list, savings
    - _Requirements: 11.1, 11.2, 11.3_
  - [ ]* 2.4 Write property test for bundle includes list
    - **Property 12: Bundle Includes List**
    - **Validates: Requirements 11.2**
  - [x] 2.5 Create ComplianceFooter component
    - Create `src/components/sections/pricing/ComplianceFooter.jsx`
    - Display material specifications and safety regulations
    - _Requirements: 2.9, 4.1, 4.2, 4.3, 4.4_

- [ ] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Build home page components
  - [x] 4.1 Create VehicleHero component
    - Create `src/components/sections/home/VehicleHero.jsx`
    - Headline: "Advertise While You Drive"
    - Subheadline: "Turn Your Vehicle Into a 24/7 Moving Billboard"
    - Two CTA buttons: "Get My Vehicle Wrapped", "Get Realtor Package"
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 4.2 Create FlagshipProduct component
    - Create `src/components/sections/home/FlagshipProduct.jsx`
    - Feature Rear Window Ad with Best Seller badge
    - Include pricing ($349) and key features
    - _Requirements: 1.4, 2.2_
  - [x] 4.3 Create PricingPreview component
    - Create `src/components/sections/home/PricingPreview.jsx`
    - Show top 3 pricing options with CTAs
    - Link to full pricing page
    - _Requirements: 2.1_
  - [ ]* 4.4 Write property test for CTA text consistency
    - **Property 8: Primary CTA Text Consistency**
    - **Validates: Requirements 8.1**

- [x] 5. Build services page components
  - [x] 5.1 Create VehicleServices component
    - Create `src/components/sections/services/VehicleServices.jsx`
    - Display: Rear Window Ads, Side/Door Ads, Hood Branding, Truck & Trailer
    - Include pricing for each service
    - Position as primary/dominant section
    - _Requirements: 3.1, 3.2, 3.4_
  - [x] 5.2 Create SecondaryServices component
    - Create `src/components/sections/services/SecondaryServices.jsx`
    - Display other services below vehicle advertising
    - De-emphasized styling
    - _Requirements: 3.3, 3.5_
  - [ ]* 5.3 Write property test for vehicle services pricing
    - **Property 2: Vehicle Services Include Pricing**
    - **Validates: Requirements 3.4**

- [x] 6. Build contact/quote form
  - [x] 6.1 Create QuoteForm component
    - Create `src/components/sections/contact/QuoteForm.jsx`
    - Fields: name, email, phone, vehicleType, location (GTA), industry (default: Real Estate), logoUpload
    - Form validation for required fields
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [x] 6.2 Implement form submission handler
    - Capture all form fields on submission
    - Handle file upload for logo
    - Display success/error states
    - _Requirements: 6.6_
  - [ ]* 6.3 Write property test for form data capture
    - **Property 6: Quote Form Data Capture**
    - **Validates: Requirements 6.6**

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Build portfolio page
  - [x] 8.1 Create VehicleGallery component
    - Create `src/components/sections/portfolio/VehicleGallery.jsx`
    - Display vehicle advertising visuals
    - Support before/after image pairs
    - Show variety of vehicle types
    - _Requirements: 5.1, 5.2, 5.4_
  - [x] 8.2 Create PortfolioItem component with mockup labeling
    - Create `src/components/sections/portfolio/PortfolioItem.jsx`
    - Label mockups/concepts as "Sample" or "Concept"
    - _Requirements: 5.3_
  - [ ]* 8.3 Write property test for mockup labeling
    - **Property 5: Portfolio Mockup Labeling**
    - **Validates: Requirements 5.3**

- [x] 9. Update careers page
  - [x] 9.1 Update CareersHero for commission-only messaging
    - Modify `src/components/sections/careers/CareersHero.jsx`
    - Focus on sales-focused recruitment
    - Emphasize earning potential through commissions
    - _Requirements: 7.1, 7.3, 7.4_
  - [x] 9.2 Update CompensationSection to remove salary language
    - Modify `src/components/sections/careers/CompensationSection.jsx`
    - Remove any salary-related terms
    - Focus on commission structure
    - _Requirements: 7.2_
  - [ ]* 9.3 Write property test for no salary language
    - **Property 7: No Salary Language on Careers Page**
    - **Validates: Requirements 7.2**

- [x] 10. Build pricing page
  - [x] 10.1 Create Pricing page layout
    - Update `src/pages/Pricing.jsx`
    - Display individual services section
    - Display bundles section with highlighting
    - Include ComplianceFooter
    - _Requirements: 2.1, 2.9, 11.1_
  - [x] 10.2 Integrate all pricing cards
    - Wire PricingCard components with data
    - Wire BundleCard components with data
    - Ensure Best Seller badge on rear window
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 11.3_

- [x] 11. Integrate pages and navigation
  - [x] 11.1 Update Home page
    - Replace existing hero with VehicleHero
    - Add FlagshipProduct section
    - Add PricingPreview section
    - Remove/push down consulting content
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 10.1_
  - [x] 11.2 Update Services page
    - Add VehicleServices as first section
    - Add SecondaryServices below
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 11.3 Update Contact page
    - Replace generic form with QuoteForm
    - _Requirements: 6.1_
  - [x] 11.4 Update Portfolio page
    - Integrate VehicleGallery
    - _Requirements: 5.1_
  - [ ]* 11.5 Write property test for CTA navigation
    - **Property 10: CTA Navigation Correctness**
    - **Validates: Requirements 8.3**
  - [ ]* 11.6 Write property test for no duplicate CTAs
    - **Property 9: No Duplicate CTAs Per Section**
    - **Validates: Requirements 8.2, 10.4**

- [x] 12. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Mobile responsiveness and compliance
  - [x] 13.1 Ensure mobile-first responsive layouts
    - Verify all pages display correctly on mobile
    - Ensure pricing visible without excessive scrolling
    - _Requirements: 9.1, 9.2_
  - [x] 13.2 Ensure touch-friendly interactions
    - Verify button and form touch targets >= 44px
    - _Requirements: 9.3_
  - [x] 13.3 Verify CTA visibility on mobile hero
    - Ensure hero CTAs are clearly visible on mobile
    - _Requirements: 9.4_
  - [ ]* 13.4 Write property test for mobile touch targets
    - **Property 11: Mobile Touch Target Size**
    - **Validates: Requirements 9.3**

- [x] 14. Content compliance verification
  - [x] 14.1 Verify no guaranteed performance claims
    - Audit all content for performance guarantee language
    - _Requirements: 4.5_
  - [x] 14.2 Verify de-emphasized consulting language
    - Ensure consulting terms not in hero/primary sections
    - _Requirements: 10.2_
  - [x] 14.3 Remove vague buzzwords and duplicate CTAs
    - Clean up homepage clutter
    - Eliminate duplicate CTAs per section
    - _Requirements: 10.3, 10.4_
  - [ ]* 14.4 Write property test for no performance claims
    - **Property 4: No Guaranteed Performance Claims**
    - **Validates: Requirements 4.5**
  - [ ]* 14.5 Write property test for de-emphasized consulting
    - **Property 13: De-emphasized Consulting Language**
    - **Validates: Requirements 10.2**

- [x] 15. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Pricing amounts are FINAL and must match exactly: $349, $299, $449, $699, $999, $3,299

