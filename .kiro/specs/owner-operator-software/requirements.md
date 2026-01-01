# Requirements Document

## Introduction

This document defines the requirements for a new conversion-focused landing page targeting owner-operators. The page will position San Gabriel Solutions' software as a time-saving tool and drive calendar bookings through a "First 100 free" urgency offer. The page will be accessible at `/owner-operator-software` and follow a structured layout designed to convert visitors into booked calls.

## Glossary

### Landing Page Terms

- **Owner_Operator_Page**: The landing page component at `/owner-operator-software` targeting owner-operators
- **Hero_Section**: The above-the-fold section containing the primary headline, subheadline, and CTAs
- **Pain_Section**: The section highlighting common time-related problems owner-operators face
- **Solution_Section**: The section explaining what the software does at a high level
- **Time_Payback_Section**: The section framing time savings as decision-making capacity
- **Urgency_Section**: The section promoting the "First 100 free" offer
- **Calendar_Section**: The section containing the calendar booking integration
- **Qualification_Section**: The section clarifying who the software is and isn't for
- **Footer_CTA**: The final call-to-action section at the bottom of the page
- **Sticky_CTA**: A mobile-optimized CTA button that follows scroll
- **Calendar_Script**: The external calendar booking script to be embedded

### Onboarding Form Terms

- **Onboarding_Form**: The form interface for collecting owner-operator information during the onboarding process
- **Short_Form**: A condensed version of the onboarding form for use during calendar calls
- **Full_Form**: The complete onboarding form for post-approval data collection
- **Submission_ID**: A unique identifier generated for each form submission
- **System**: The backend service that processes, validates, and stores form submissions

## Requirements

### Requirement 1: Page Routing and SEO

**User Story:** As a visitor, I want to access the owner-operator software page via a clear URL, so that I can easily find and share the page.

#### Acceptance Criteria

1. THE Owner_Operator_Page SHALL be accessible at the URL path `/owner-operator-software`
2. THE Owner_Operator_Page SHALL have the page title "Software Built for Owner-Operators — Save Hours Every Week"
3. THE Owner_Operator_Page SHALL include appropriate meta description for SEO optimization
4. WHEN a user navigates to `/owner-operator-software`, THE Router SHALL render the Owner_Operator_Page component

### Requirement 2: Hero Section Display

**User Story:** As a visitor, I want to immediately understand the value proposition, so that I can decide if this software is relevant to me.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the headline "This Software Gives Owner-Operators Their Time Back"
2. THE Hero_Section SHALL display the subheadline "Automate daily tasks, reduce manual work, and free up hours every week—so you can focus on real business problems, not admin work."
3. THE Hero_Section SHALL display the trust line "Built specifically for owner-operators who do everything themselves."
4. THE Hero_Section SHALL display a primary CTA button with text "Get Free Access (First 100 Only)"
5. THE Hero_Section SHALL display an optional secondary CTA with text "See How It Works"
6. WHEN a user clicks the primary CTA button, THE Page SHALL scroll to the Calendar_Section
7. WHEN a user clicks the secondary CTA button, THE Page SHALL scroll to the Solution_Section

### Requirement 3: Pain Section Display

**User Story:** As an owner-operator, I want to see that the company understands my challenges, so that I feel confident they can help me.

#### Acceptance Criteria

1. THE Pain_Section SHALL display the section title "Owner-Operators Are Losing Time Where It Hurts Most"
2. THE Pain_Section SHALL display bullet points describing common pain points:
   - "Too many systems that don't talk to each other"
   - "Repeating the same tasks every day"
   - "Paperwork, tracking, follow-ups eating into nights and weekends"
   - "No time left to solve bigger business problems"
3. THE Pain_Section SHALL display the bridge statement "Time isn't just money—it's your ability to think, plan, and grow."

### Requirement 4: Solution Section Display

**User Story:** As a visitor, I want to understand what the software does without technical jargon, so that I can evaluate if it meets my needs.

#### Acceptance Criteria

1. THE Solution_Section SHALL display the section title "One Software. Fewer Tasks. More Control."
2. THE Solution_Section SHALL display high-level capability descriptions:
   - "Centralizes key owner-operator workflows"
   - "Automates repetitive tasks"
   - "Keeps critical information organized and accessible"
   - "Reduces manual tracking and follow-ups"
