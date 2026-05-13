import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySection.css';

const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  "https://media.gettyimages.com/id/1493959975/photo/young-man-working-out-with-battle-ropes-in-gym.jpg?s=2048x2048&w=gi&k=20&c=AU9pMkFlLTtqi-Cn_W5Rp7g40dd7DZJXy1lQbIdQMt0=",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
];

const GallerySection = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container-fluid px-0">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="subtitle">OUR GALLERY</span>
          <h2 className="section-title">GYM <span>ATMOSPHERE</span></h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="gallery-swiper"
        >
          {galleryImages.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-item">
                <img src={imgUrl} alt={`Gallery ${index + 1}`} className="img-fluid" />
                <div className="gallery-overlay">
                  <div className="gallery-icon">+</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
