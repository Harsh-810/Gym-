import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './TrainersSection.css';

const trainers = [
  {
    name: 'John Doe',
    role: 'Head Trainer',
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    delay: 100
  },
  {
    name: 'Jane Smith',
    role: 'Yoga Expert',
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    delay: 200
  },
  {
    name: 'Mike Ross',
    role: 'CrossFit Coach',
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    delay: 300
  },
  {
    name: 'Sarah Connor',
    role: 'Bodybuilding Pro',
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    delay: 400
  }
];

const TrainersSection = () => {
  return (
    <section className="trainers-section section-padding" id="trainers">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="subtitle">EXPERT TEAM</span>
          <h2 className="section-title">MEET OUR <span>TRAINERS</span></h2>
        </div>
        
        <div className="row g-4">
          {trainers.map((trainer, index) => (
            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={trainer.delay}>
              <div className="trainer-card">
                <div className="trainer-img">
                  <img src={trainer.image} alt={trainer.name} className="img-fluid" />
                  <div className="trainer-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                </div>
                <div className="trainer-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