3. THE Solution_Section SHALL display outcome-focused benefits:
   - "Save hours every week"
   - "Fewer mistakes"
   - "Less stress"
   - "More time to fix real operational problems"

### Requirement 5: Time Payback Section Display

**User Story:** As an owner-operator, I want to visualize what I could do with saved time, so that I can understand the real value of the software.

#### Acceptance Criteria

1. THE Time_Payback_Section SHALL display the section title "What Would You Do With 5–10 Hours Back Every Week?"
2. THE Time_Payback_Section SHALL display example use cases for saved time:
   - "Fix cash flow issues"
   - "Improve operations"
   - "Spend time with family"
   - "Take on more profitable work"
   - "Actually plan instead of reacting"
3. THE Time_Payback_Section SHALL display the positioning line "This software doesn't just save time—it gives you decision-making space."

### Requirement 6: Urgency Section Display

**User Story:** As a visitor, I want to understand the limited availability offer, so that I feel motivated to act quickly.

#### Acceptance Criteria

1. THE Urgency_Section SHALL display the section title "Free for the First 100 Owner-Operators"
2. THE Urgency_Section SHALL explain the offer clearly:
   - "Early adopters get full access at no cost"
   - "Limited to first 100 to ensure proper onboarding and support"
   - "No long-term commitment required"
3. THE Urgency_Section SHALL display the trust reinforcement text "We're rolling this out with real operators first to refine it around real-world use."

### Requirement 7: Calendar Integration Section

**User Story:** As a visitor ready to sign up, I want to easily book a call, so that I can get access to the software.

#### Acceptance Criteria

1. THE Calendar_Section SHALL display the section title "How It Works"
2. THE Calendar_Section SHALL display 3 simple steps:
   - "Book a short call using the calendar below"
   - "We confirm you're a good fit"
   - "Get access and start saving time"
3. THE Calendar_Section SHALL display a CTA button with text "Book My Free Access Call"
4. THE Calendar_Section SHALL include a placeholder area for the calendar script integration
5. WHEN the calendar script is provided, THE Calendar_Section SHALL render the embedded calendar widget

### Requirement 8: Qualification Section Display

**User Story:** As a visitor, I want to know if this software is right for me, so that I don't waste time if I'm not the target audience.

#### Acceptance Criteria

1. THE Qualification_Section SHALL display the section title "Is This for You?"
2. THE Qualification_Section SHALL display who the software IS for:
   - "Owner-operators"
   - "Small business owners wearing multiple hats"
   - "Operators tired of admin overload"
3. THE Qualification_Section SHALL display who the software is NOT for:
   - "Large corporate teams"
   - "Businesses that don't value time efficiency"

### Requirement 9: Footer CTA Display

**User Story:** As a visitor who has scrolled through the page, I want a final opportunity to take action, so that I can convert after reading all the information.

#### Acceptance Criteria

1. THE Footer_CTA SHALL display the headline "Stop Spending Time on Work Software Should Be Doing"
2. THE Footer_CTA SHALL display a CTA button with text "Claim My Free Spot (First 100)"
3. WHEN a user clicks the Footer_CTA button, THE Page SHALL scroll to the Calendar_Section

### Requirement 10: Mobile Sticky CTA

**User Story:** As a mobile user, I want easy access to the main CTA while scrolling, so that I can take action at any point.

#### Acceptance Criteria

1. WHILE the viewport width is less than 768px, THE Sticky_CTA SHALL be visible at the bottom of the screen
2. THE Sticky_CTA SHALL follow the user's scroll position
3. THE Sticky_CTA SHALL display the text "Get Free Access"
4. WHEN a user clicks the Sticky_CTA, THE Page SHALL scroll to the Calendar_Section
5. THE Sticky_CTA SHALL not obstruct critical page content

### Requirement 11: Design and Visual Requirements

**User Story:** As a visitor, I want a clean, professional design, so that I trust the company and can easily consume the content.

#### Acceptance Criteria

1. THE Owner_Operator_Page SHALL use a simple and clean design aesthetic
2. THE Owner_Operator_Page SHALL use icons for time, automation, and control concepts
3. THE Owner_Operator_Page SHALL not display software screenshots unless explicitly provided
4. THE Owner_Operator_Page SHALL maintain consistent styling with the existing San Gabriel website
5. THE Owner_Operator_Page SHALL be fully responsive across desktop, tablet, and mobile devices

### Requirement 12: Accessibility

**User Story:** As a user with accessibility needs, I want the page to be accessible, so that I can navigate and understand the content.

#### Acceptance Criteria

1. THE Owner_Operator_Page SHALL meet WCAG 2.1 AA accessibility standards
2. THE Owner_Operator_Page SHALL have proper heading hierarchy (h1, h2, h3)
3. THE Owner_Operator_Page SHALL have sufficient color contrast for all text
4. THE Owner_Operator_Page SHALL support keyboard navigation for all interactive elements
5. THE Owner_Operator_Page SHALL include appropriate ARIA labels for icons and buttons

---

## Onboarding Form Requirements

### Requirement 13: Business and Owner Information Collection

**User Story:** As an internal team member, I want to collect basic business and owner information, so that I can verify eligibility and create an account.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL collect the legal business name
2. THE Onboarding_Form SHALL collect the operating or trade name if different from legal name
3. THE Onboarding_Form SHALL collect the owner's full name
4. THE Onboarding_Form SHALL collect the primary email address for login
5. THE Onboarding_Form SHALL collect the phone number
6. THE Onboarding_Form SHALL collect the business address (city and province sufficient)
7. THE Onboarding_Form SHALL collect the business type or industry
8. THE Onboarding_Form SHALL collect the years in operation
9. WHEN any required business information field is empty, THE Onboarding_Form SHALL prevent form submission

### Requirement 14: Owner-Operator Qualification

**User Story:** As an internal team member, I want to confirm the applicant fits the owner-operator profile, so that I can ensure they are eligible for the program.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL ask if the applicant is the primary operator of the business
2. THE Onboarding_Form SHALL collect the number of employees including the owner
3. THE Onboarding_Form SHALL ask if the applicant is responsible for daily operations
4. THE Onboarding_Form SHALL ask if the applicant personally handles admin, scheduling, or reporting
5. WHEN qualification questions indicate the applicant is not an owner-operator, THE Onboarding_Form SHALL display a message explaining eligibility requirements

### Requirement 15: Time and Workflow Assessment

**User Story:** As an internal team member, I want to understand the applicant's time challenges, so that I can personalize onboarding and demonstrate value.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL collect the approximate hours per week spent on admin tasks
2. THE Onboarding_Form SHALL collect the top 3 repetitive tasks done weekly
3. THE Onboarding_Form SHALL collect the biggest time drain in the business
4. THE Onboarding_Form SHALL collect one problem the applicant would solve with 5-10 extra hours per week
5. THE Onboarding_Form SHALL allow free-text responses for workflow assessment questions

### Requirement 16: Current Systems and Tools Assessment

**User Story:** As an internal team member, I want to know what tools the applicant currently uses, so that I can plan integration and setup.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL collect information about current accounting software or tools
2. THE Onboarding_Form SHALL collect information about current scheduling software or tools
3. THE Onboarding_Form SHALL collect information about current CRM software or tools
4. THE Onboarding_Form SHALL collect information about spreadsheet or manual tracking usage
5. THE Onboarding_Form SHALL ask if the applicant uses multiple tools for the same task
6. THE Onboarding_Form SHALL ask if any tasks are fully manual today
7. THE Onboarding_Form SHALL allow "None" or "N/A" responses for tool categories

### Requirement 17: Access and Technical Setup

**User Story:** As an internal team member, I want to collect technical setup information, so that I can create accounts and ensure compatibility.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL collect the preferred email for software access
2. THE Onboarding_Form SHALL confirm the spelling of the email address
3. THE Onboarding_Form SHALL ask if a secondary user is needed
4. THE Onboarding_Form SHALL collect the device primarily used (Mobile, Desktop, or Tablet)
5. THE Onboarding_Form SHALL collect the operating system (iOS, Android, Windows, or Mac)
6. WHEN the preferred email differs from the primary contact email, THE Onboarding_Form SHALL display a confirmation message

