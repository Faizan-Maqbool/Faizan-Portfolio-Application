# Portfolio - React Application

A modern, beautiful portfolio website built entirely with React, featuring a stunning design inspired by contemporary portfolio templates.

## Features

- 🎨 Beautiful UI with Mustard Yellow, Teal, and Cream color scheme
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🚀 Ready for Vercel deployment
- 📧 Contact form with email integration
- 📄 Resume preview and download
- 🎯 Portfolio showcase with filtering
- 📝 Blog section
- 💼 Professional experience timeline

## Tech Stack

- React 18
- React Router DOM
- Framer Motion (animations)
- CSS3 with custom properties

## Project Structure

```
Portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── assets/         # Images, PDFs, etc.
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       └── App.js
└── package.json
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

   The app will start on `http://localhost:3000`

## Deployment on Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **No environment variables are required**

## Available Scripts

- `npm start` - Runs the React app (from the root or `client` directory)
- `npm run build` - Builds the React app for production (run from root or `client`)

## Assets

All assets (images, PDFs, etc.) are located in `client/public/assets/` and are automatically served by the React app. Make sure to keep the same folder structure when adding new assets.

## Contact Form

The contact form is fully client-side. When visitors submit the form, their default email app opens with the message pre-filled and ready to send to `faizanmaqbool046@gmail.com`.

## Color Scheme

- **Mustard Yellow**: `#D4A574` - Primary accent color
- **Teal Dark**: `#2C5F5D` - Primary text/UI color
- **Cream**: `#F5F1E8` - Background color
- **White**: `#FFFFFF` - Card backgrounds

## License

MIT License

## Author

Faizan Maqbool
- Email: faizanmaqbool046@gmail.com
- LinkedIn: [Faizan Maqbool](https://www.linkedin.com/in/faizan-maqbool-39b801313)
- GitHub: [Faizan-Maqbool](https://github.com/Faizan-Maqbool)

