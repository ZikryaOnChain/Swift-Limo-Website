import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const areasData = [
  {
    id: 'gta',
    name: 'Greater Toronto Area',
    description: 'Comprehensive coverage across the entire Greater Toronto Area, including all major airports and business districts.',
    image: '/images/areas/gta.jpg',
  },
  {
    id: 'kitchener',
    name: 'Kitchener-Waterloo & Cambridge',
    description: 'Reliable service throughout the Tri-Cities region, connecting you to local airports and destinations.',
    image: '/images/areas/kitchener.jpg',
  },
  {
    id: 'midland',
    name: 'Midland Region',
    description: 'Serving the beautiful Midland region with premium transportation solutions for all your needs.',
    image: '/images/areas/midland.jpg',
  },
];

const Areas = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">Areas of Service</h1>
      <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-12">
        Providing luxury transportation services across Southern Ontario's major regions.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areasData.map((area) => (
          <div 
            key={area.id} 
            className="group relative border border-copper/20 rounded-lg overflow-hidden backdrop-blur-sm 
                     hover:border-copper/40 transition-all hover:shadow-copper-glow"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent z-10"></div>
              <img 
                src={area.image} 
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight-dark/50 flex items-center justify-center z-20 group-hover:bg-midnight-dark/30 transition-colors">
                <MapPin size={32} className="text-copper" />
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-garamond text-2xl mb-3">{area.name}</h2>
              <p className="text-copper-light/90 mb-6">{area.description}</p>
              <Link
                to={`/quote?area=${encodeURIComponent(area.name)}`}
                className="block bg-gradient-to-r from-copper to-copper-dark text-midnight text-center px-6 py-2 
                         rounded-full font-garamond hover:shadow-copper-glow transition-all"
              >
                Book Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;