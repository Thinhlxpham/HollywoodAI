import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       fontFamily: {
        
        onest: ['"Onest"', 'sans-serif'], 
      },
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'loading-spinner': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'gradient-animation': 'gradient-animation 20s ease-in-out alternate infinite',
        'loading-spinner': 'loading-spinner 1s linear infinite'
      },
    },
  },
  plugins: [],
};
export default config;
