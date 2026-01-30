const questions = [
  {
    id: 1,
    question: "What is Virtual DOM?",
    answers: "Virtual DOM is a lightweight JavaScript copy of the real DOM. React uses it to track changes in the UI without directly touching the browser DOM every time."
  },
  {
    id: 2,
    question: "How does Virtual DOM improve performance?",
    answers: "Instead of updating the real DOM (which is slow), React updates the Virtual DOM first, compares it with the previous version, and only updates the changed parts in the real DOM. This reduces expensive DOM operations."
  },
  {
    id: 3,
    question: "What is reconciliation in React?",
    answers: "Reconciliation is the process React uses to compare the old Virtual DOM with the new Virtual DOM and decide what needs to be updated in the real DOM."
  },
  {
    id: 4,
    question: "Explain React’s diffing algorithm.",
    answers: "React compares two Virtual DOM trees node by node. If elements are of different types, it replaces them. If they are the same type, it updates only the changed attributes. For lists, it uses keys to track items."
  },
  {
    id: 5,
    question: "Why are keys important in lists?",
    answers: "Keys help React identify which items changed, were added, or removed. They allow React to update only the specific list items instead of re-rendering the entire list."
  },
  {
    id: 6,
    question: "What happens if keys are not unique?",
    answers: "React may get confused while tracking elements, causing wrong updates, UI bugs, or performance issues because it cannot properly identify which item changed."
  },
  {
    id: 7,
    question: "What is React Fiber?",
    answers: "React Fiber is the new reconciliation engine introduced in React 16. It rewrote how React updates the UI, making rendering more flexible and efficient."
  },
  {
    id: 8,
    question: "Why was Fiber introduced?",
    answers: "Fiber was introduced to make rendering smoother by allowing React to pause, resume, and prioritize work instead of blocking the browser during heavy updates."
  },
  {
    id: 9,
    question: "Difference between Stack Reconciler and Fiber?",
    answers: "Stack Reconciler (old React) processed updates in one go and could block the UI. Fiber breaks work into small units, allowing React to pause and handle high-priority tasks first."
  },
  {
    id: 10,
    question: "How does Fiber enable concurrent rendering?",
    answers: "Fiber splits rendering work into small tasks and can pause and continue later. This allows React to work on multiple updates without freezing the UI."
  },
  {
    id: 11,
    question: "What is interruptible rendering?",
    answers: "Interruptible rendering means React can stop rendering work in the middle if a more important update comes (like user input) and resume later."
  },
  {
    id: 12,
    question: "How does React prioritize updates?",
    answers: "React assigns priority levels to updates. User interactions (clicks, typing) get high priority, while background tasks (data loading) get lower priority. Fiber ensures important updates happen first."
  }
];

export default questions;