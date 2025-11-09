import { useState } from 'react';
import Sidebar from './components/Sidebar';
import VimPlayground from './components/VimPlayground';
import { lessons } from './data/lessons';
import './App.css';

function App() {
  const [currentLesson, setCurrentLesson] = useState(null);

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="app">
      <Sidebar 
        lessons={lessons} 
        currentLesson={currentLesson}
        onLessonSelect={handleLessonSelect}
      />
      <VimPlayground lesson={currentLesson} />
    </div>
  );
}

export default App;
