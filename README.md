# Expense Tracker

## Overview

Expense Tracker is a feature-rich React application that helps users manage their expenses efficiently. It provides a user-friendly interface for adding, viewing, and analyzing expenses with detailed statistics and visualizations.

## Features

- Add expense entries with validation (amount, description, date, category, payment method)
- View, filter, and sort expenses in a dynamic table
- Edit expenses inline
- Pagination for large numbers of expenses
- Filter expenses by category, date range, and payment method
- Search functionality to quickly find specific expenses
- Visualize expenses over time using charts (line chart for monthly comparison, pie chart for category breakdown)
- Responsive design for optimal viewing on various devices

## Technologies Used

- React
- Redux for state management
- Ant Design (antd) for UI components
- @ant-design/charts for data visualization
- React Router for navigation
- Moment.js for date handling

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mrprogrammer2624/expense-tracker
   cd expense-tracker
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

1. **Adding an Expense**
   - Navigate to the "Add Expense" page
   - Fill in the expense details (amount, description, date, category, payment method)
   - Click "Add Expense" to save the entry

2. **Viewing Expenses**
   - On the home page, you'll see a table of all expenses
   - Use the search bar to find specific expenses
   - Click on column headers to sort expenses
   - Use filters to narrow down expenses by category, date range, or payment method

3. **Editing Expenses**
   - In the expense list, click the "Edit" button for an expense
   - Modify the details inline
   - Click "Save" to update the expense

4. **Analyzing Expenses**
   - Navigate to the "Statistics" page
   - View the monthly expense comparison chart
   - Examine the category breakdown for a selected month using the pie chart
