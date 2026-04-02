import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    clinic: 'HeartCare Clinic, Mumbai',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    content: 'MediWeGo has transformed how we manage our clinic. The appointment scheduling and digital prescriptions have saved us countless hours. Our patients love the convenience too!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Rajesh Patel',
    role: 'General Physician',
    clinic: 'Patel Healthcare, Delhi',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    content: 'The billing and payment management features are exceptional. We have seen a 40% improvement in revenue collection since switching to MediWeGo. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    clinic: 'KidsCare Hospital, Bangalore',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
    content: 'As a pediatrician, keeping accurate records is crucial. MediWeGo patient management system is intuitive and comprehensive. It has made my practice so much more efficient.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Dr. Arun Sharma',
    role: 'Orthopedic Surgeon',
    clinic: 'OrthoCare Center, Hyderabad',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face',
    content: 'The analytics and reporting features give us insights we never had before. We can now make data-driven decisions to improve our practice operations.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="section-title mb-4">
              Loved by <span className="gradient-text">healthcare professionals</span>
            </h2>
            <p className="section-subtitle mx-auto">
              See what doctors and clinic owners across India are saying about MediWeGo.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.clinic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1000+', label: 'Healthcare Providers' },
              { value: '50+', label: 'Cities Covered' },
              { value: '1M+', label: 'Patients Managed' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
