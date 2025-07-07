module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-soft': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.98)',
            filter: 'blur(4px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(10px) scale(1)',
            filter: 'blur(2px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },

      },

      animation: {
        'fade-in-soft': 'fade-in-soft 1.8s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
