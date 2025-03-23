import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const regions = [
  {
    name: 'Greater Toronto Area',
    cities: [
      'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 
      'Richmond Hill', 'Oakville', 'Burlington', 'Milton', 'Ajax',
      'Pickering', 'Whitby', 'Oshawa'
    ],
    image: '/images/areas/gta.jpg'
  },
  {
    name: 'Kitchener-Waterloo & Cambridge',
    cities: [
      'Kitchener', 'Waterloo', 'Cambridge', 'Guelph', 'Brantford',
      'Paris', 'St. Jacobs', 'Elmira', 'New Hamburg'
    ],
    image: '/images/areas/kitchener.jpg'
  },
  {
    name: 'Midland Region',
    cities: [
      'Midland', 'Penetanguishene', 'Wasaga Beach', 'Collingwood',
      'Barrie', 'Orillia', 'Bradford', 'Innisfil'
    ],
    image: '/images/areas/midland.jpg'
  }
];

const Locations = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">Service Locations</h1>
      <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-12">
        Providing premium limousine services across Southern Ontario's major regions.
        Available 24/7 for all your transportation needs.
      </p>
      
      <div className="space-y-16">
        {regions.map((region) => (
          <div key={region.name} className="border border-copper/20 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent z-10"></div>
              <img 
                src={region.image} 
                alt={`${region.name} Limousine Services`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h2 className="font-garamond text-3xl text-center text-copper-lightest px-6 py-3 bg-midnight-dark/70 rounded-lg backdrop-blur-sm">
                  {region.name}
                </h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {region.cities.map((city) => (
                  <Link
                    key={city}
                    to={`/locations/${city.toLowerCase()}`}
                    className="group flex items-center gap-3 p-4 border border-copper/20 rounded-lg hover:border-copper/40 transition-all hover:shadow-copper-glow"
                  >
                    <MapPin size={20} className="text-copper group-hover:scale-110 transition-transform" />
                    <span className="text-copper-light group-hover:text-copper transition-colors">{city}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;