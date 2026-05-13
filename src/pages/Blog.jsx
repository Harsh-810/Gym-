import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Blog.css';

const blogs = [
  {
    title: '10 Tips for Effective Muscle Gain',
    description: 'Learn the secrets of building muscle mass quickly and safely with our expert guide.',
    date: 'May 10, 2026',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'The Ultimate Guide to Fat Loss',
    description: 'Discover how to shed those extra pounds through consistent training and diet.',
    date: 'May 08, 2026',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Benefits of Yoga for Athletes',
    description: 'How yoga can improve your flexibility, balance, and mental focus in sports.',
    date: 'May 05, 2026',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Blog = () => {
  return (
    <main>
      <PageHero title="Our Blog" subtitle="Stay updated with the latest fitness tips, nutrition advice, and gym news." />
      <section className="blog-page section-padding">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="blog-card glass-card h-100">
                  <div className="blog-img">
                    <img src={blog.image} alt={blog.title} className="img-fluid" />
                    <span className="category-tag">{blog.category}</span>
                  </div>
                  <div className="blog-content">
                    <span className="date">{blog.date}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <a href="#" className="read-more">Read More</a>
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

export default Blog;
