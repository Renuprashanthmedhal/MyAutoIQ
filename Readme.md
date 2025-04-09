This project is an assesment for MyAutoIQ company

# Project Overview

## Core Functionality

- **Email Listing**: Displays email list in an accordion-style interface matching the provided UI mockup  
- **API Integration**: Fetches email data from the specified endpoint [API Endpoint](https://67f69f9642d6c71cca62c47a.mockapi.io/api/v1/getMailHistory/emails)  
- **Expandable Details**: Clicking on an email campaign expands to reveal additional information about the email (sent, opened, clicked, replied status)  
- **Responsive Layout**: Works well on both desktop and mobile devices  

## Technical Implementation

### React Components

- **Modular Component Architecture**: Organized into logical components (`EmailList`, `EmailItem`) for maintainability  
- **Functional Components**: Used modern React patterns with functional components  
- **React Hooks**: Implemented `useState`, `useEffect`, `useSelector`, `useDispatch` hooks  
- **Component Memoization**: Used `React.memo` to prevent unnecessary re-renders  

### Redux State Management

- **Redux Store**: Centralized state management for email list data  
- **Redux Actions**: Clear action creators for fetching emails and toggling details  
- **Redux Reducers**: Properly structured reducers for managing application state  
- **Redux Thunk**: Middleware for handling asynchronous API calls  
- **Selectors**: Efficient state selection from components  

## UI/UX Features

- **Bootstrap Integration**: Used for responsive grid layout and styling  

## Code Quality

- **ES6+ Features**: Arrow functions, destructuring, template literals  
- **Clean Code Practices**: Consistent naming conventions and code structure  
- **Separation of Concerns**: API calls, state management, and UI logic properly separated  
- **Error Boundaries**: Prevents the entire app from crashing if a component fails  
