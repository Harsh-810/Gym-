import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Transformations.css';

const stories = [
  {
    name: 'Kevin Hart',
    time: '6 Months',
    result: 'Lost 25kg',
    description: 'I never thought I could achieve this. The trainers at GYMPRO changed my life.',
    before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    after: 'https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Emma Watson',
    time: '12 Months',
    result: 'Muscle Gain',
    description: 'Building strength was my goal, and GYMPRO provided the perfect tools for it.',
    before: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    after: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Transformations = () => {
  return (
    <main>
      <PageHero title="Transformation Stories" subtitle="Real results from our dedicated members." />
      <section className="transform-page section-padding">
        <div className="container">
          <div className="row g-5">
            {stories.map((story, index) => (
              <div className="col-12" key={index} data-aos="fade-up">
                <div className="story-card glass-card overflow-hidden">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="story-images">
                        <div className="img-container">
                          <img src={story.before} alt="Before" />
                          <span className="badge">Before</span>
                        </div>
                        <div className="img-container">
                          <img src={story.after} alt="After" />
                          <span className="badge">After</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="story-content p-5">
                        <span className="time-badge">{story.time}</span>
                        <h3>{story.name}</h3>
                        <h4 className="result-text">{story.result}</h4>
                        <p className="mt-4">{story.description}</p>
                        <div className="mt-5">
                          <button className="btn btn-premium">Read Full Story</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transformations;
