'use client';

import React, { useState } from 'react';

// Typdefinitioner för onboarding-data
type CompanyInfo = {
  companyName: string;
  orgNumber: string;
  existingWebsite: string;
  contactPerson: string;
  email: string;
  phone: string;
};

type GoalsInfo = {
  mainGoal: string;
  targetAudience: string;
  competitors: string;
  deadline: string;
};

type DesignInfo = {
  logo: File | null;
  logoName: string;
  colorPreferences: string;
  stylePreference: string;
  inspirationLinks: string;
};

type FunctionalityInfo = {
  contactForm: boolean;
  quoteRequest: boolean;
  bookingSystem: boolean;
  bookingSystemDetails: string;
  blog: boolean;
  ecommerce: boolean;
  ecommerceProductCount: string;
  multilingual: boolean;
  multilingualLanguages: string;
  socialMedia: boolean;
};

type ContentInfo = {
  hasTexts: string;
  hasImages: string;
  materialLinks: string;
  additionalComments: string;
};

type OnboardingData = {
  company: CompanyInfo;
  goals: GoalsInfo;
  design: DesignInfo;
  functionality: FunctionalityInfo;
  content: ContentInfo;
};

const initialData: OnboardingData = {
  company: {
    companyName: '',
    orgNumber: '',
    existingWebsite: '',
    contactPerson: '',
    email: '',
    phone: '',
  },
  goals: {
    mainGoal: '',
    targetAudience: '',
    competitors: '',
    deadline: '',
  },
  design: {
    logo: null,
    logoName: '',
    colorPreferences: '',
    stylePreference: '',
    inspirationLinks: '',
  },
  functionality: {
    contactForm: false,
    quoteRequest: false,
    bookingSystem: false,
    bookingSystemDetails: '',
    blog: false,
    ecommerce: false,
    ecommerceProductCount: '',
    multilingual: false,
    multilingualLanguages: '',
    socialMedia: false,
  },
  content: {
    hasTexts: '',
    hasImages: '',
    materialLinks: '',
    additionalComments: '',
  },
};

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 7;

  const updateCompany = (field: keyof CompanyInfo, value: string) => {
    setData(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: value,
      },
    }));
  };

  const updateGoals = (field: keyof GoalsInfo, value: string) => {
    setData(prev => ({
      ...prev,
      goals: {
        ...prev.goals,
        [field]: value,
      },
    }));
  };

  // Validering för steg 2 (företagsinformation)
  const validateCompanyInfo = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!data.company.companyName.trim()) {
      newErrors.companyName = 'Företagsnamn är obligatoriskt';
    }
    if (!data.company.contactPerson.trim()) {
      newErrors.contactPerson = 'Kontaktperson är obligatoriskt';
    }
    if (!data.company.email.trim()) {
      newErrors.email = 'E-post är obligatoriskt';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.company.email)) {
      newErrors.email = 'Ange en giltig e-postadress';
    }
    if (!data.company.phone.trim()) {
      newErrors.phone = 'Telefonnummer är obligatoriskt';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    // Validera steg 2 innan vi går vidare
    if (currentStep === 1) {
      if (!validateCompanyInfo()) {
        return;
      }
    }

    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-300">
            Steg {currentStep + 1} av {totalSteps}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
        {/* Step dots */}
        <div className="flex justify-between mt-6">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                idx <= currentStep
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-110'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Wizard content */}
      <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 md:p-10 shadow-2xl">
        {/* STEG 0: Välkommen */}
        {currentStep === 0 && (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rooftop">Välkommen!</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              På denna sida samlar vi in all information vi behöver för att starta ert webbprojekt.
              Det tar cirka <strong className="text-white">5–10 minuter</strong> att fylla i.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-sm text-blue-300">
                💡 <strong>Tips:</strong> Ha gärna tillgång till er logotyp, länkar till konkurrenters hemsidor och 
                eventuella preferenser för design och funktionalitet.
              </p>
            </div>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition shadow-lg text-lg"
            >
              Starta onboarding →
            </button>
          </div>
        )}

        {/* STEG 1: Företagsinformation */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 font-rooftop">Företagsinformation</h2>
            <p className="text-sm text-gray-400 mb-8">Berätta om ert företag</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Företagsnamn <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={data.company.companyName}
                  onChange={(e) => updateCompany('companyName', e.target.value)}
                  placeholder="T.ex. Wallmans Webbyrå AB"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
                {errors.companyName && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Organisationsnummer
                </label>
                <input
                  type="text"
                  value={data.company.orgNumber}
                  onChange={(e) => updateCompany('orgNumber', e.target.value)}
                  placeholder="XXXXXX-XXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Befintlig hemsida (om ni har)
                </label>
                <input
                  type="url"
                  value={data.company.existingWebsite}
                  onChange={(e) => updateCompany('existingWebsite', e.target.value)}
                  placeholder="https://www.exempelforetag.se"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kontaktperson <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={data.company.contactPerson}
                  onChange={(e) => updateCompany('contactPerson', e.target.value)}
                  placeholder="För- och efternamn"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
                {errors.contactPerson && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.contactPerson}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-post <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={data.company.email}
                  onChange={(e) => updateCompany('email', e.target.value)}
                  placeholder="namn@foretag.se"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={data.company.phone}
                  onChange={(e) => updateCompany('phone', e.target.value)}
                  placeholder="070-123 45 67"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEG 2: Mål & målgrupp */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 font-rooftop">Mål & Målgrupp</h2>
            <p className="text-sm text-gray-400 mb-8">Vad vill ni uppnå med er nya hemsida?</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Vad är huvudmålet med hemsidan?
                </label>
                <textarea
                  value={data.goals.mainGoal}
                  onChange={(e) => updateGoals('mainGoal', e.target.value)}
                  placeholder="T.ex. Få fler kunder, synas bättre på Google, presentera våra tjänster professionellt..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Vilken är er primära målgrupp?
                </label>
                <textarea
                  value={data.goals.targetAudience}
                  onChange={(e) => updateGoals('targetAudience', e.target.value)}
                  placeholder="T.ex. Småföretagare, B2B-kunder inom tech, privatpersoner 25-45 år..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  2–3 konkurrenters hemsidor
                </label>
                <textarea
                  value={data.goals.competitors}
                  onChange={(e) => updateGoals('competitors', e.target.value)}
                  placeholder="Ange URL:er till konkurrenters hemsidor, en per rad"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Har ni någon tidsram eller deadline?
                </label>
                <input
                  type="text"
                  value={data.goals.deadline}
                  onChange={(e) => updateGoals('deadline', e.target.value)}
                  placeholder="T.ex. Innan sommaren 2025, så snart som möjligt, inget brådskande..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Remaining steps */}
        {currentStep > 2 && (
          <div>
            {/* Add the rest of the steps here */}
          </div>
        )}
      </div>
    </div>
  );
}