### Requirement 18: Free Access Eligibility Confirmation

**User Story:** As an internal team member, I want to confirm the applicant understands the free access offer, so that I can protect the "First 100 Free" program integrity.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL display a statement that access is limited to the first 100 owner-operators
2. THE Onboarding_Form SHALL display a statement that free access is part of early adoption
3. THE Onboarding_Form SHALL display a statement that feedback may be requested
4. THE Onboarding_Form SHALL require an agreement checkbox or verbal confirmation
5. WHEN the agreement checkbox is not checked, THE Onboarding_Form SHALL prevent form submission

### Requirement 19: Calendar Call Confirmation

**User Story:** As an internal team member, I want to confirm calendar call details, so that I can reduce no-shows and align expectations.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL display the scheduled call date and time
2. THE Onboarding_Form SHALL display the time zone for the call
3. THE Onboarding_Form SHALL collect the best contact method for the call
4. THE Onboarding_Form SHALL require agreement to attend or reschedule if needed
5. WHEN the call confirmation is not agreed to, THE Onboarding_Form SHALL prevent form submission

### Requirement 20: Compliance and Consent

**User Story:** As an internal team member, I want to collect legal consent, so that I can protect the business and comply with regulations.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL require consent to store business information
2. THE Onboarding_Form SHALL require consent to be contacted for onboarding and support
3. THE Onboarding_Form SHALL require agreement to basic software terms
4. THE Onboarding_Form SHALL offer optional consent to receive updates or improvements
5. WHEN required consent checkboxes are not checked, THE Onboarding_Form SHALL prevent form submission
6. THE Onboarding_Form SHALL provide links to privacy policy and terms of service

### Requirement 21: Optional High-Value Information

**User Story:** As an internal team member, I want to collect optional information for future engagement, so that I can plan upsells and testimonials.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL ask if the applicant is willing to provide feedback or testimonial later
2. THE Onboarding_Form SHALL ask if the applicant has interest in advanced features later
3. THE Onboarding_Form SHALL ask if the applicant has interest in ongoing optimization or consulting support
4. THE Onboarding_Form SHALL clearly mark these questions as optional
5. THE Onboarding_Form SHALL allow form submission regardless of optional question responses

### Requirement 22: Form Submission and Data Storage

**User Story:** As an internal team member, I want submitted form data to be stored securely, so that I can access it for onboarding and account creation.

#### Acceptance Criteria

1. WHEN the form is submitted, THE System SHALL validate all required fields are complete
2. WHEN validation passes, THE System SHALL store the form data securely
3. WHEN form data is stored, THE System SHALL generate a unique submission ID
4. WHEN form submission is successful, THE System SHALL display a confirmation message
5. WHEN form submission fails, THE System SHALL display an error message and preserve entered data
6. THE System SHALL encrypt sensitive information (email, phone number) at rest

### Requirement 23: Form Versions and Usage Contexts

**User Story:** As an internal team member, I want different form versions for different contexts, so that I can use the appropriate version during calls or as standalone forms.

#### Acceptance Criteria

1. THE System SHALL support a short version of the form for use during calendar calls
2. THE System SHALL support a full version of the form for post-approval onboarding
3. THE System SHALL support a standalone web form version accessible via URL
4. WHEN using the short version, THE System SHALL collect only critical information (Requirements 13, 14, 18, 19)
5. WHEN using the full version, THE System SHALL collect all information (Requirements 13-21)

### Requirement 24: Form Accessibility and Usability

**User Story:** As an applicant, I want the form to be easy to use and accessible, so that I can complete it without frustration.

#### Acceptance Criteria

1. THE Onboarding_Form SHALL meet WCAG 2.1 AA accessibility standards
2. THE Onboarding_Form SHALL display clear labels for all form fields
3. THE Onboarding_Form SHALL display helpful placeholder text or examples where appropriate
4. THE Onboarding_Form SHALL display inline validation errors next to relevant fields
5. THE Onboarding_Form SHALL support keyboard navigation for all form fields
6. THE Onboarding_Form SHALL be fully responsive on mobile, tablet, and desktop devices
7. THE Onboarding_Form SHALL display a progress indicator for multi-step forms
