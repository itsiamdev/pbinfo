# PbInfo Solutions

Optimized C++ solutions for problems from [pbinfo.ro](https://pbinfo.ro), explained line by line for high school students (grades 9–12). The platform is dedicated to supporting the learning of algorithms and data structures through clear and well-documented examples.

## Table of Contents

- [About the project](#about-the-project)
- [Features](#features)
- [Technologies used](#technologies-used)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## About the project

This platform was created to help students better understand programming problems from pbinfo.ro. Each solution is presented with detailed explanations, optimized C++ code, and comments that facilitate step-by-step understanding of algorithms.

The main goal is to transform theoretical concepts into practical explanations, providing useful tools for learning and preparation for computer science competitions and exams.

## Features

- **Advanced search** — find problems by ID, title, category, or code content
- **Filtering** — filter problems by difficulty (easy, medium, hard) and category
- **Explained solutions** — C++ code with detailed, line-by-line comments
- **Syntax highlighting** — clear display of code with highlight.js / Prism
- **Modern interface** — responsive design with Tailwind CSS
- **Easy navigation** — efficient routing with TanStack Router
- **Visual themes** — support for dark/light mode
- **Bookmarks** — save favorite problems for later reference

## Technologies used

- **React + TypeScript** — reactive and typed interface
- **TanStack Router** — routing for React applications
- **Tailwind CSS** — utility-first styles for modern design
- **Lucide React** — vector icons
- **Prism / highlight.js** — syntax highlighting for C++ code

## Getting started

### Requirements

- Node.js (v18 or newer)
- npm or yarn

### Installation and running

```bash
# Clone the repository
git clone https://github.com/itsiamdev/pbinfo.git
cd pbinfo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project structure

```
pbinfo/
├── src/
│   ├── routes/                 # Pages and routing (TanStack Router)
│   │   ├── index.tsx          # Main page with problem list
│   │   ├── problema.$id.tsx   # Individual problem page
│   │   ├── dezvoltator.tsx    # About the developer page
│   │   ├── contribuie.tsx     # Contributing page
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CodeBlock.tsx
│   │   └── ...
│   ├── data/
│   │   └── problems.ts        # Problem data
│   ├── lib/                   # Utility functions and configuration
│   ├── hooks/                 # Custom React hooks
│   └── main.tsx               # Application entry point
├── public/                    # Static resources (images, fonts)
├── package.json
├── vite.config.ts
└── README.md
```

## Contributing

Contributions are welcome! If you want to help, check out the [Contributing](/contribuie) page or follow the steps below:

1. **Fork repository** — create your own copy of the repository
2. **Clone the repository** — clone your fork to your computer
3. **Create a branch** — `git checkout -b feature/your-change`
4. **Make changes** — add solutions, improvements, or fixes
5. **Submit a pull request** — open a PR on GitHub

## Contact

For suggestions, contributions, or bug reports:

- **LinkedIn:** [linkedin.com/in/itsiamdev](https://www.linkedin.com/in/itsiamdev)
- **GitHub:** [github.com/itsiamdev](https://github.com/itsiamdev)

## License

See [LICENSE](LICENSE) for details.
