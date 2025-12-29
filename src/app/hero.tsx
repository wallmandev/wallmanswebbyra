'use client'
import React from 'react';
import Button from './components/Button';

function Hero() {
  return (
    <main>
      <section id="hem" className="min-h-screen flex items-center justify-center pt-24 pb-8 px-4 overflow-hidden relative">
        {/* Video Background */}
        <video 
          className="video-background"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/coding-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="video-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered content */}
          <div className="text-center space-y-6">
            <header>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-rooftop mb-4">
                <span className="text-white block mb-2">Hjälper Företag</span>
                <span className="block text-hollow-outline">Att Synas</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-rooftop mb-4">
                Webbutveckling, SEO, Marknadsföring & Sociala Medier
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Specialiserad på att hjälpa småföretag att få fler kunder genom modern hemsida, bättre Google-ranking, strategisk marknadsföring och engagerande sociala medier
              </p>
            </header>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button variant="outline" onClick={() => window.location.href = 'mailto:kontakt@wallmanswebbyra.se'}>
                Få en kostnadsfri SEO-analys
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('tjanster')?.scrollIntoView({ behavior: 'smooth' })}>
                Se hur jag kan hjälpa dig
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;