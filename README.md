# To-Do List Application

This repository contains a To-Do List application built with React and Vite for the frontend and Express.js for the backend. The application allows users to manage their tasks efficiently by fetching data from a public API and allowing local modifications.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

The To-Do List application consists of two main parts:

1. **Frontend**: A React application built with Vite that allows users to view, add, mark as complete, and delete to-do items.
2. **Backend**: An Express.js server that serves as an API for managing to-do items with mongoDb.

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - CSS (or any CSS framework of your choice)

- **Backend**:
  - Node.js
  - Express.js
  - CORS (for handling cross-origin requests)

## Frontend Setup

The frontend is built using Vite, which provides a fast development environment for React applications.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or above)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
    git clone https://github.com/AnasNak/monorepo.git
    cd monorepo/frontend/todo-list-app
