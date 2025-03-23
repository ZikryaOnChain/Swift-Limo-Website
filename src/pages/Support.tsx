import React from 'react';
import { Phone, Clock, Mail, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">24/7 Support</h1>
        <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-12">
          Our dedicated team is here to assist you around the clock, ensuring your journey is smooth and worry-free.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group text-center p-8 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all hover:shadow-copper-glow">
            <Phone className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h2 className="font-garamond text-2xl mb-4">Call Us Anytime</h2>
            <a 
              href="tel:+16473895380" 
              className="text-xl text-copper-light hover:text-copper transition-colors"
            >
              +1 (647) 389-5380
            </a>
          </div>

          <div className="group text-center p-8 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all hover:shadow-copper-glow">
            <Mail className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h2 className="font-garamond text-2xl mb-4">Email Support</h2>
            <a 
              href="mailto:info@swiftairportlimousines.com" 
              className="text-xl text-copper-light hover:text-copper transition-colors"
            >
              info@swiftairportlimousines.com
            </a>
          </div>
        </div>

        <div className="text-center mb-16 p-8 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all hover:shadow-copper-glow">
          <Clock className="mx-auto mb-4 text-copper" size={32} />
          <h2 className="font-garamond text-2xl mb-4">Always Available</h2>
          <p className="text-copper-light/80 max-w-2xl mx-auto">
            Our support team is available 24 hours a day, 7 days a week, 365 days a year. 
            Whether you need immediate assistance or want to make a future reservation, 
            we're here to help.
          </p>
        </div>

        <div className="border border-copper/20 rounded-lg p-8 backdrop-blur-sm hover:border-copper/40 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <MessageSquare size={24} className="text-copper" />
            <h2 className="font-garamond text-2xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
              <h3 className="font-garamond text-xl mb-2 text-copper">How far in advance should I book?</h3>
              <p className="text-copper-light/80">
                While we can accommodate last-minute bookings, we recommend booking at least 24 hours 
                in advance to ensure availability, especially for special events.
              </p>
            </div>

            <div className="p-6 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
              <h3 className="font-garamond text-xl mb-2 text-copper">What happens if my flight is delayed?</h3>
              <p className="text-copper-light/80">
                We monitor all flight arrivals in real-time and adjust your pickup time accordingly 
                at no additional charge.
              </p>
            </div>

            <div className="p-6 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
              <h3 className="font-garamond text-xl mb-2 text-copper">Do you provide child seats?</h3>
              <p className="text-copper-light/80">
                Yes, we can provide child seats upon request. Please specify your requirements when booking.
              </p>
            </div>

            <div className="p-6 border border-copper/10 rounded-lg hover:border-copper/30 transition-all">
              <h3 className="font-garamond text-xl mb-2 text-copper">What payment methods do you accept?</h3>
              <p className="text-copper-light/80">
                We accept all major credit cards, debit cards, and corporate accounts. Payment is 
                required at the time of booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;