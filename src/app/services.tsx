'use client'
function Services() {
  return (
    <section id="tjanster" className="py-24 w-full px-6 bg-gray-50" aria-label="Webbutvecklingstjänster för små företag">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-rooftop">
            Så hjälper jag ditt företag växa online
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Komplett webbutveckling och SEO-optimering specialanpassad för små företag som vill synas bättre på Google och få fler kunder
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - SEO Focus */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6" role="img" aria-label="SEO optimering ikon">
              <i className="fas fa-search text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">SEO-optimering för Google</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jag hjälper små företag att synas bättre på Google genom teknisk SEO, sökordsoptimering och lokal SEO. Få fler kunder när de söker efter dina tjänster.
            </p>
          </article>

          {/* Service 2 - Web Development */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6" role="img" aria-label="Webbutveckling ikon">
              <i className="fas fa-code text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Modern Webbutveckling</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Professionella hemsidor byggda med React och Next.js. Snabba, mobilanpassade och SEO-optimerade från start. Perfekt för småföretag som vill växa online.
            </p>
          </article>

          {/* Service 3 - Digital Strategy */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6" role="img" aria-label="Digital strategi ikon">
              <i className="fas fa-chart-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Tillväxtstrategi</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Strategier för att öka din digitala synlighet och få fler kunder. Analys av konkurrenter, målgrupp och möjligheter för ditt företags online-tillväxt.
            </p>
          </article>

          {/* Service 4 - Local SEO */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6" role="img" aria-label="Lokal SEO ikon">
              <i className="fas fa-map-marker-alt text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lokal SEO</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Optimering för lokala sökningar. Google My Business, lokala sökord och kartsynlighet så lokala kunder hittar just ditt företag först.
            </p>
          </article>

          {/* Service 5 - E-commerce */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6" role="img" aria-label="E-handel ikon">
              <i className="fas fa-shopping-cart text-pink-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">E-handel för Småföretag</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kostnadseffektiva e-handelslösningar med betalningar och lagerhantering. Sälj dina produkter online 24/7 och nå fler kunder än någonsin.
            </p>
          </article>

          {/* Service 6 - Social Media */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6" role="img" aria-label="Sociala medier ikon">
              <i className="fas fa-share-alt text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Sociala Medier & Content</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Strategisk hantering av Instagram, Facebook och LinkedIn. Jag skapar engagerande innehåll som bygger ditt varumärke och attraherar rätt kunder.
            </p>
          </article>

          {/* Service 7 - Digital Marketing */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6" role="img" aria-label="Digital marknadsföring ikon">
              <i className="fas fa-bullhorn text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Marknadsföring</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Från Google Ads till strategisk email-marknadsföring. Jag hjälper dig nå rätt kunder med rätt budskap på rätt tid för maximal ROI.
            </p>
          </article>

          {/* Service 8 - Support */}
          <article className="bg-white p-8 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6" role="img" aria-label="Support ikon">
              <i className="fas fa-headset text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Kontinuerlig Optimering</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Löpande support, tekniskt underhåll och SEO-förbättringar. Din hemsida hålls uppdaterad och fortsätter att prestera bättre på Google över tid.
            </p>
          </article>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Varför välja mig för ditt företags digitala tillväxt?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700">Fokus på resultat och ROI för ditt företag</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-700">Din hemsida jobbar för dig dygnet runt</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">SEO</div>
                <p className="text-gray-700">Alla hemsidor byggs SEO-optimerade från start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;