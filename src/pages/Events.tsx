import React from 'react';
import { Link } from 'react-router-dom';

const eventsData = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Make your special day even more memorable with our luxury wedding transportation services.',
    image: '/images/events/wedding.jpg',
    objectPosition: 'center 30%',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional transportation solutions for business meetings, conferences, and corporate gatherings.',
    image: '/images/events/corporate.jpg',
    objectPosition: 'center 25%',
  },
  {
    id: 'proms',
    title: 'Proms & Graduations',
    description: 'Arrive in style for your milestone celebrations with our luxury vehicles.',
    image: '/images/events/prom.jpg',
    objectPosition: 'center center',
  },
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">Events & Occasions</h1>
      <p className="text-copper-light/80 text-center max-w-2xl mx-auto mb-12">
        Making every special moment extraordinary with our premium transportation services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {eventsData.map((event) => (
          <div 
            key={event.id} 
            className="group relative border border-copper/20 rounded-lg overflow-hidden backdrop-blur-sm 
                     hover:border-copper/40 transition-all hover:shadow-copper-glow"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent z-10"></div>
              <img 
                src={event.image} 
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: event.objectPosition }}
              />
            </div>
            <div className="p-6">
              <h2 className="font-garamond text-2xl mb-3">{event.title}</h2>
              <p className="text-copper-light/90 mb-6">{event.description}</p>
              <Link
                to={`/quote?event=${encodeURIComponent(event.title)}`}
                className="block bg-gradient-to-r from-copper to-copper-dark text-midnight text-center px-6 py-2 
                         rounded-full font-garamond hover:shadow-copper-glow transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center p-8 border border-copper/20 rounded-lg backdrop-blur-sm hover:border-copper/40 transition-all">
        <h2 className="font-garamond text-3xl mb-6">Custom Events</h2>
        <p className="text-copper-light/90 mb-8">
          Planning a different type of event? We provide customized transportation solutions for any occasion. 
          Contact us to discuss your specific requirements.
        </p>
        <Link
          to="/quote"
          className="inline-block bg-gradient-to-r from-copper to-copper-dark text-midnight px-8 py-3 
                   rounded-full font-garamond hover:shadow-copper-glow transition-all"
        >
          Request Custom Quote
        </Link>
      </div>
    </div>
  );
};

export default Events;