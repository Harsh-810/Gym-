import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Bodybuilder',
    text: 'Best gym in the city! The trainers are very professional and the atmosphere is highly motivating. I have seen great results in just 3 months.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5
  },
  {
    name: 'Annette Black',
    role: 'Fitness Enthusiast',
    text: 'I love the group classes here. The community is so supportive and the facilities are always clean. Highly recommend the yoga sessions!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5
  },
  {
    name: 'Marvin McKinney',
    role: 'Athlete',
    text: 'High-end equipment and expert coaches. This place has everything you need to take your fitness to the next level. Worth every penny.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="subtitle">TESTIMONIALS</span>
          <h2 className="section-title">WHAT OUR <span>MEMBERS SAY</span></h2>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card glass-card">
                <div className="quote-icon"><FaQuoteLeft /></div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <div className="user-info">
                    <img src={testimonial.image} alt={testimonial.name} className="user-img" />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < testimonial.rating ? '#ff0000' : '#444'} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
