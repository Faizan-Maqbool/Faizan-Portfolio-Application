const express = require('express');
const router = express.Router();

// Sample projects data (can be moved to MongoDB later)
const projects = [
  {
    id: 1,
    title: 'CardioLink - AI Cardiac Health System',
    category: 'AI/ML Projects',
    image: '/assets/images/project-1.jpg',
    description: 'AI-powered healthcare application for cardiac health monitoring'
  },
  {
    id: 2,
    title: 'Studify - AI Productivity App',
    category: 'Mobile Apps',
    image: '/assets/images/project-2.png',
    description: 'Cross-platform mobile application built with Flutter'
  },
  {
    id: 3,
    title: 'Realtime Chat Application',
    category: 'Web Applications',
    image: '/assets/images/project-3.jpg',
    description: 'Real-time messaging application using MERN stack'
  },
  {
    id: 4,
    title: 'YOLO-Based Car Detection System',
    category: 'AI/ML Projects',
    image: '/assets/images/project-4.png',
    description: 'Computer vision project using YOLO for object detection'
  },
  {
    id: 5,
    title: 'Aqueous Solubility Prediction',
    category: 'AI/ML Projects',
    image: '/assets/images/project-5.png',
    description: 'Machine learning model for predicting chemical solubility'
  }
];

// GET /api/projects
router.get('/', (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'all') {
    const filtered = projects.filter(p => 
      p.category.toLowerCase().includes(category.toLowerCase())
    );
    return res.json(filtered);
  }
  
  res.json(projects);
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;

