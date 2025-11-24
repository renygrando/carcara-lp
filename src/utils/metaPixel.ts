// Meta Pixel Utility
// Pixel ID: 1523577828896754

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
    _metaPixelInitialized?: boolean;
    _metaPixelIdInitialized?: Set<string>;
  }
}

export const META_PIXEL_ID = '1523577828896754';

// Module-level flag to prevent any duplicate initialization
let isInitializing = false;
let hasInitialized = false;

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;

  // Prevent concurrent initialization attempts
  if (isInitializing || hasInitialized) {
    return;
  }

  isInitializing = true;

  try {
    // Initialize the set to track which pixel IDs have been initialized
    if (!window._metaPixelIdInitialized) {
      window._metaPixelIdInitialized = new Set();
    }

    // Check if this specific pixel ID has already been initialized
    if (window._metaPixelIdInitialized.has(META_PIXEL_ID)) {
      return;
    }

    // Check if script already exists
    const existingScript = document.getElementById('meta-pixel-script');
    if (existingScript && window._metaPixelInitialized) {
      window._metaPixelIdInitialized.add(META_PIXEL_ID);
      hasInitialized = true;
      return;
    }

    // Only create fbq stub if it doesn't exist
    if (!window.fbq) {
      // Initialize fbq function stub
      const n = window.fbq = function(...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      // Load the pixel script only once
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.id = 'meta-pixel-script';
      document.head.appendChild(script);
    }

    // Mark as initialized BEFORE calling fbq('init') to prevent race conditions
    window._metaPixelInitialized = true;
    window._metaPixelIdInitialized.add(META_PIXEL_ID);
    hasInitialized = true;

    // Initialize pixel and track PageView - only if not already initialized
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');

    // Add noscript pixel
    const existingNoscript = document.getElementById('meta-pixel-noscript');
    if (!existingNoscript) {
      const noscript = document.createElement('noscript');
      noscript.id = 'meta-pixel-noscript';
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  } finally {
    isInitializing = false;
  }
};

// Track PageView
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track ViewContent - when user views important content
export const trackViewContent = (contentName: string, contentCategory?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: contentCategory || 'general',
    });
  }
};

// Track Lead - when user submits a form or provides contact info
export const trackLead = (contentName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: contentName || 'Lead Form',
    });
  }
};

// Track Contact - when user initiates contact
export const trackContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};

// Track InitiateCheckout - when user starts checkout/registration process
export const trackInitiateCheckout = (contentName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: contentName || 'Checkout',
    });
  }
};

// Track CompleteRegistration - when user completes a registration
export const trackCompleteRegistration = (contentName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: contentName || 'Registration',
    });
  }
};

// Track custom event for CTA clicks
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'CTAClick', {
      cta_name: ctaName,
      cta_location: ctaLocation,
    });
  }
};

// Track custom event for WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'WhatsAppClick', {
      location: location,
    });
  }
};

// Track custom event for nicho page views
export const trackNichoView = (nichoName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'NichoPageView', {
      nicho_name: nichoName,
    });
  }
};

// Track search
export const trackSearch = (searchString: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchString,
    });
  }
};

// Track Schedule Event
export const trackSchedule = (eventName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_name: eventName,
    });
  }
};

// Track custom event for form interactions
let lastFormTrackTime = 0;
export const trackFormStart = (formName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Debounce form tracking to prevent duplicate events
    const now = Date.now();
    if (now - lastFormTrackTime < 1000) return; // Prevent tracking within 1 second
    lastFormTrackTime = now;
    
    window.fbq('trackCustom', 'FormStart', {
      form_name: formName,
    });
  }
};
