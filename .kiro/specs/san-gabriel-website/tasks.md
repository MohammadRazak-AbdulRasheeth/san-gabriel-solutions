# Implementation Plan

- [x] 1. Update services data structure with all 10 services in required order

  - [x] 1.1 Create new services data model with complete service definitions


    - Define all 10 services with id, order, name, tagline, businessCase, services list, advantages, pricing, and ctas
    - Ensure services are ordered: Revenue-Generating Advertising (1), Branding/Banners/Signs (2), Mobile Advertising (3), Monetize Your Location (4), Advertise With Us (5), Social Media & Digital (6), Website Design (7), Events & Community (8), Incorporation Services (9), Strategy/Technology/AI (10)
    - Include pricing for Mobile Advertising ($300-$500/truck) and Monetize Your Location ($200/window)
    - _Requirements: 1.3, 4.4, 5.3_

  - [x] 1.2 Write property test for service order consistency


    - **Property 1: Service Order Consistency**
    - **Validates: Requirements 1.3**

  - [x] 1.3 Create portfolio data structure


    - Define portfolio items for windows, trucks, banners, websites, events
    - Include kavin10oc.com and luxuryautocollision.ca with attribution text
    - Link portfolio items to related services
    - _Requirements: 8.4, 12.1, 12.2, 12.3_

- [x] 2. Create ServiceHero component for traffic monetization introduction


  - Build ServiceHero.jsx with core value proposition display
  - Implement Traffic → Visibility → Monetization flow visualization
  - Add responsive layout with gradient background
  - Include scroll indicator to services below
  - _Requirements: 1.1, 1.2_

- [x] 3. Create ServiceCard component with business case display

  - [x] 3.1 Implement ServiceCard base component


    - Create ServiceCard.jsx with title, tagline, businessCase, services list, advantages, and ctas props
    - Add expandable business case section showing "Why This Service Exists"
    - Implement services/formats list display
    - Add design advantages section (when applicable)
    - _Requirements: 2.1-2.4, 3.1-3.4_

  - [x] 3.2 Write property test for service card content completeness


    - **Property 5: Service Card Content Completeness**
    - **Validates: Requirements 2.1-2.4, 3.1-3.4, 4.1-4.5, 5.1-5.4, 6.1-6.3, 7.1-7.5, 8.1-8.5, 9.1-9.3, 10.1-10.4, 11.1-11.3**

  - [x] 3.3 Implement ServicePricing component


    - Create ServicePricing.jsx for clear pricing display
    - Show amount, unit (per truck, per window), and conditional notes
    - Style pricing prominently with visual emphasis
    - _Requirements: 4.4, 5.3_

  - [x] 3.4 Write property test for pricing display completeness


    - **Property 2: Pricing Display Completeness**
    - **Validates: Requirements 4.4, 5.3**

- [x] 4. Implement CTA buttons with lead form integration


  - [x] 4.1 Create CTA button variants for services


    - Implement primary and secondary CTA button styles
    - Add service-specific CTA labels as defined in requirements
    - Wire CTAs to navigate to lead form with service preselection
    - _Requirements: 2.4, 3.4, 4.5, 5.4, 6.3, 7.5, 8.5, 9.3_

  - [x] 4.2 Write property test for CTA navigation integrity


    - **Property 3: CTA Navigation Integrity**
    - **Validates: Requirements 13.3**

