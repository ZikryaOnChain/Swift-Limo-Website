import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car, Clock, Shield, MapPin } from 'lucide-react';
import SEOSchema from '../../components/SEOSchema';

const CityPage = () => {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';

  return (
    <>
      <SEOSchema type="LocalBusiness" city={formattedCity} />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">
          Luxury Limousine Service in {formattedCity}
        </h1>
        <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-8">
          Premium airport transfers and luxury transportation services in {formattedCity}. 
          Available 24/7 for corporate events, weddings, and special occasions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            to="/quote"
            className="bg-gradient-to-r from-copper to-copper-dark text-midnight px-8 py-3 
                     rounded-full font-garamond text-lg hover:shadow-copper-glow transition-all 
                     transform hover:scale-105 active:scale-95"
          >
            Get Quote
          </Link>
          <Link
            to="/fleet"
            className="border border-copper hover:bg-copper/10 px-8 py-3 rounded-full 
                     font-garamond text-lg transition-all hover:shadow-copper-glow"
          >
            View Fleet
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all group">
            <Car className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-garamond text-xl mb-2">Premium Fleet</h3>
            <p className="text-copper-light/80">Luxury vehicles maintained to the highest standards</p>
          </div>
          
          <div className="text-center p-6 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all group">
            <Clock className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-garamond text-xl mb-2">24/7 Service</h3>
            <p className="text-copper-light/80">Available round the clock for your convenience</p>
          </div>
          
          <div className="text-center p-6 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all group">
            <Shield className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-garamond text-xl mb-2">Professional Drivers</h3>
            <p className="text-copper-light/80">Experienced and courteous chauffeurs</p>
          </div>
          
          <div className="text-center p-6 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all group">
            <MapPin className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-garamond text-xl mb-2">Local Knowledge</h3>
            <p className="text-copper-light/80">Expert navigation of {formattedCity} routes</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-garamond text-3xl mb-6 text-center">Our Services in {formattedCity}</h2>
          <div className="space-y-6">
            <div className="p-6 border border-copper/20 rounded-lg hover:border-copper/40 transition-all">
              <h3 className="font-garamond text-xl mb-2">Airport Transfers</h3>
              <p className="text-copper-light/80 mb-4">
                Reliable and comfortable transportation to and from all major airports serving {formattedCity}.
                Flight monitoring and adjustments for delays at no extra charge.
              </p>
            </div>
            
            <div className="p-6 border border-copper/20 rounded-lg hover:border-copper/40 transition-all">
              <h3 className="font-garamond text-xl mb-2">Corporate Transportation</h3>
              <p className="text-copper-light/80 mb-4">
                Professional transportation solutions for business meetings, conferences, and corporate events
                in {formattedCity}.
              </p>
            </div>
            
            <div className="p-6 border border-copper/20 rounded-lg hover:border-copper/40 transition-all">
              <h3 className="font-garamond text-xl mb-2">Special Events</h3>
              <p className="text-copper-light/80 mb-4">
                Luxury transportation for weddings, proms, and special occasions in {formattedCity}.
                Make your special day even more memorable.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/quote"
            className="inline-block bg-gradient-to-r from-copper to-copper-dark text-midnight px-8 py-3 
                     rounded-full font-garamond text-lg hover:shadow-copper-glow transition-all 
                     transform hover:scale-105 active:scale-95"
          >
            Get a Quote for {formattedCity}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CityPage;