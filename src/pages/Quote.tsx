import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock as ClockIcon } from 'lucide-react';
import { submitToGoogleSheets } from '../utils/sheets';

const fleetData = [
  {
    id: 'sedan',
    name: 'Lexus Sedan',
    description: 'Premium sedan for business travel and airport transfers',
    capacity: '3 passengers',
  },
  {
    id: 'standard-suv',
    name: 'Standard SUV',
    description: 'Comfortable SUV for families and small groups',
    capacity: '5 passengers',
  },
  {
    id: 'first-class-suv',
    name: 'Escalade SUV',
    description: 'First-class Cadillac Escalade for VIP transportation',
    capacity: '6 passengers',
  },
  {
    id: 'sprinter',
    name: 'Sprinter Van',
    description: 'Spacious Mercedes-Benz Sprinter for group travel',
    capacity: '12-14 passengers',
  },
  {
    id: 'limousine',
    name: 'Stretch Limousine',
    description: 'Elegant stretch limousine for special occasions',
    capacity: '8-10 passengers',
  },
];

const Quote = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    pickup: '',
    dropoff: '',
    vehicle: '',
    area: searchParams.get('area') || '',
    event: searchParams.get('event') || '',
    notes: '',
  });

  useEffect(() => {
    const vehicleFromState = location.state?.selectedVehicle;
    const vehicleFromParams = searchParams.get('vehicle');
    const selectedVehicle = vehicleFromState || vehicleFromParams || '';
    
    setFormData(prev => ({
      ...prev,
      vehicle: selectedVehicle
    }));
  }, [location.state, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await submitToGoogleSheets(formData);
      
      if (result.success) {
        // Get the first name
        const firstName = formData.name.split(' ')[0];
        
        // Navigate to thank you page with the first name
        navigate('/thank-you', { state: { firstName } });
      } else {
        alert('There was an error submitting your request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const inputClasses = "w-full bg-midnight/50 border border-copper/30 rounded-lg px-4 py-3 focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/50 placeholder-copper-light/50 text-copper-lightest transition-all";
  const labelClasses = "block font-garamond text-lg mb-2 text-copper-lightest";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-garamond text-4xl md:text-5xl mb-6 text-center">Get a Quote</h1>
        <p className="text-copper-lightest/90 text-center mb-12">
          Fill out the form below and we'll get back to you with a custom quote for your transportation needs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-copper/20 rounded-lg backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Your phone number"
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className={labelClasses}>Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`${inputClasses} cursor-pointer [color-scheme:dark] pr-10`}
                  style={{
                    colorScheme: 'dark'
                  }}
                />
                <Calendar 
                  size={20} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-copper pointer-events-none" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className={labelClasses}>Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={`${inputClasses} cursor-pointer`}
              >
                <option value="">Select time</option>
                {generateTimeSlots().map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="pickup" className={labelClasses}>Pickup Location</label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Enter pickup address"
            />
          </div>

          <div>
            <label htmlFor="dropoff" className={labelClasses}>Drop-off Location</label>
            <input
              type="text"
              id="dropoff"
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Enter destination address"
            />
          </div>

          <div>
            <label htmlFor="vehicle" className={labelClasses}>Preferred Vehicle</label>
            <select
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className={`${inputClasses} cursor-pointer`}
            >
              <option value="">Select a vehicle</option>
              {fleetData.map(vehicle => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicle.name} ({vehicle.capacity})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className={labelClasses}>Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className={inputClasses}
              placeholder="Any special requirements or requests?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-copper to-copper-dark text-midnight px-6 py-4 
                     rounded-lg font-garamond text-lg hover:shadow-copper-glow transition-all 
                     transform hover:scale-105 active:scale-95"
          >
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;