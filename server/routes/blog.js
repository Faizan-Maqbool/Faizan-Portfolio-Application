const express = require('express');
const router = express.Router();

// Sample blog posts data (can be moved to MongoDB later)
const blogPosts = [
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

// GET /api/blog
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// GET /api/blog/:id
router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Blog post not found' });
  }
  res.json(post);
});

module.exports = router;

