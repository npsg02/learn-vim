# Learn Vim

An interactive web application for learning Vim commands and keybindings, built with React and Vite.

🌐 **[Live Demo](https://npsg02.github.io/learn-vim/)**

## Features

- **Interactive Lessons**: 5 structured lessons covering Vim basics
- **Vim Playground**: Practice Vim commands in a simulated editor
- **Real-time Mode Indicators**: See when you're in NORMAL or INSERT mode
- **Cursor Position Display**: Track your position in the editor
- **Beautiful UI**: Modern, responsive design with gradient sidebar

## Lessons Included

1. **Basic Navigation** - Learn h, j, k, l movement keys
2. **Insert Mode** - Master entering and exiting insert mode
3. **Deleting Text** - Commands for deleting characters, words, and lines
4. **Copy and Paste** - Learn yanking and pasting text
5. **Search and Replace** - Find and navigate through text

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Run linter
npm run lint

# Run development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## Usage

1. Select a lesson from the sidebar
2. Read the lesson content in the center panel
3. Practice Vim commands in the editor on the right
4. Use keyboard shortcuts to interact with the Vim playground:
   - `h`, `j`, `k`, `l` - Navigate in NORMAL mode
   - `i` - Enter INSERT mode
   - `Esc` - Return to NORMAL mode
   - And many more as you progress through lessons!

## Project Structure

```
learn-vim/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Lesson navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── VimPlayground.jsx    # Interactive Vim editor
│   │   └── VimPlayground.css
│   ├── data/
│   │   └── lessons.js           # Lesson content and data
│   ├── App.jsx                  # Main application component
│   ├── App.css
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── public/
│   └── vite.svg
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Technologies Used

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the project using Vite
2. Uploads the build artifacts
3. Deploys to GitHub Pages

The live site is available at: https://npsg02.github.io/learn-vim/

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT