# Design Document

## Overview

This design implements impressive, modern animations for the San Gabriel Solutions website, including parallax scrolling effects, scroll-triggered reveals, floating elements, and smooth micro-interactions. The implementation leverages Framer Motion for React animations and custom hooks for parallax effects, ensuring 60fps performance while respecting accessibility preferences.

The animation system follows a layered approach:
1. **Parallax Layer** - Background depth effects on hero sections
2. **Reveal Layer** - Scroll-triggered content animations
3. **Interactive Layer** - Hover, click, and focus micro-interactions
4. **Decorative Layer** - Floating elements and visual flourishes

## Architecture

### Technology Stack
- **Animation Library**: Framer Motion (existing)
- **Parallax**: Custom React hooks with CSS transforms
- **Scroll Detection**: Intersection Observer API
- **Performance**: CSS will-change, GPU-accelerated transforms
- **Accessibility**: prefers-reduced-motion media query

### Project Structure
```
src/
├── components/
│   └── ui/
│       ├── ParallaxSection.jsx      # Parallax container component
│       ├── ScrollReveal.jsx         # Enhanced scroll reveal
│       ├── FloatingElement.jsx      # Floating animation wrapper
│       ├── AnimatedCounter.jsx      # Number counting animation
│       ├── TiltCard.jsx             # 3D tilt effect card
│       ├── RippleButton.jsx         # Button with ripple effect
│       ├── ImageReveal.jsx          # Image loading animation
│       └── SectionDivider.jsx       # Wave/gradient dividers
├── hooks/
│   ├── useParallax.js               # Parallax scroll hook
│   ├── useScrollProgress.js         # Scroll position tracking
│   ├── useTilt.js                   # Mouse-based tilt calculation
│   └── useReducedMotion.js          # Existing - enhanced
└── styles/
    └── animations.css               # Enhanced CSS animations
```

## Components and Interfaces

### ParallaxSection Component
```jsx
const ParallaxSection = ({
  children,
  backgroundImage,
  speed = 0.5,        // Parallax speed (0-1)
  overlay = true,     // Dark overlay for text readability
  height = '100vh'
}) => {
  // Uses useParallax hook for scroll-based transform
  // Applies translateY based on scroll position * speed
  // Respects reduced motion preferences
}
```

### ScrollReveal Component (Enhanced)
```jsx
const ScrollReveal = ({
  children,
  direction = 'up',   // 'up', 'down', 'left', 'right', 'fade'
  delay = 0,
  duration = 0.6,
  stagger = 0.1,      // Delay between child elements
  threshold = 0.2     // Viewport intersection threshold
}) => {
  // Enhanced with stagger support for child elements
  // Multiple direction options
  // Configurable timing
}
```

### FloatingElement Component
```jsx
const FloatingElement = ({
  children,
  amplitude = 10,     // Float distance in pixels
  duration = 3,       // Animation cycle duration
  delay = 0           // Start delay for staggering
}) => {
  // Applies subtle up/down floating animation
  // Uses CSS keyframes for performance
  // Disabled when reduced motion is preferred
}
```

### AnimatedCounter Component
```jsx
const AnimatedCounter = ({
  target,             // Final number to display
  duration = 2,       // Count animation duration
  prefix = '',        // e.g., '$'
  suffix = '',        // e.g., '%', '+'
  decimals = 0        // Decimal places
}) => {
  // Animates from 0 to target when in viewport
  // Uses requestAnimationFrame for smooth counting
  // Eases out for natural feel
}
```

### TiltCard Component
```jsx
const TiltCard = ({
  children,
  maxTilt = 10,       // Maximum tilt angle in degrees
  scale = 1.02,       // Scale on hover
  glare = true        // Light reflection effect
}) => {
  // Calculates tilt based on mouse position
  // Applies 3D perspective transform
  // Optional glare overlay follows mouse
}
```

### RippleButton Component
```jsx
const RippleButton = ({
  children,
  color = 'rgba(255,255,255,0.3)',
  duration = 600      // Ripple animation duration in ms
}) => {
  // Creates ripple effect from click position
  // Ripple expands and fades out
  // Works with existing Button component
}
```

### ImageReveal Component
```jsx
const ImageReveal = ({
  src,
  alt,
  effect = 'blur',    // 'blur', 'fade', 'slide'
  duration = 0.8
}) => {
  // Shows placeholder/blur while loading
  // Smooth transition to loaded image
  // Handles loading states gracefully
}
```

### SectionDivider Component
```jsx
const SectionDivider = ({
  type = 'wave',      // 'wave', 'curve', 'angle', 'gradient'
  color = 'white',
  flip = false,       // Flip vertically
  height = 100
}) => {
  // SVG-based section dividers
  // Smooth visual transitions between sections
  // Customizable colors and shapes
}
```

## Data Models

