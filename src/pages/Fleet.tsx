import React from 'react';
import { Link } from 'react-router-dom';
import SEOSchema from '../components/SEOSchema';

const fleetData = [
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Experience luxury and comfort in our premium sedans. Perfect for business travel and airport transfers.',
    image: '/images/fleet/lexus-sedan.jpg',
    capacity: '3 passengers',
    luggage: '3 suitcases',
  },
  {
    id: 'standard-suv',
    name: 'Standard SUV',
    description: 'Comfortable and reliable SUV transportation for families and small groups.',
    image: '/images/fleet/standard-suv.jpg',
    capacity: '5 passengers',
    luggage: '4 suitcases',
  },
  {
    id: 'first-class-suv',
    name: 'First Class SUV',
    description: 'Travel in ultimate luxury with our premium Cadillac Escalades. Perfect for VIP transportation.',
    image: '/images/fleet/escalade-suv.jpg',
    capacity: '6 passengers',
    luggage: '5 suitcases',
  },
  {
    id: 'sprinter',
    name: 'Sprinter Van',
    description: 'Spacious and luxurious Mercedes-Benz Sprinter vans for group travel and corporate events.',
    image: '/images/fleet/sprinter-van.jpg',
    capacity: '12-14 passengers',
    luggage: '12-14 suitcases',
    imagePosition: 'center center', // Add specific positioning for the Sprinter image
  },
  {
    id: 'limousine',
    name: 'Stretch Limousine',
    description: 'Make your special occasion unforgettable with our elegant stretch limousines. Perfect for weddings and celebrations.',
    image: '/images/fleet/stretch-limo.jpg',
    capacity: '8-10 passengers',
    luggage: '6 suitcases',
  },
];

const Fleet = () => {
  return (
    <>
      <SEOSchema type="Service" />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">Our Luxury Fleet</h1>
        <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-12">
          Experience unparalleled comfort and sophistication with our meticulously maintained luxury vehicles.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group relative border border-copper/20 rounded-lg overflow-hidden backdrop-blur-sm 
                       hover:border-copper/40 transition-all hover:shadow-copper-glow"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark/90 via-midnight-dark/20 to-transparent z-10"></div>
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: vehicle.imagePosition || 'center center' }}
                />
                <h2 className="absolute bottom-4 left-6 z-20 font-garamond text-2xl text-copper-lightest">
                  {vehicle.name}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-copper-light/90 mb-4">{vehicle.description}</p>
                <div className="mb-6 text-sm text-copper-light/80 space-y-1">
                  <p>Capacity: {vehicle.capacity}</p>
                  <p>Luggage: {vehicle.luggage}</p>
                </div>
                <Link
                  to={`/quote?vehicle=${encodeURIComponent(vehicle.name)}`}
                  state={{ selectedVehicle: vehicle.name }}
                  className="block bg-gradient-to-r from-copper to-copper-dark text-midnight text-center px-6 py-2 
                           rounded-full font-garamond hover:shadow-copper-glow transition-all transform 
                           hover:scale-105 active:scale-95"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fleet;