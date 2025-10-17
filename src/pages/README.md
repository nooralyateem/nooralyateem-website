# Pages Directory

This directory contains all the page components for the Noor Al Yateem website. Each page is organized in its own folder for better maintainability and team collaboration.

## 📁 Structure

Each page folder follows this pattern:
```
PageName/
├── PageName.js    # Main component logic and JSX
├── PageName.css   # Page-specific styles
└── index.js       # Export file for clean imports
```

## 📄 Available Pages

### Home (`/`)
**Path:** `src/pages/Home/`  
**Files:** `Home.js`, `Home.css`  
**Description:** Homepage with hero video section, programs showcase, and about overview

### About Us (`/about`)
**Path:** `src/pages/AboutUs/`  
**Files:** `AboutUs.js`, `AboutUs.css`  
**Description:** Detailed organization story, mission, values, and impact

### Events (`/events`)
**Path:** `src/pages/Events/`  
**Files:** `Events.js`, `Events.css`  
**Description:** Upcoming events calendar and past events showcase

### Gallery (`/gallery`)
**Path:** `src/pages/Gallery/`  
**Files:** `Gallery.js`, `Gallery.css`  
**Description:** Photo gallery showcasing moments and activities

### Contact (`/contact`)
**Path:** `src/pages/Contact/`  
**Files:** `Contact.js`, `Contact.css`  
**Description:** Contact form and organization contact information

### Donate (`/donate`)
**Path:** `src/pages/Donate/`  
**Files:** `Donate.js`, `Donate.css`  
**Description:** Donation page with one-time and monthly giving options

## 🛠️ How to Work with Pages

### Editing an Existing Page
1. Navigate to the page folder: `src/pages/PageName/`
2. Edit `PageName.js` for component logic and structure
3. Edit `PageName.css` for styling changes
4. The changes will hot-reload automatically

### Creating a New Page
1. Create a new folder: `src/pages/NewPage/`
2. Create three files:
   ```
   NewPage.js    # Your component
   NewPage.css   # Your styles
   index.js      # Export: export { default } from './NewPage';
   ```
3. Add the route in `src/App.js`:
   ```javascript
   import NewPage from './pages/NewPage';
   // In Routes:
   <Route path="/newpage" element={<NewPage />} />
   ```
4. Add navigation link in `src/components/Header.js` if needed

### Importing Pages
Thanks to the `index.js` files, imports are clean:
```javascript
// ✅ Good - Clean import
import Home from './pages/Home';
import Donate from './pages/Donate';

// ❌ No need for this anymore
import Home from './pages/Home/Home';
```

## 🎨 Styling Guidelines

- Each page has its own CSS file - keep styles scoped to that page
- Use the global color palette:
  - Primary Cream: `#faf2e5`
  - Primary Blue: `#aecdd4`
- Font family: `'Righteous', cursive` (already loaded globally)
- Follow mobile-first responsive design
- Include media queries for tablets (`768px`) and mobile (`480px`)

## 🔗 Routing

All routes are defined in `src/App.js`. The current route structure:
- `/` → Home
- `/about` → About Us
- `/events` → Events
- `/gallery` → Gallery
- `/contact` → Contact
- `/donate` → Donate

## 📦 Components

For reusable components (Header, Footer, etc.), use `src/components/` directory instead of creating them in pages.

## 💡 Tips for Teammates

1. **Keep it organized:** Each page's files stay in its folder
2. **CSS Scoping:** Prefix your CSS classes with the page name to avoid conflicts
3. **Test responsively:** Always check mobile view when making changes
4. **Consistent naming:** Use PascalCase for component names
5. **Git workflow:** Create feature branches for new pages or major changes

## 🚀 Getting Help

- Check `README.md` in the project root for setup instructions
- Review existing pages as examples for structure and patterns
- Ask questions in team chat or open a GitHub issue

---

**Happy coding! 🎨**

