import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: {
    default: "Hjälper Små Företag Synas på Google | Webbutveckling & SEO | Christoffer Wallman",
    template: "%s | Christoffer Wallman - Webbutveckling för Små Företag"
  },
  description: "Specialiserad på att hjälpa små företag att synas bättre på Google och växa online. Webbutveckling, SEO-optimering och digital marknadsföring. Få fler kunder med en modern hemsida. Kostnadsfri analys!",
  keywords: [
    "små företag webbutveckling",
    "synas på google",
    "SEO för små företag",
    "småföretag hemsida",
    "webbutveckling",
    "få fler kunder online",
    "växa online",
    "lokal SEO",
    "google my business optimering",
    "hemsida för företag",
    "digital synlighet",
    "google ranking förbättring",
    "webbyrå småföretag",
    "kostnadseffektiv webbutveckling",
    "SEO optimering",
    "företagshemsida",
    "digital tillväxt",
    "online marknadsföring små företag",
    "kostnadsfri SEO analys"
  ],
  authors: [{ name: "Christoffer Wallman" }],
  creator: "Christoffer Wallman",
  publisher: "Christoffer Wallman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://wallmanswebbyra.se',
    title: 'Hjälper Små Företag Synas på Google | Webbutveckling & SEO',
    description: 'Specialiserad på att hjälpa små företag att synas bättre på Google och växa online genom professionell webbutveckling och SEO-optimering.',
    siteName: 'Christoffer Wallman - Webbutveckling för Små Företag',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Christoffer Wallman - Hjälper små företag synas på Google',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hjälper Små Företag Synas på Google | Webbutveckling & SEO',
    description: 'Specialiserad på att hjälpa små företag växa online genom webbutveckling och SEO-optimering.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://wallmanswebbyra.se',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <meta charSet="UTF-8" />
        <title>Christoffer Wallman | Fullstack Developer & Digital Creator</title>
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RF5X4RVJ5P" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RF5X4RVJ5P');
          `}
        </Script>
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Tailwind CDN */}
        <script defer src="https://cdn.tailwindcss.com"></script>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* Inline CSS as given */}
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Space Grotesk', sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #e2e8f0;
    overflow-x: hidden;
}

.glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
}

.gradient-text {
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.03);
}

.glow {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
}

.nav-link {
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.floating {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}
        `}</style>

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Christoffer Wallman Webbutveckling",
              "image": "https://wallmanswebbyra.se/og-image.jpg",
              "description": "Specialiserad på att hjälpa små företag att synas bättre på Google och växa online genom professionell webbutveckling, SEO-optimering och digital marknadsföring.",
              "url": "https://wallmanswebbyra.se",
              "telephone": "+46-XXX-XXX-XXX",
              "email": "kontakt@christofferwallman.se",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SE"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Sverige"
              },
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.linkedin.com/in/christoffer-wallman-20223623a/",
                "https://www.facebook.com/profile.php?id=61577330613259",
                "https://www.instagram.com/wallmanswebbyra"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Webbutveckling & SEO-tjänster för små företag",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO-optimering för små företag",
                      "description": "Hjälper små företag att synas bättre på Google genom teknisk SEO, innehållsoptimering och lokal SEO",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "Christoffer Wallman Webbutveckling"
                      },
                      "areaServed": "Sverige"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Webbutveckling för småföretag",
                      "description": "Moderna, SEO-optimerade hemsidor som hjälper små företag att växa online och få fler kunder",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "Christoffer Wallman Webbutveckling"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital marknadsföring för små företag",
                      "description": "Strategier för att öka digital synlighet och få fler kunder online",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "Christoffer Wallman Webbutveckling"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kostnadsfri SEO-analys",
                      "description": "Gratis analys av din hemsidas SEO och förslag på förbättringar för bättre Google-ranking"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Christoffer Wallman - Webbutveckling för Små Företag",
              "image": "https://wallmanswebbyra.se/og-image.jpg",
              "description": "Expert på att hjälpa små företag att synas på Google och växa online. Webbutveckling, SEO-optimering och digital strategi.",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SE"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "1"
              }
            })
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Hur kan jag hjälpa mitt företag att synas bättre på Google?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "För att synas bättre på Google behöver din hemsida SEO-optimering, kvalitetsinnehåll med relevanta sökord, snabb laddningstid, mobilanpassning och regelbunden uppdatering. Jag hjälper små företag med teknisk SEO, innehållsstrategi och lokal SEO för att förbättra Google-ranking och få fler kunder."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Varför behöver mitt små företag en professionell hemsida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En professionell hemsida ger trovärdighet, gör det lättare för kunder att hitta dig på Google, fungerar som en säljkanal 24/7 och hjälper ditt företag att växa online. En SEO-optimerad hemsida kan ge dig betydligt fler kunder och ökad försäljning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vad kostar det att få en hemsida för mitt företag?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Priset varierar beroende på projektets omfattning och funktioner. Jag erbjuder kostnadseffektiva lösningar anpassade för små företag. Kontakta mig för en kostnadsfri analys och offert baserad på dina specifika behov."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hur lång tid tar det att utveckla en hemsida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En grundläggande hemsida tar vanligtvis 2-4 veckor, medan mer komplexa projekt med e-handel eller specialfunktioner kan ta 6-8 veckor. Tidsramen beror på projektets omfattning och dina specifika krav."
                  }
                }
              ]
            })
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen w-full">
        {children}
        {/* Mobile menu toggle & smooth scrolling JS */}
        <script>{`
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.md\\:hidden');
  const navLinks = document.querySelector('.hidden.md\\:flex');
  mobileMenuButton.addEventListener('click', function() {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-20');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('right-0');
    navLinks.classList.toggle('bg-gray-900');
    navLinks.classList.toggle('p-6');
    navLinks.classList.toggle('space-y-4');
    navLinks.classList.toggle('space-x-8');
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      if (!navLinks.classList.contains('hidden')) {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'right-0', 'bg-gray-900', 'p-6', 'space-y-4');
      }
    });
  });
});
        `}</script>
      </body>
    </html>
  );
}