### Animation Configuration
```javascript
const animationConfig = {
  parallax: {
    heroSpeed: 0.5,
    backgroundSpeed: 0.3,
    foregroundSpeed: 0.8
  },
  reveal: {
    duration: 0.6,
    stagger: 0.1,
    threshold: 0.2,
    easing: [0.25, 0.46, 0.45, 0.94]  // Custom ease-out
  },
  floating: {
    amplitude: 10,
    duration: 3
  },
  tilt: {
    maxAngle: 10,
    perspective: 1000,
    scale: 1.02
  },
  counter: {
    duration: 2,
    easing: 'easeOut'
  }
}
```

### Parallax Layer Configuration
```javascript
const parallaxLayers = {
  background: { speed: 0.3, zIndex: 0 },
  midground: { speed: 0.5, zIndex: 1 },
  foreground: { speed: 0.8, zIndex: 2 },
  content: { speed: 1, zIndex: 3 }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Parallax Offset Calculation
*For any* scroll position and parallax speed between 0 and 1, the calculated offset SHALL equal scrollPosition multiplied by speed, producing a value that creates the illusion of depth.
**Validates: Requirements 1.1**

### Property 2: Reduced Motion Disables Animations
*For any* animation utility or component, when reduced motion preference is enabled, the animation SHALL return static values (0 offset, no transform, instant duration) instead of animated values.
**Validates: Requirements 1.4, 5.1**

### Property 3: Stagger Delay Calculation
*For any* element index in a staggered animation sequence, the delay SHALL equal the index multiplied by the stagger amount, ensuring consistent cascading reveals.
**Validates: Requirements 2.2**

### Property 4: Counter Animation Interpolation
*For any* target number and progress value between 0 and 1, the animated counter SHALL display a value equal to target multiplied by progress, with appropriate rounding.
**Validates: Requirements 3.2**

### Property 5: Tilt Calculation from Mouse Position
*For any* mouse position within a card element, the tilt rotation SHALL be proportional to the mouse offset from center, with X rotation based on vertical offset and Y rotation based on horizontal offset.
**Validates: Requirements 4.2**

### Property 6: Mobile Animation Optimization
*For any* viewport width below 768px, parallax effects SHALL use reduced speed values and complex animations SHALL be simplified or disabled.
**Validates: Requirements 6.1**

## Error Handling

### Performance Degradation
- Monitor frame rate and reduce animation complexity if below 30fps
- Fallback to CSS transitions if JavaScript animations lag
- Disable parallax on low-end devices detected via navigator.hardwareConcurrency

### Loading States
- Show skeleton/placeholder during image loading
- Graceful fallback if Intersection Observer not supported
- Handle scroll event throttling for performance

### Accessibility Fallbacks
- All content accessible without animations
- Focus states visible without animation dependency
- Screen reader announcements not affected by animations

## Testing Strategy

### Unit Testing
- Animation utility function outputs
- Hook return values for various inputs
- Component rendering with different props

### Property-Based Testing
The project will use **fast-check** as the property-based testing library.

Each property-based test MUST:
- Run a minimum of 100 iterations
- Be tagged with format: **Feature: impressive-animations, Property {number}: {property_text}**
- Reference the correctness property it implements

Property test implementations:
- **Property 1**: Generate random scroll positions (0-10000) and speeds (0-1), verify offset = scroll * speed
- **Property 2**: Generate animation configs, verify all return static values when reducedMotion=true
- **Property 3**: Generate element indices (0-20) and stagger amounts (0-0.5), verify delay = index * stagger
- **Property 4**: Generate target numbers (0-1000000) and progress (0-1), verify interpolation accuracy
- **Property 5**: Generate mouse positions within bounds, verify tilt angles are proportional and within maxTilt
- **Property 6**: Generate viewport widths (320-767), verify mobile-optimized values returned

### Visual Testing
- Manual verification of animation smoothness
- Cross-browser animation consistency
- Mobile device testing for touch interactions

### Performance Testing
- Lighthouse performance scores
- Frame rate monitoring during animations
- Memory usage during long scroll sessions

## Performance Optimization

### GPU Acceleration
```css
.parallax-layer {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### Throttling and Debouncing
- Scroll events throttled to 16ms (60fps)
- Resize events debounced to 100ms
- Intersection Observer for efficient visibility detection

### Lazy Animation Loading
- Only initialize animations for visible sections
- Clean up animations when elements leave viewport
- Use CSS animations where possible over JS

## Responsive Design

### Mobile Optimizations
- Reduced parallax speed on mobile (0.2 vs 0.5)
- Simpler reveal animations (fade only)
- Touch-optimized interactions (no hover-dependent effects)
- Reduced floating animation amplitude

### Tablet Adaptations
- Moderate parallax effects
- Full reveal animations
- Touch and hover support

### Desktop Experience
- Full parallax depth effects
- Complex staggered animations
- 3D tilt and glare effects
- Rich micro-interactions

## Accessibility

### Reduced Motion Support
```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// All animations check this flag
const animationDuration = prefersReducedMotion ? 0 : 0.6;
const parallaxSpeed = prefersReducedMotion ? 0 : 0.5;
```

### Focus Management
- Animations don't interfere with focus indicators
- Keyboard navigation unaffected by animations
- No content hidden by animation states

### Screen Reader Compatibility
- Animated content has appropriate ARIA labels
- Counter animations announce final values
- No essential information conveyed only through animation

