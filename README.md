# Device Details - TanStack Router Project

A modern React application built with TanStack Router for device management with TypeScript support.

## 🚀 Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed on your system

### Install Docker (Ubuntu/Debian)
```bash
# Install Docker
sudo apt update
sudo apt install docker.io

# Add your user to docker group (optional, to run without sudo)
sudo usermod -aG docker $USER
newgrp docker
```

### Run with Docker Compose

```bash
# Simple one-command start (builds app and runs containers)
pnpm docker:up

# Manual steps:
pnpm build                    # Build the React app
docker compose up --build -d # Start containers in background

# Stop containers
pnpm docker:down
```

This will start:
- **Frontend**: http://localhost:3000
- **API (json-server)**: http://localhost:3001

## 🛠️ Development Setup (Alternative)

If you prefer to run without Docker:

### Prerequisites
- Node.js 18+ 
- pnpm

### Installation
```bash
# Install dependencies
pnpm install

# Start json-server (in one terminal)
pnpm json-server src/utils/db.json --port 3001

# Start development server (in another terminal)  
pnpm dev
```

## 🏗️ Architecture

This project follows a clean architecture pattern:

- **Routes** (`src/routes/`): TanStack Router file-based routing
- **Pages** (`src/pages/`): Page components that handle data fetching and business logic
- **Templates** (`src/templates/`): Pure presentation components
- **Services** (`src/services/`): API calls and utility functions
- **Components** (`src/components/`): Reusable UI components

## 🧪 Technologies

- **TanStack Router v1.153.2**: File-based routing with TypeScript
- **React Query v5.90.19**: Data fetching and caching
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **@cpqd-quati/react**: UI Component library
- **json-server**: Mock REST API
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
