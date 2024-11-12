
# flexpath-working-with-components-and-managing-state-exercises

## [Getting Started]

- include gifs here
- Include relevant steps to run exercise files or start the app
- "Open the file located at exercise-repo-name/whatever in VS Code"

- Also, include instructions on how to open their terminal in 

- WHILE DOING THIS, LOOK OUT FOR ANY POTENTIAL WINDOWS FILE PATH ISSUES in exercises


## Exercise overview

Give quick overview about context of exercises and their intention


## Specific exercises listed in numbered order

Add disclaimer if exercises are stored inside of specific files as comments

Also, for a plain text reference, theres always the `EXERCISE-INSTRUCTIONS` files to pop open

To answer questions that don't require coding, please create a file in the repo named 
[exercise_number_answer].txt.

For example, if in one of the exercise repos question 13 just asked a question to explain a programming concept, store your answer inside of a new file named exercise_13_answer.txt.

## Testing / Verification

Include relevant details here about where solution files are stored

&nbsp;
---

### Running the Vite Frontend App

Navigate inside of `my-react-app` by using the change directory command:
`cd my-react-app`

Then, you can start the Vite development server by running:
`npm run dev`

This will start the Vite development server. 

You can view your app at http://localhost:5500.

The project structure should look like this:
`
my-react-app/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── node_modules/
`

Exercise instructions are in the file named `EXERCISE-INSTRUCTIONS.txt` inside
of the `my-react-app` directory.


For any components you write, please create them inside of `src/components` and
import them into `App.jsx` when asked.

For any React.Context answers you write, please create them 
inside of `src/context` and import them into `App.jsx` when asked.

For any Custom Hook answers you write, please create them 
inside of `src/hooks` and import them into `App.jsx` when asked.

For any Higher Order Component answers you write, please create them 
inside of `src/hoc` and import them into `App.jsx` when asked.


### Summary of React Concepts Covered in These Exercises

1. **React Components**:
    
    - Definition and purpose of React components.
    - Functional components and the use of props to pass data.
    - Component hierarchy and the organization of components into a structured tree.
2. **Props and State**:
    
    - Understanding props for data communication between components.
    - Using the `useState` hook to manage local component state.
    - Handling state changes and their impact on rendering.
3. **React Context**:
    
    - Using the React Context API to manage global state.
    - Avoiding prop drilling by sharing state across deeply nested components.
    - Benefits and drawbacks of using React Context.
4. **Lifecycle Methods and Hooks**:
    
    - The `useEffect` hook for side effects and cleanup.
    - Managing component lifecycle in functional components.
    - Best practices for optimizing performance and handling side effects.
5. **Higher-Order Components (HOCs)**:
    
    - Definition and use cases of HOCs.
    - Enhancing components by wrapping them with additional logic.
    - Benefits and limitations of using HOCs in React applications.
6. **Error Handling and Debugging**:
    
    - Handling errors gracefully using error boundaries.
    - Debugging components with React DevTools.
    - Strategies for diagnosing performance issues and optimizing components.
7. **Next.js Integration**:
    
    - Basics of using Next.js with React for server-side rendering and improved performance.
    - Understanding the Next.js toolchain and configuration.
8. **Performance Optimization**:
    
    - Techniques for improving perceived and actual performance.
    - Use of memoization and lazy loading for optimization.
