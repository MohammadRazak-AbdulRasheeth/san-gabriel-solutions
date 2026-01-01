// San Gabriel Solutions - Services Data (Mobile App)
export const services = [
  {
    id: 'revenue-generating-advertising',
    name: 'Revenue-Generating Advertising',
    tagline: 'Turn existing traffic into new income streams',
    icon: 'trending-up',
    shortDescription: 'Turn your high-traffic locations into revenue-generating assets.',
    pricing: null,
  },
  {
    id: 'branding-banners-signs',
    name: 'Branding, Banners & Signs',
    tagline: 'Revenue-producing visual infrastructure',
    icon: 'image',
    shortDescription: 'Professional banners, signs, and visual branding.',
    pricing: null,
  },
  {
    id: 'mobile-advertising',
    name: 'Mobile Advertising – Trucking',
    tagline: 'Moving billboards on high-traffic routes',
    icon: 'truck',
    shortDescription: 'Earn $300-$500 per truck monthly.',
    pricing: { amount: '$300–$500', unit: 'per truck/month' },
  },
  {
    id: 'monetize-location',
    name: 'Monetize Your Location',
    tagline: 'Earn from windows and storefronts',
    icon: 'storefront',
    shortDescription: 'Turn windows into passive income.',
    pricing: { amount: '$200+', unit: 'per window/month' },
  },
  {
    id: 'advertise-with-us',
    name: 'Advertise With Us',
    tagline: 'Affordable advertising for SMBs',
    icon: 'megaphone',
    shortDescription: 'Physical and digital advertising solutions.',
    pricing: null,
  },
  {
    id: 'website-design',
    name: 'Website Design & Development',
    tagline: 'Conversion-focused websites',
    icon: 'globe',
    shortDescription: 'Mobile-optimized, SEO-ready websites.',
    pricing: null,
  },
];

export const getServiceById = (id) => services.find(s => s.id === id);

export default services;
