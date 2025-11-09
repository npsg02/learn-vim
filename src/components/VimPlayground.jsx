import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './VimPlayground.css';

function VimPlayground({ lesson }) {
  const [text, setText] = useState('');
  const [cursorPos, setCursorPos] = useState({ row: 0, col: 0 });
  const [mode, setMode] = useState('NORMAL');
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (lesson?.initialText) {
      setText(lesson.initialText);
      setCursorPos({ row: 0, col: 0 });
      setMode('NORMAL');
      setMessage('');
    }
  }, [lesson]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [mode]);

  const handleKeyDown = (e) => {
    if (mode === 'INSERT') {
      // In insert mode, allow normal typing
      if (e.key === 'Escape') {
        e.preventDefault();
        setMode('NORMAL');
        setMessage('-- NORMAL --');
      }
      return;
    }

    // Normal mode key handling
    e.preventDefault();

    const lines = text.split('\n');
    let { row, col } = cursorPos;

    switch (e.key) {
      case 'h': // Move left
        if (col > 0) {
          setCursorPos({ row, col: col - 1 });
        }
        break;
      case 'l': // Move right
        if (col < lines[row]?.length - 1) {
          setCursorPos({ row, col: col + 1 });
        }
        break;
      case 'j': // Move down
        if (row < lines.length - 1) {
          const newRow = row + 1;
          const newCol = Math.min(col, lines[newRow].length - 1);
          setCursorPos({ row: newRow, col: Math.max(0, newCol) });
        }
        break;
      case 'k': // Move up
        if (row > 0) {
          const newRow = row - 1;
          const newCol = Math.min(col, lines[newRow].length - 1);
          setCursorPos({ row: newRow, col: Math.max(0, newCol) });
        }
        break;
      case 'i': // Enter insert mode
        setMode('INSERT');
        setMessage('-- INSERT --');
        break;
      case 'a': // Insert after cursor
        setMode('INSERT');
        setMessage('-- INSERT --');
        if (lines[row]?.length > 0) {
          setCursorPos({ row, col: Math.min(col + 1, lines[row].length) });
        }
        break;
      case 'A': // Insert at end of line
        setMode('INSERT');
        setMessage('-- INSERT --');
        setCursorPos({ row, col: lines[row]?.length || 0 });
        break;
      case 'I': // Insert at beginning of line
        setMode('INSERT');
        setMessage('-- INSERT --');
        setCursorPos({ row, col: 0 });
        break;
      case 'o': // Open line below
        {
          const newLines = [...lines];
          newLines.splice(row + 1, 0, '');
          setText(newLines.join('\n'));
          setCursorPos({ row: row + 1, col: 0 });
          setMode('INSERT');
          setMessage('-- INSERT --');
        }
        break;
      case 'O': // Open line above
        {
          const newLines = [...lines];
          newLines.splice(row, 0, '');
          setText(newLines.join('\n'));
          setCursorPos({ row, col: 0 });
          setMode('INSERT');
          setMessage('-- INSERT --');
        }
        break;
      case 'x': // Delete character under cursor
        if (lines[row] && col < lines[row].length) {
          const newLines = [...lines];
          newLines[row] = newLines[row].slice(0, col) + newLines[row].slice(col + 1);
          setText(newLines.join('\n'));
          setMessage('Deleted character');
        }
        break;
      default:
        break;
    }
  };

  const handleTextChange = (e) => {
    if (mode === 'INSERT') {
      setText(e.target.value);
      // Update cursor position based on textarea selection
      const textarea = textareaRef.current;
      if (textarea) {
        const pos = textarea.selectionStart;
        const textBefore = e.target.value.substring(0, pos);
        const row = (textBefore.match(/\n/g) || []).length;
        const lastNewline = textBefore.lastIndexOf('\n');
        const col = lastNewline === -1 ? pos : pos - lastNewline - 1;
        setCursorPos({ row, col });
      }
    }
  };

  const renderContent = () => {
    if (!lesson) {
      return (
        <div className="lesson-content">
          <h2>Welcome to Learn Vim!</h2>
          <p>Select a lesson from the sidebar to get started.</p>
        </div>
      );
    }

    // Parse markdown-like content
    const lines = lesson.content.split('\n');
    return (
      <div className="lesson-content">
        {lines.map((line, idx) => {
          if (line.startsWith('# ')) {
            return <h2 key={idx}>{line.substring(2)}</h2>;
          } else if (line.startsWith('## ')) {
            return <h3 key={idx}>{line.substring(3)}</h3>;
          } else if (line.startsWith('- **')) {
            const match = line.match(/- \*\*(.*?)\*\* - (.*)/);
            if (match) {
              return (
                <div key={idx} className="command-item">
                  <code>{match[1]}</code> - {match[2]}
                </div>
              );
            }
          } else if (line.trim() === '') {
            return <br key={idx} />;
          }
          return <p key={idx}>{line}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="vim-playground">
      <div className="lesson-panel">
        {renderContent()}
      </div>
      <div className="editor-panel">
        <div className="editor-header">
          <span className="mode-indicator">{mode}</span>
          <span className="position-indicator">
            Line {cursorPos.row + 1}, Col {cursorPos.col + 1}
          </span>
        </div>
        <div className="editor-container">
          <textarea
            ref={textareaRef}
            className="vim-editor"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            readOnly={mode === 'NORMAL'}
          />
        </div>
        <div className="status-bar">
          <span className="status-message">{message}</span>
          <span className="status-tip">
            Press <kbd>i</kbd> for INSERT mode, <kbd>Esc</kbd> for NORMAL mode
          </span>
        </div>
      </div>
    </div>
  );
}

VimPlayground.propTypes = {
  lesson: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    initialText: PropTypes.string.isRequired,
  }),
};

export default VimPlayground;
