'use client'
import Button from './components/Button';

function CTA() {
    return (
        <section id="cta" className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 font-rooftop">
                    Redo att växa online?
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Få en kostnadsfri SEO-analys av din nuvarande hemsida och upptäck hur ditt företag kan synas bättre på Google
                </p>
                <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                    Jag analyserar din konkurrens, sökordsposition och ger dig konkreta tips på hur du kan få fler kunder från Google
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        variant="default" 
                        onClick={() => window.location.href = 'mailto:kontakt@wallmanswebbyra.se'}
                        className="px-8 py-4 text-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white border-0"
                    >
                        Få gratis SEO-analys nu
                    </Button>
                    <Button 
                        variant="default" 
                        onClick={() => document.getElementById('tjanster')?.scrollIntoView()}
                        className="px-8 py-4 text-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white border-0"
                    >
                        Se hur jag kan hjälpa
                    </Button>
                </div>
                <p className="text-sm text-gray-400 mt-6">✓ Ingen bindningstid ✓ Kostnadsfri analys ✓ Svar inom 24h</p>
            </div>
        </section>
    );
}

export default CTA;