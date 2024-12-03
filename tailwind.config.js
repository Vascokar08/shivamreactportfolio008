const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4caf50", // Main accent color
        "secondary-color": "#1f2937", // Dark secondary color
        "light-text": "#e5e7eb", // Light gray for text
        "glass-bg": "rgba(255, 255, 255, 0.1)", // Glass effect
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // Clean sans-serif fonts
      },
      boxShadow: {
        card: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Custom card shadow
      },
      backdropBlur: {
        sm: "4px",
        lg: "12px",
      },
    },
  },
  plugins: [
    // Custom utility for glass effect
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      });
    }),
  ],
};
