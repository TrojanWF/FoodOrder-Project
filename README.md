# JyoJyo's Diner — Food Ordering App

A restaurant ordering interface built with HTML, CSS, and JavaScript, focused on practicing DOM manipulation, event handling, and dynamic UI updates.

## About

JyoJyo's Diner is a small frontend project that simulates the customer-side flow of ordering food from a restaurant menu. Users can add items to their order, adjust quantities by removing items, review the running total, and complete a simulated checkout.

The project focuses on strengthening core JavaScript skills by connecting application data with dynamically rendered HTML.

## Learning Objectives

The main goal was to move beyond static webpages and practice building an interactive interface using vanilla JavaScript.

- Render menu items dynamically from a JavaScript data array.
- Manage order state using JavaScript objects and arrays.
- Update the checkout interface in response to user interactions.
- Calculate item prices and the total order cost.
- Handle form submission and basic required-field validation.
- Practice JavaScript modules and frontend project setup with Vite.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and form elements |
| CSS3 | Layout, styling, and visual presentation |
| JavaScript (ES Modules) | Application logic, state management, and DOM manipulation |
| Vite | Local development server and build tooling |

## Features

- **Dynamic Menu Rendering:** Menu items are generated from structured JavaScript data.
- **Add to Order:** Add food items to the checkout and increase their quantities.
- **Order Management:** Remove items from the order and update their quantities.
- **Automatic Price Calculation:** Calculate item subtotals and the overall order total.
- **Dynamic Checkout:** Update the order summary as items are added or removed.
- **Checkout Form:** Collect customer and card details through a form with required-field validation.
- **Order Confirmation:** Display a confirmation message after the simulated checkout and reset the order for another session.

## Key Learning

This project provided practical experience with several JavaScript concepts:

- **DOM Manipulation:** Generating and updating interface elements using `innerHTML`.
- **Event Handling:** Responding to user actions and handling form submission.
- **State Management:** Keeping menu data, quantities, and calculated prices synchronized.
- **Array Methods:** Using methods such as `map()` and `forEach()` to process menu and order data.
- **Template Literals:** Generating HTML dynamically from JavaScript values.
- **Form Handling:** Preventing default form submission, reading input values, and resetting form fields.
- **JavaScript Modules:** Separating menu data from the main application logic.

## Project Structure

```text
FoodOrder-Project/
├── images/         # Project image assets
├── header.png      # Header image asset
├── data.js         # Menu item data
├── index.html      # Main page structure
├── index.css       # Styling and layout
├── index.js        # Menu, order, and checkout logic
├── package.json    # Project scripts and dependencies
├── vite.config.js  # Vite configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/TrojanWF/FoodOrder-Project.git
   ```

2. Enter the project directory:

   ```bash
   cd FoodOrder-Project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Current Status

This is a frontend learning project intended to practice HTML, CSS, and JavaScript fundamentals.

The checkout flow is simulated. The project does not implement a backend, persistent order storage, or real payment processing. The customer and card fields are for demonstrating form handling, not processing actual transactions.

## Learning Approach

**Learn → Build → Experiment → Improve**

The focus is on understanding how the interface, JavaScript data, and user interactions work together before moving on to larger applications and frontend frameworks.