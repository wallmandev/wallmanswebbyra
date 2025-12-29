'use client'

import Image from 'next/image';

function About() {
  return (
    <section id="om-oss" className="pt-32 pb-16 w-full px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column - Main content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 font-rooftop leading-tight mb-8">
                Jag skapar
                <br />
                <span className="text-gray-400">digitala upplevelser</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Jag är Christoffer Wallman, fullstack-utvecklare och content creator som förvandlar idéer till moderna webbapplikationer. Genom kreativ problemlösning och teknisk expertis skapar jag digitala lösningar som engagerar användare och driver resultat.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Min utvecklingsfilosofi</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Jag kombinerar modern teknik med användarvänlig design för att skapa webbapplikationer som inte bara ser bra ut, utan också levererar resultat. Varje projekt är en möjlighet att bygga något som verkligen gör skillnad.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vad som driver mig</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Passion för innovation, kärlek till ren kod och en djup förståelse för användarupplevelse. Som content creator delar jag också kunskaper och inspirerar andra utvecklare att växa inom sitt yrke.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Stats/Info */}
          <div className="space-y-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 font-rooftop mb-2">30+</div>
                <div className="text-gray-600 text-lg">Nöjda kunder</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 font-rooftop mb-2">4+</div>
                <div className="text-gray-600 text-lg">År av kodning</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 font-rooftop mb-2">50+</div>
                <div className="text-gray-600 text-lg">Projekt levererade</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 font-rooftop mb-2">∞</div>
                <div className="text-gray-600 text-lg">Kreativitet</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Så här jobbar jag</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Djupdyker i ditt projekt och förstår dina mål</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Skapar wireframes och prototyper för optimal UX</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Utvecklar med modern teknik och ren kod</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-lg">Levererar och ger kontinuerlig support</span>
                </li>
              </ul>
              
              <div className="mt-6 w-full">
                <Image 
                  src="/IMG_0560.webp" 
                  alt="Christoffer Wallman arbetar med webbutveckling på sin iPad" 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;