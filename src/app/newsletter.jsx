'use client'
import { useState } from 'react';
import Button from './components/Button';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Vänligen ange en giltig e-postadress');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail(''); // Rensa formuläret
      } else {
        setMessage(data.error || 'Något gick fel');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Något gick fel. Kontrollera din internetanslutning.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 w-full px-6 bg-gradient-to-b from-gray-900/50 to-gray-900" id="newsletter">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-white">Prenumerera på vårt nyhetsbrev</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Få de senaste nyheterna om webbtrender, exklusiva erbjudanden och tips för att maximera din digitala närvaro.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e-postadress"
            className="flex-grow bg-gray-800/50 border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
            required
          />
          <Button 
            type="submit" 
            variant="outline" 
            className="whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? 'Prenumererar...' : 'Prenumerera'}
          </Button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg ${
            isSuccess 
              ? 'bg-green-900/30 text-green-400 border border-green-700' 
              : 'bg-red-900/30 text-red-400 border border-red-700'
          }`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;