/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",

      "red-300": "#F8B4B4",
      "red-400": "#F98080",
      "red-500": "#F05252",
      "red-600": "#E02424",
      "red-700": "#C81E1E",
      "red-800": "#9B1C1C",
      "red-900": "#771D1D",

      "yellow-300": "#FCD34D",
      "yellow-400": "#F9B90B",
      "yellow-500": "#F59E0A",
      "yellow-600": "#D97706",
      "yellow-700": "#B45309",
      "yellow-800": "#8D4008",
      "yellow-900": "#6D2807",

      "blue-300": "#93C5FD",
      "blue-400": "#60A5FA",
      "blue-500": "#3B82F6",
      "blue-600": "#2563EB",
      "blue-700": "#1D4ED8",
      "blue-800": "#1E40AF",
      "blue-900": "#1E3A8A",

      "green-300": "#94E6B4",
      "green-400": "#4CD964",
      "green-500": "#34C759",
      "green-600": "#229D49",
      "green-700": "#1C743A",
      "green-800": "#165129",
      "green-900": "#11361F",

      "indigo-300": "#C0D6FF",
      "indigo-400": "#73A4FF",
      "indigo-500": "#5A71FF",
      "indigo-600": "#434190",
      "indigo-700": "#323663",
      "indigo-800": "#272A43",
      "indigo-900": "#1C1E2D",

      "purple-300": "#D9BFFF",
      "purple-400": "#B188FF",
      "purple-500": "#9366FF",
      "purple-600": "#6741A7",
      "purple-700": "#52307C",
      "purple-800": "#3F2659",
      "purple-900": "#2D1C43",

      "pink-300": "#FFB0AC",
      "pink-400": "#FF8797",
      "pink-500": "#FF5F70",
      "pink-600": "#D63649",
      "pink-700": "#B82234",
      "pink-800": "#8E1823",
      "pink-900": "#6D131A",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        'dark-text': 'white',
        'light-text': 'black',
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    plugins: [
      require('daisyui'),
    ],
  },
  variants: {
    extend: {
      textColor: ['dark', 'light'],
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
};
