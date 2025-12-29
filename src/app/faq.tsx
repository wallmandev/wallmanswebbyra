"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

const faqItems = [
	{
		question: 'Hur lång tid tar det att utveckla en webbplats?',
		content: (
			<p className="text-gray-200 font-sans">Tidsåtgången varierar beroende på projektets omfattning och komplexitet. En enklare webbplats kan vara klar på 1-2 veckor, medan mer avancerade lösningar kan ta 3-6 månader. Under vår initiala konsultation ger vi en mer exakt tidsram baserad på dina specifika behov.</p>
		)
	},
	{
		question: 'Vad ingår i ett standardpaket för webbutveckling?',
		content: (
			<>
				<p className="text-gray-200 font-sans mb-4">Vårt standardpaket inkluderar:</p>
				<ul className="space-y-2 text-gray-200 font-sans">
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Responsiv design som fungerar på alla enheter</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> SEO-optimering</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Grundläggande innehållshantering (CMS)</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Kontaktformulär</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Integration med sociala medier</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Grundläggande säkerhet</li>
				</ul>
				<p className="text-gray-200 font-sans mt-4">Vi erbjuder även tilläggstjänster som e-handel, avancerade formulär och anpassade funktioner.</p>
			</>
		)
	},
	{
		question: 'Hur fungerar betalningen?',
		content: (
			<>
				<p className="text-gray-200 font-sans mb-4">För de flesta projekt använder vi följande betalningsstruktur:</p>
				<ul className="space-y-3 text-gray-200 font-sans">
					<li className="flex items-start"><span className="font-semibold mr-3 bg-blue-600/30 px-3 py-1 rounded">30%</span> Vid projektstart</li>
					<li className="flex items-start"><span className="font-semibold mr-3 bg-blue-600/30 px-3 py-1 rounded">40%</span> Vid godkännande av design</li>
					<li className="flex items-start"><span className="font-semibold mr-3 bg-blue-600/30 px-3 py-1 rounded">30%</span> Vid färdigställande</li>
				</ul>
				<p className="text-gray-200 font-sans mt-4">För större projekt kan vi skräddarsy en betalningsplan som passar din budget. Alla priser anges exklusive moms.</p>
			</>
		)
	},
	{
		question: 'Kan ni hjälpa mig med drift och underhåll efter lansering?',
		content: (
			<p className="text-gray-200 font-sans">Absolut! Vi erbjuder flera olika underhållspaket anpassade efter dina behov. Våra paket inkluderar regelbundna säkerhetskopieringar, uppdateringar, säkerhetsövervakning och support. Många av våra kunder uppskattar lugn och ro med vårt No Worries-paket där vi sköter allt åt dem.</p>
		)
	},
	{
		question: 'Vad gör er annorlunda mot andra webbyråer?',
		content: (
			<> 
				<p className="text-gray-200 font-sans mb-4">Jag är specialiserad på små företag och fokuserar 100% på resultat:</p>
				<ul className="space-y-2 text-gray-200 font-sans mt-2">
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Fokus på små företag - jag förstår era utmaningar och budget</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Resultatinriktad - allt jag gör ska ge fler kunder till ditt företag</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> SEO från start - alla hemsidor byggs för att synas på Google</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Transparent prissättning - inga dolda kostnader</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Personlig kontakt - du når mig direkt, ingen byråkrati</li>
					<li className="flex items-start"><FaCheck className="text-accent mr-2 mt-1" /> Långsiktigt partnerskap - jag vill se ditt företag växa</li>
				</ul>
			</>
		)
	}
];

function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	return (
		<section className="py-20 w-full" id="faq">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Vanliga frågor</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">Här svarar vi på några av de vanligaste frågorna vi får.</p>
				</div>
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4">
						{faqItems.map((item, idx) => {
							const isOpen = openIndex === idx;
							return (
								<div key={idx} className="glass-card rounded-xl overflow-hidden">
									<button
										onClick={() => setOpenIndex(isOpen ? null : idx)}
										className="w-full flex justify-between items-center p-6 text-left faq-toggle"
									>
										<h3 className="text-lg font-semibold text-gray-200 font-sans">{item.question}</h3>
										<FaChevronDown className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
									</button>
									<div className={`faq-content px-6 pb-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>{item.content}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQ;