# Word Frequency Counter
>[!TIP]
>I added the cover from the Figma design to preserve the proposed visual identity.
<img width="1434" height="1051" alt="image" src="https://github.com/user-attachments/assets/6c29121e-746e-49fb-a649-66503559fa44" />

## Live Preview
<img width="1436" height="1049" alt="image" src="https://github.com/user-attachments/assets/b1546f7a-0dad-44d5-9e81-841e8930e5d4" />

A modern web application built with React and TypeScript that analyzes word frequency in randomly generated text from the Bacon Ipsum API. The application provides visual insights through interactive charts and tables, helping users understand word distribution patterns in text.

## 🎯 Project Overview

This project was developed as a technical assessment to demonstrate proficiency in:
- React.js with TypeScript
- API integration and data processing
- Data visualization with Chart.js
- Modern UI/UX design with Tailwind CSS and HeroUI
- Implementation of a design system by translating Figma colors, typography, spacing, and visual tokens into a structured Tailwind configuration
- Algorithm optimization and complexity analysis

## ✨ Features

- **Dynamic Text Generation**: Fetch random text paragraphs from the Bacon Ipsum API with customizable parameters
- **Word Frequency Analysis**: Real-time calculation of word occurrences using an optimized tokenization algorithm
- **Interactive Bar Chart**: Visual representation of the top 5 most repeated words
- **Top Words Table**: Ranked list displaying the top 5 words with their frequency counts
- **Responsive Design**: Modern, clean interface that works across all devices
- **Empty State Handling**: Intuitive placeholders when no data is available

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.x or higher)
- pnpm, npm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git https://github.com/johnjaider1000/word-frequency-counter.git
cd word-frequency-counter
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Start Script

You can run the following command to build the project and immediately preview it:

```bash
npm run start
```

This script combines the build and preview steps (`npm run build && npm run preview`) as defined in `package.json`.


## 🏗️ Project Structure

```
src/
├── core/
│   ├── hooks/          # Reusable hooks (useFetch)
│   └── ui/             # Shared UI components
├── modules/
│   └── frequency-counter/
│       ├── components/ # Feature-specific components
│       ├── context/    # State management
│       ├── hooks/      # Feature hooks
│       └── utils/      # Text processing utilities
└── shared/
    └── components/      # Generic, decoupled, and portable components meant to be reused across projects
```

## 📊 How It Works

### Word Frequency Counting

The app counts word frequencies using a straightforward approach:

1. First, it breaks down the text into individual words using a modern browser API called `Intl.Segmenter`
2. Then it counts how many times each word appears using a simple hash map
3. Finally, it sorts the words by their frequency and shows you the top results

The algorithm is pretty efficient - it processes the text once, counts everything, and then sorts only the unique words. For most texts, the sorting step is what takes the most time, but it's still very fast.

### Why Intl.Segmenter?

Instead of using regular expressions (which can be tricky with punctuation and special characters), I used `Intl.Segmenter`. It's a newer JavaScript feature that:
- Handles punctuation and apostrophes correctly
- Works well with different languages
- Is optimized by the browser itself

This makes the word counting more accurate and reliable.

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **HeroUI** - Modern React component library
- **Chart.js** - Data visualization
- **react-chartjs-2** - React wrapper for Chart.js
- **Intl.Segmenter** - Modern text segmentation API

## 🎨 Design Decisions

1. **Modular Architecture**: Components are organized by feature, promoting maintainability and scalability
2. **Context API**: Used for state management to avoid prop drilling
3. **Custom Hooks**: Encapsulate business logic and API interactions
4. **Separation of Concerns**: Configuration, logic, and presentation are separated into distinct files
5. **Type Safety**: Comprehensive TypeScript types for all data structures and API responses

## 🔄 API Integration

The application integrates with the Bacon Ipsum JSON API:

```
https://baconipsum.com/api/?type=meat-and-filler&paras={number}&start-with-lorem={0|1}
```

Parameters:
- `paras`: Number of paragraphs to generate
- `start-with-lorem`: Whether to start with "Lorem ipsum"

## 📄 License

This project is part of a technical assessment and is provided as-is for evaluation purposes.

## 👤 Author

**John Vanegas**
- LinkedIn: [linkedin.com/in/johnjaider1000](https://www.linkedin.com/in/johnjaider1000/)
- GitHub: [github.com/johnjaider1000](https://github.com/johnjaider1000)

## 🙏 Acknowledgments

- Bacon Ipsum API for providing the text generation service
- The React and TypeScript communities for excellent documentation
- HeroUI team for the beautiful component library
