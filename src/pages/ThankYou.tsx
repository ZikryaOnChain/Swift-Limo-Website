import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const firstName = location.state?.firstName || 'Valued Customer';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle size={64} className="text-copper animate-pulse" />
        </div>
        
        <h1 className="font-garamond text-4xl md:text-5xl mb-6">
          Thank You, {firstName}!
        </h1>
        
        <p className="text-copper-light/90 text-lg mb-8">
          We've received your request and will get back to you shortly with a customized quote.
          Our team is committed to providing you with the best luxury transportation experience.
        </p>

        <div className="space-y-4">
          <div className="p-6 border border-copper/20 rounded-lg backdrop-blur-sm">
            <h2 className="font-garamond text-2xl mb-4">What's Next?</h2>
            <ul className="text-copper-light/90 space-y-2 text-left">
              <li>• Our team will review your request</li>
              <li>• You'll receive a detailed quote via email</li>
              <li>• We'll contact you to confirm the details</li>
              <li>• Your luxury transportation will be arranged</li>
            </ul>
          </div>

          <div className="p-6 border border-copper/20 rounded-lg backdrop-blur-sm">
            <h2 className="font-garamond text-2xl mb-4">Need Immediate Assistance?</h2>
            <p className="text-copper-light/90 mb-4">
              Call us anytime at{' '}
              <a 
                href="tel:+16473895380" 
                className="text-copper hover:text-copper-light transition-colors"
              >
                +1 (647) 389-5380
              </a>
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 text-copper hover:text-copper-light transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;