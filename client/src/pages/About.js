import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const services = [
    {
      icon: '/assets/images/icon-design.svg',
      title: 'Full Stack Development',
      description: 'Building modern web applications using MERN stack with real-time features and secure authentication.'
    },
    {
      icon: '/assets/images/icon-app.svg',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications using Flutter and Dart with Firebase integration.'
    },
    {
      icon: '/assets/images/icon-dev.svg',
      title: 'AI & Machine Learning',
      description: 'Developing AI solutions using TensorFlow, Keras, and OpenCV for healthcare and computer vision applications.'
    },
    {
      icon: '/assets/images/icon-photo.svg',
      title: 'Programming Tutoring',
      description: 'Remote programming tutoring with proven track record of improving student coding proficiency by 40%.'
    }
  ];

  const testimonials = [
    {
      avatar: '/assets/images/avatar-1.png',
      name: 'Ahmad Ali',
      text: "Faizan's tutoring helped me understand complex programming concepts with ease. His teaching methodology is excellent and he always makes sure I grasp the fundamentals before moving to advanced topics."
    },
    {
      avatar: '/assets/images/avatar-2.png',
      name: 'Sara Khan',
      text: 'Working with Faizan on web development projects was an amazing experience. He has deep knowledge of React and Node.js, and his ability to explain complex concepts in simple terms is remarkable.'
    },
    {
      avatar: '/assets/images/avatar-3.png',
      name: 'Fatima Sheikh',
      text: 'Faizan helped me with Flutter development and machine learning concepts. His practical approach to teaching and real-world examples made learning enjoyable.'
    },
    {
      avatar: '/assets/images/avatar-4.png',
      name: 'Hassan Ahmed',
      text: "Faizan is an exceptional tutor who goes above and beyond to ensure student success. His expertise in data structures and algorithms helped me ace my programming interviews."
    }
  ];

  const technologies = [
    '/assets/images/React.png',
    '/assets/images/flutter.png',
    '/assets/images/firebase.png',
    '/assets/images/mongoDB.jpeg',
    '/assets/images/tensorflow.jpeg',
    '/assets/images/keras.png',
    '/assets/images/mern.jpeg'
  ];

  return (
    <motion.article 
      className="about active"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a Computer Science student at COMSATS University Islamabad, specializing in Full Stack Development, Flutter, Machine Learning, and AI. Currently pursuing my B.S. degree with an expected graduation in February 2026, maintaining a GPA of 3.50/4.00.
        </p>
        <p>
          My passion lies in creating innovative solutions that bridge the gap between technology and real-world problems. From developing AI-powered healthcare applications to building responsive web platforms, I enjoy transforming complex challenges into user-friendly, scalable solutions. I have experience tutoring 30+ students in programming, helping improve their coding proficiency by 40%.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Student Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={index}
              className="testimonials-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="content-card">
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Technologies</h3>
        <ul className="clients-list has-scrollbar">
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              className="clients-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href="#">
                <img src={tech} alt="Technology" />
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

export default About;

