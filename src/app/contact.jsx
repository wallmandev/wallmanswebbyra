'use client'
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Button from './components/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Ta bort error/success när användare skriver
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || 'Ett fel uppstod');
        return;
      }

      // Success!
      setSuccessMessage('✓ Tack! Vi har mottagit ditt meddelande och kontaktar dig snart.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Dölj success-meddelande efter 5 sekunder
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Submit error:', error);
      setErrorMessage('Ett fel uppstod när meddelandet skulle skickas. Försök igen.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 w-full px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-lg p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-white">Kontakta oss</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Har du ett projekt i tankarna eller vill veta mer om hur vi kan hjälpa er? Fyll i formuläret så hör vi av oss inom 24 timmar.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-700/50">
                    <FaEnvelope className="text-white text-base sm:text-lg" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold mb-1 text-sm sm:text-base">E-post</h4>
                    <p className="text-gray-400 text-xs sm:text-sm break-all">kontakt@wallmanswebbyra.se</p>
                  </div>
                </div>
                <div className="flex space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-700/50">
                    <FaPhone className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm sm:text-base">Telefon</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">073-0514415</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Ditt namn</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm" 
                      placeholder="För- och efternamn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">E-post</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm" 
                      placeholder="din@epost.se"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Ämne</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm" 
                    placeholder="Vad gäller din förfrågan?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Meddelande</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm resize-none" 
                    placeholder="Berätta mer om ditt projekt..."
                    required
                  ></textarea>
                </div>

                {/* Error message */}
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 sm:p-4">
                    <p className="text-red-400 text-xs sm:text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Success message */}
                {successMessage && (
                  <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 sm:p-4">
                    <p className="text-green-400 text-xs sm:text-sm">{successMessage}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="outline" 
                  className="w-full text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? 'Skickar...' : 'Skicka meddelande'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;