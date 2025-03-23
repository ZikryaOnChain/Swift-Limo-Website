import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Car } from 'lucide-react';
import SEOSchema from '../components/SEOSchema';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEOSchema type="Organization" />
      
      <div>
        {/* Hero Section */}
        <div className="relative h-[80vh]">
          {/* Background Image */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${heroImages[currentImageIndex]}")`
            }}
          />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="font-garamond text-5xl md:text-6xl mb-6">
                  Luxury Transportation for Every Occasion
                </h1>
                <p className="text-xl mb-8 text-copper-light/90">
                  Experience unparalleled comfort and sophistication with Swift Airport Limousines. 
                  Your journey begins with excellence.
                </p>
                <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/support"
              className="text-center p-6 border border-copper/30 rounded-lg backdrop-blur-sm 
                       hover:border-copper/50 transition-all hover:bg-copper/5 group"
            >
              <Clock className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-garamond text-2xl mb-3">24/7 Service</h3>
              <p className="text-copper-light/90">
                Available round the clock for your transportation needs
              </p>
            </Link>
            <Link 
              to="/locations"
              className="text-center p-6 border border-copper/30 rounded-lg backdrop-blur-sm 
                       hover:border-copper/50 transition-all hover:bg-copper/5 group"
            >
              <MapPin className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-garamond text-2xl mb-3">Wide Coverage</h3>
              <p className="text-copper-light/90">
                Serving GTA, Kitchener-Waterloo, Cambridge, and Midland regions
              </p>
            </Link>
            <Link 
              to="/fleet"
              className="text-center p-6 border border-copper/30 rounded-lg backdrop-blur-sm 
                       hover:border-copper/50 transition-all hover:bg-copper/5 group"
            >
              <Car className="mx-auto mb-4 text-copper group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-garamond text-2xl mb-3">Luxury Fleet</h3>
              <p className="text-copper-light/90">
                Choose from our selection of premium vehicles
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;