export const lessons = [
  {
    id: 1,
    title: "Basic Navigation",
    description: "Learn the basic movement commands in Vim",
    content: `# Basic Navigation

Vim uses the following keys for basic navigation:

- **h** - Move left
- **j** - Move down
- **k** - Move up
- **l** - Move right

## Why These Keys?
These keys are on the home row, making navigation faster without moving your hands.

## Exercise
Try moving around the playground using h, j, k, and l keys.`,
    initialText: "Use h, j, k, l to navigate.\nTry moving to different lines.\nPractice makes perfect!\n\nVim is powerful.\nKeep practicing."
  },
  {
    id: 2,
    title: "Insert Mode",
    description: "Learn how to enter and exit insert mode",
    content: `# Insert Mode

To start editing text, you need to enter Insert mode:

- **i** - Insert before cursor
- **a** - Insert after cursor
- **I** - Insert at beginning of line
- **A** - Insert at end of line
- **o** - Open new line below
- **O** - Open new line above
- **Esc** - Exit insert mode and return to Normal mode

## Exercise
1. Press 'i' to enter insert mode
2. Type some text
3. Press 'Esc' to return to normal mode`,
    initialText: "Press 'i' to start inserting text here.\n\nTry 'A' to insert at the end of this line.\n\nPress 'o' to open a new line below."
  },
  {
    id: 3,
    title: "Deleting Text",
    description: "Learn commands to delete text",
    content: `# Deleting Text

Basic delete commands:

- **x** - Delete character under cursor
- **dd** - Delete entire line
- **dw** - Delete word
- **d$** - Delete to end of line
- **d0** - Delete to beginning of line

## Remember
All deleted text goes into a register and can be pasted with 'p'!

## Exercise
Try deleting words and lines in the playground.`,
    initialText: "Delete this word with dw.\nDelete this entire line with dd.\nDelete to the end of this line with d$.\n\nPractice deleting characters with x."
  },
  {
    id: 4,
    title: "Copy and Paste",
    description: "Learn how to copy (yank) and paste",
    content: `# Copy and Paste

In Vim, copying is called "yanking":

- **yy** - Yank (copy) entire line
- **yw** - Yank word
- **y$** - Yank to end of line
- **p** - Paste after cursor
- **P** - Paste before cursor

## Exercise
1. Place cursor on a line
2. Press 'yy' to yank the line
3. Move to another line
4. Press 'p' to paste`,
    initialText: "Copy this line with yy.\nThen paste it below with p.\n\nCopy this word with yw.\nPaste it somewhere with p."
  },
  {
    id: 5,
    title: "Search and Replace",
    description: "Learn to search for text",
    content: `# Search

Search commands:

- **/** - Search forward
- **?** - Search backward
- **n** - Next match
- **N** - Previous match
- ***** - Search for word under cursor

## Example
Type '/word' and press Enter to search for "word"

## Exercise
Try searching for words in the playground.`,
    initialText: "Search for the word 'vim' in this text.\nVim is powerful.\nVim is efficient.\nLearning vim takes practice.\n\nUse / to search forward.\nUse ? to search backward."
  }
];
