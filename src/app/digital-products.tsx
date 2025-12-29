'use client'

function DigitalProducts() {
  return (
    <section id="resurser" className="py-24 w-full px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-rooftop">
            Resurser & Verktyg
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Digitala resurser jag skapat för att dela kunskap och hjälpa andra utvecklare och marknadsförare i sina projekt.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Product 1 - Wallman Copy Kit: SEO Edition */}
          <article className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Copywriting Kit</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Wallman Copy Kit: SEO Edition</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Komplett samling av SEO-copywriting templates och strategier för att förbättra din webbplats innehåll och ranking.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SEO Copy Templates</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Keyword Strategier</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Content Guidelines</span>
            </div>

            <a 
              href="#kontakt" 
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
            >
              Läs mer 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>

          {/* Product 2 - SEO Audit Template */}
          <article className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="mb-6">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Audit Verktyg</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">SEO Audit Template</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Professionell SEO-audit mall för att spåra, förbättra och rankea högre i sökresultaten. Track. Improve. Rank.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Audit Checklista</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Ranking Tracker</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Improvement Guide</span>
            </div>

            <a 
              href="#kontakt" 
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
            >
              Läs mer 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>

        <p className="text-center text-gray-500 mt-12 text-lg">
          Resurser som kan hjälpa dig att bygga bättre webbplatser och optimera dina SEO-projekt.
        </p>
      </div>
    </section>
  );
}

export default DigitalProducts;