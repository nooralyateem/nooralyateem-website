# Noor Al Yateem (نور اليتيم)

> Bringing light and hope to orphaned children around the world

A modern, responsive website for Noor Al Yateem - a nonprofit organization dedicated to supporting orphaned children through education, healthcare, and comprehensive care programs.

## 🎨 Design Features

- **Color Palette**: Cream (#faf2e5) & Blue (#aecdd4)
- **Typography**: Righteous font (retro-style)
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Smooth animations and transitions

## 📋 Important Setup Step

Before running the project, ensure your assets are in the `public/` folder:
- `NaY Logo transparent.png` - Transparent logo for header
- `hero-video.mp4` - Background video for hero section

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nooralyateem-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
nooralyateem-website/
├── public/
│   ├── index.html
│   ├── NaY Logo transparent.png
│   └── hero-video.mp4
├── src/
│   ├── components/
│   │   ├── Header.js/css       # Navigation bar
│   │   └── Footer.js/css       # Footer with links
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js         # Homepage (Hero, Programs, About)
│   │   │   ├── Home.css
│   │   │   └── index.js
│   │   ├── AboutUs/
│   │   │   ├── AboutUs.js      # About Us page
│   │   │   ├── AboutUs.css
│   │   │   └── index.js
│   │   ├── Events/
│   │   │   ├── Events.js       # Events page
│   │   │   ├── Events.css
│   │   │   └── index.js
│   │   ├── Gallery/
│   │   │   ├── Gallery.js      # Gallery page
│   │   │   ├── Gallery.css
│   │   │   └── index.js
│   │   ├── Contact/
│   │   │   ├── Contact.js      # Contact page
│   │   │   ├── Contact.css
│   │   │   └── index.js
│   │   └── Donate/
│   │       ├── Donate.js       # Donation page
│   │       ├── Donate.css
│   │       └── index.js
│   ├── App.js                  # Router configuration
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🌟 Pages

- **Home** (`/`): Hero section with video background, about overview, and programs showcase
- **About Us** (`/about`): Detailed organization story, mission, and values
- **Events** (`/events`): Upcoming and past events
- **Gallery** (`/gallery`): Photo gallery showcasing moments and activities
- **Contact Us** (`/contact`): Contact form and information
- **Donate** (`/donate`): Donation page with multiple giving options and payment form

## 🛠️ Built With

- React 18
- React Router DOM (for navigation)
- CSS3 (Custom styling)
- Create React App

## 📝 License

This project is created for Noor Al Yateem nonprofit organization.

## 📧 Contact

For more information, visit our website or contact us at info@nooralyateem.org