'use client'
import Image from 'next/image';

const projectsData = [
    {
        imgSrc: "/jAQHKS3k0-min.png",
        title: "Responsiv Bröllopshemsida med Gästhantering",
        description: "Skräddarsydd bröllopshemsida byggd med React och modern webbdesign. Inkluderar OSA-system, gästinformation och mobiloptimerad design för det perfekta bröllopet.",
        link: "#",
        alt: "Bröllopshemsida med elegant design och responsiv layout",
        keywords: ["Bröllopshemsida", "Formulär för OSA", "Responsiv design"]
    },
    {
        imgSrc: "/cropcollect-project.png",
        title: "CropCollect - Hållbar E-handelsplattform",
        description: "Modern e-handelslösning för lokal handel med fokus på hållbarhet. Byggd med Next.js, integrerad betalning och optimerad för SEO och konvertering.",
        link: "https://cropcollect.com",
        alt: "CropCollect e-handelsplattform för hållbar lokal handel",
        keywords: ["E-handel", "SEO", "Hållbarhet", "Webshop"]
    },
    {
        imgSrc: "/Vessly.webp",
        title: "Vessly - Skalbar Marknadsplats för Båtentusiaster",
        description: "Avancerad marknadsplats med sökfunktioner, användarhantering och säker betalning. TypeScript, React och optimerad databasarkitektur för skalbarhet.",
        link: "https://www.vessly.se",
        alt: "Vessly marknadsplats för båtförsäljning och båtuthyrning",
        keywords: ["Marknadsplats", "B2C", "Skalbar webb"]
    },
    {
        imgSrc: "/BornHolmDaek.webp",
        title: "Bornholm Dæk - Lokal Däckservice på Bornholm",
        description: "Webbplats för lokalt däckföretag med fokus på försäljning, däckbyte, däckhotell och service. Optimerad för lokal SEO och användarupplevelse för privatpersoner och företag.",
        link: "https://www.bornholmdaek.dk",
        alt: "Bornholm Dæk däckservice och försäljning på Bornholm",
        keywords: ["Lokal däckexpertis", "Snabb däckbyte & service", "Framtidsfokuserad SEO", "Bornholms vägvärn"]
    }
];

function Projects() {
 return (
    <section id="portfolio" className="py-24 w-full px-6" aria-label="Portfolio och webbutvecklingsprojekt">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-rooftop">
            Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Utvalda webbutvecklingsprojekt, e-handel och responsiv webbdesign. Från enkla hemsidor till komplexa digitala plattformar.
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <article key={index} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${project.link !== '#' ? 'cursor-pointer' : ''}`}>
              {project.link !== '#' ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={project.imgSrc} 
                      alt={project.alt}
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.keywords.map((keyword, idx) => (
                        <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={project.imgSrc} 
                      alt={project.alt}
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.keywords.map((keyword, idx) => (
                        <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
 );
}

export default Projects;
