import PropTypes from 'prop-types';
import './Sidebar.css';

function Sidebar({ lessons, currentLesson, onLessonSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Learn Vim</h1>
        <p className="subtitle">Interactive Vim Tutorial</p>
      </div>
      <div className="lessons-list">
        <h2>Lessons</h2>
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className={`lesson-item ${currentLesson?.id === lesson.id ? 'active' : ''}`}
            onClick={() => onLessonSelect(lesson)}
          >
            <div className="lesson-number">{lesson.id}</div>
            <div className="lesson-info">
              <div className="lesson-title">{lesson.title}</div>
              <div className="lesson-description">{lesson.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  currentLesson: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  onLessonSelect: PropTypes.func.isRequired,
};

export default Sidebar;
