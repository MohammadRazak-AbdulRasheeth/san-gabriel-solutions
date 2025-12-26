# Implementation Plan

- [x] 1. Create parallax animation system
  - [x] 1.1 Create useParallax hook
    - Implement scroll-based offset calculation
    - Add speed parameter (0-1) for controlling parallax intensity
    - Integrate with useReducedMotion for accessibility
    - Use requestAnimationFrame for smooth updates
    - _Requirements: 1.1, 1.4_

  - [ ]* 1.2 Write property test for parallax offset calculation
    - **Property 1: Parallax Offset Calculation**
    - **Validates: Requirements 1.1**

  - [x] 1.3 Create ParallaxSection component
    - Build container with background image support
    - Apply parallax transform based on scroll position
    - Add overlay option for text readability
    - Support configurable height and speed
    - _Requirements: 1.1, 1.2_

  - [ ]* 1.4 Write property test for reduced motion behavior
    - **Property 2: Reduced Motion Disables Animations**
    - **Validates: Requirements 1.4, 5.1**

- [x] 2. Enhance scroll reveal animations
  - [x] 2.1 Enhance ScrollReveal component with stagger support
    - Add stagger prop for cascading child animations
    - Implement multiple direction options (up, down, left, right, fade)
    - Add configurable duration and delay
    - Use Intersection Observer for efficient triggering
    - _Requirements: 2.1, 2.2_

  - [ ]* 2.2 Write property test for stagger delay calculation
    - **Property 3: Stagger Delay Calculation**
    - **Validates: Requirements 2.2**

  - [x] 2.3 Create animation variant presets
    - Define fadeUp, fadeDown, fadeLeft, fadeRight variants
    - Create staggerContainer variant for parent elements
    - Add custom easing curves for professional feel
    - _Requirements: 2.1, 2.3_

- [x] 3. Implement floating and counter animations
  - [x] 3.1 Create FloatingElement component
    - Implement CSS keyframe-based floating animation
    - Add amplitude and duration configuration
    - Support delay for staggering multiple elements
    - Respect reduced motion preferences
    - _Requirements: 3.1, 3.4_

  - [x] 3.2 Create AnimatedCounter component
    - Implement number interpolation from 0 to target
    - Use requestAnimationFrame for smooth counting
    - Add prefix/suffix support (e.g., $, %, +)
    - Trigger animation when element enters viewport
    - _Requirements: 3.2_

  - [ ]* 3.3 Write property test for counter interpolation
    - **Property 4: Counter Animation Interpolation**
    - **Validates: Requirements 3.2**

- [x] 4. Create interactive micro-animations
  - [x] 4.1 Create TiltCard component
    - Calculate tilt based on mouse position relative to center
    - Apply 3D perspective transform
    - Add optional glare effect that follows mouse
    - Include scale on hover
    - _Requirements: 4.2_

  - [ ]* 4.2 Write property test for tilt calculation
    - **Property 5: Tilt Calculation from Mouse Position**
    - **Validates: Requirements 4.2**

  - [x] 4.3 Create RippleButton component
    - Implement ripple effect from click position
    - Animate ripple expansion and fade
    - Support custom colors and duration
    - Integrate with existing Button component
    - _Requirements: 4.3_

  - [x] 4.4 Create ImageReveal component
    - Implement blur-to-sharp loading effect
    - Add fade and slide reveal options
    - Handle image loading states
    - Show placeholder during load
    - _Requirements: 4.4_

- [x] 5. Create section dividers and transitions
  - [x] 5.1 Create SectionDivider component
    - Implement wave SVG divider
    - Add curve and angle options
    - Support gradient fills
    - Allow flip for top/bottom placement
    - _Requirements: 4.1_

  - [x] 5.2 Add dividers to key page sections
    - Add wave divider between hero and services on Home
    - Add curve divider before CTA sections
    - Ensure smooth color transitions
    - _Requirements: 4.1_

- [x] 6. Implement mobile optimizations
  - [x] 6.1 Create useViewportSize hook
    - Track viewport width for responsive animations
    - Debounce resize events for performance
    - Provide isMobile, isTablet, isDesktop flags
    - _Requirements: 6.1_

  - [ ]* 6.2 Write property test for mobile animation optimization
    - **Property 6: Mobile Animation Optimization**
    - **Validates: Requirements 6.1**

  - [x] 6.3 Apply mobile-specific animation settings
    - Reduce parallax speed on mobile (0.2 vs 0.5)
    - Simplify reveal animations to fade-only
    - Disable tilt effects on touch devices
    - Reduce floating animation amplitude
    - _Requirements: 6.1, 6.2, 6.3_

- [x] 7. Apply animations to existing pages
  - [x] 7.1 Update AgencyHero with parallax effect
    - Wrap hero background in ParallaxSection
    - Add floating decorative elements
    - Apply staggered reveal to hero content
    - _Requirements: 1.1, 1.2, 3.1_

  - [x] 7.2 Update Home page sections with animations
    - Add ScrollReveal to ServicesOverview cards
    - Apply AnimatedCounter to proof section metrics
    - Add TiltCard effect to service cards
    - Include SectionDividers between sections
    - _Requirements: 2.1, 3.2, 4.2_

  - [x] 7.3 Update Services page with animations
    - Add parallax to service hero section
    - Apply staggered reveal to service grid
    - Add hover animations to service cards
    - _Requirements: 1.1, 2.2_

  - [x] 7.4 Update About page with animations
    - Add parallax background to mission section
    - Apply reveal animations to values
    - Add floating elements to approach section
    - _Requirements: 1.1, 2.1, 3.1_

  - [x] 7.5 Update remaining pages with consistent animations


    - Apply animations to Industries, Case Studies, Insights pages
    - Ensure consistent animation timing across site
    - Add ImageReveal to all page images
    - _Requirements: 2.1, 4.4_

- [x] 8. Performance optimization and testing
  - [x] 8.1 Add CSS performance optimizations
    - Apply will-change to animated elements
    - Use transform and opacity for GPU acceleration
    - Add backface-visibility: hidden where needed
    - _Requirements: 1.3_

  - [x] 8.2 Implement animation cleanup
    - Remove scroll listeners when components unmount
    - Clean up Intersection Observers
    - Cancel requestAnimationFrame on unmount
    - _Requirements: 1.3_




- [ ] 9. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

