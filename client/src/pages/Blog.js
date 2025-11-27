import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React.js in 2024',
      category: 'Web Development',
      date: '2024-03-15',
      image: '/assets/images/blog-1.jpg',
      excerpt: 'A comprehensive guide to modern React development with hooks, context, and best practices.'
    },
    {
      id: 2,
      title: 'Flutter vs React Native: Which to Choose?',
      category: 'Mobile Development',
      date: '2024-02-28',
      image: '/assets/images/blog-2.jpg',
      excerpt: 'Comparing two popular cross-platform frameworks based on performance, development experience, and community.'
    },
    {
      id: 3,
      title: 'Machine Learning for Beginners',
      category: 'AI/ML',
      date: '2024-01-20',
      image: '/assets/images/blog-3.jpg',
      excerpt: 'Understanding the fundamentals of machine learning and how to get started with Python and TensorFlow.'
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js',
      category: 'Backend',
      date: '2023-12-10',
      image: '/assets/images/blog-4.jpg',
      excerpt: 'Learn how to create robust and scalable REST APIs using Node.js, Express.js, and MongoDB.'
    },
    {
      id: 5,
      title: 'Computer Vision with OpenCV and Python',
      category: 'Computer Vision',
      date: '2023-11-25',
      image: '/assets/images/blog-5.jpg',
      excerpt: 'Exploring object detection and image processing techniques using OpenCV library in Python.'
    },
    {
      id: 6,
      title: 'Firebase Integration in Flutter Apps',
      category: 'Cloud',
      date: '2023-10-15',
      image: '/assets/images/blog-6.jpg',
      excerpt: 'Complete guide to integrating Firebase services like Authentication, Firestore, and Cloud Storage in Flutter.'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <motion.article
      className="blog"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post, index) => (
            <motion.li
              key={post.id}
              className="blog-post-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

export default Blog;

