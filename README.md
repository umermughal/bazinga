# Design System Generator

This project scaffolds a tool that can generate React based design systems using AI. It contains an Express backend and a Vite powered frontend.

## Getting Started

Install dependencies for both server and client:

```bash
cd server && npm install
cd ../client && npm install
```

Run the server and client in separate terminals:

```bash
# Terminal 1
cd server && npm start

# Terminal 2
cd client && npm run dev
```

Projects are stored in the `projects/` folder. Each project has the following structure:

```
projects/{project-name}/
  src/design-system/
  src/components/
  src/tokens/
  storybook/
  __tests__/
```

Generated components include a Storybook story and a unit test placeholder.