- [x] 5. Build individual service sections





  - [x] 5.1 Implement Revenue-Generating Advertising Solutions section (Service 1)


    - Create section with core differentiator positioning
    - Display business case: rising digital costs, priced-out businesses, under-monetized traffic
    - Show services: identify locations, deploy assets, match advertisers, manage monetization
    - Add CTAs: "Turn My Traffic Into Revenue", "Explore Advertising Options"
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 5.2 Implement Branding, Banners & Signs section (Service 2)


    - Display tagline: banners/signs are revenue-producing infrastructure
    - List services: roll-up banners, vinyl/mesh banners, step-and-repeat, storefront graphics, lawn signs, posters, vehicle decals
    - Show design advantages: distance/motion design, high-contrast, QR codes, print-ready
    - Add CTA: "Request Banner & Sign Quote"
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [x] 5.3 Implement Mobile Advertising – Trucking Fleets section (Service 3)


    - Display business case: thin margins, unused visibility, advertising offsets costs
    - List formats: vinyl wraps, trailer-side panels, rear-door ads, magnetic signage, QR-enabled ads
    - Show pricing: $300–$500 per truck/trailer with conditions
    - Add CTA: "Earn With My Trucks"
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_


  - [x] 5.4 Implement Monetize Your Location section (Service 4)

    - Display business case: rising rents, idle visibility = lost revenue
    - Show pricing: $200 per window with conditions
    - Add CTA: "Monetize My Location"
    - _Requirements: 5.1, 5.2, 5.3, 5.4_


  - [x] 5.5 Implement Advertise With Us section (Service 5)

    - Display tagline: affordable advertising for organizations priced out of traditional media
    - List options: window advertising, storefront signage, event banners, truck/trailer advertising, campaign placements
    - Add CTA: "Advertise My Business"
    - _Requirements: 6.1, 6.2, 6.3_


  - [x] 5.6 Implement Social Media & Digital Advertising section (Service 6)

    - Display business case: physical ads need digital support, consistent messaging, social proof
    - List services: account setup, content creation, campaign support, community engagement, analytics
    - Show pricing guidance: monthly packages, campaign-based pricing
    - Add CTA: "Grow My Online Presence"
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_


  - [x] 5.7 Implement Website Design & Development section (Service 7)

    - Display business case: weak websites leak leads, credibility converts traffic
    - List services: business websites, landing pages, mobile-optimized, SEO-ready
    - Include portfolio proof: kavin10oc.com, luxuryautocollision.ca with attribution
    - Add CTA: "Build My Website"
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 5.8 Implement Events & Community Advertising section (Service 8)


    - List services: event banners, sponsor walls, on-site layouts, post-event reuse
    - Add CTA: "Brand My Event"
    - _Requirements: 9.1, 9.2, 9.3_


  - [x] 5.9 Implement Incorporation & Not-for-Profit Services section (Service 9)

    - Position as supporting ecosystem service (not leading)
    - List services: business incorporation, NUANS® searches, not-for-profit incorporation, governance guidance
    - Add appropriate CTA
    - _Requirements: 10.1, 10.2, 10.3, 10.4_



  - [x] 5.10 Implement Strategy, Technology & AI section (Service 10)
    - List services: campaign strategy, CRM & automation, reporting dashboards, AI-assisted engagement
    - Add appropriate CTA
    - _Requirements: 11.1, 11.2, 11.3_

- [x] 6. Create Portfolio section with visual showcase





  - [x] 6.1 Implement PortfolioSection component


    - Create visual-first grid layout for portfolio items
    - Add category filters: windows, trucks, banners, websites, events
    - Implement lazy loading for images
    - _Requirements: 12.1, 12.2_



  - [x] 6.2 Implement PortfolioItem component





    - Create individual portfolio item display with image, title, description
    - Add hover effects to reveal details


    - Include links to live websites where applicable
    - _Requirements: 12.1, 12.4_

  - [x] 6.3 Write property test for portfolio website attribution





    - **Property 4: Portfolio Website Attribution**
    - **Validates: Requirements 8.4, 12.3**

- [x] 7. Implement FinalCTA section at bottom of page






  - [x] 7.1 Create FinalCTA component

    - Display headline: "Turn Visibility Into Revenue"
    - Add three CTA buttons: "Monetize My Location", "Advertise My Business", "Earn With My Trucks"
    - Wire CTAs to lead form with appropriate service preselection
    - _Requirements: 13.1, 13.2, 13.3_



  - [x] 7.2 Write property test for final CTA section presence





    - **Property 6: Final CTA Section Presence**
    - **Validates: Requirements 13.1, 13.2**

- [x] 8. Update Services page to integrate all components





  - Rebuild Services.jsx with ServiceHero at top
  - Render all 10 service sections in required order using ServiceCard
  - Integrate PortfolioSection (dedicated section + inline items)
  - Add FinalCTA at bottom
  - Ensure smooth scroll navigation between sections
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 9. Implement responsive design and mobile optimization

  - [x] 9.1 Apply responsive layouts to all service components
    - Stack service cards vertically on mobile (< 768px)
    - Ensure touch-friendly button sizing (min 44px tap targets)
    - Implement collapsible business case sections on mobile
    - _Requirements: 14.1_

  - [x] 9.2 Write property test for responsive layout adaptation

    - **Property 7: Responsive Layout Adaptation**
    - **Validates: Requirements 14.1**

- [x] 10. Add animations and micro-interactions





  - Implement fade-in animations for service cards on scroll
  - Add staggered animations for service lists
  - Create smooth scroll behavior for CTA navigation
  - Add hover effects for CTAs and portfolio items
  - Respect reduced motion preferences
  - _Requirements: 14.3, 14.4_

- [x] 11. Final integration and testing






  - [x] 11.1 Integrate all content and verify completeness

    - Verify all 10 services display in correct order
    - Confirm all pricing is displayed correctly
    - Validate portfolio items include required websites with attribution
    - Test all CTA buttons navigate correctly
    - _Requirements: All_

  - [x] 11.2 Run all property-based tests


    - Execute fast-check tests for all 7 properties
    - Ensure minimum 100 iterations per property
    - Fix any failing tests
    - _Requirements: All correctness properties_

- [ ] 12. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
