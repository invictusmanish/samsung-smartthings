/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/landing-page/LP-Background.jpg')",
        'mobile-hero': 'url(/src/assets/images/landing-page/mobile/LP-BG.png)',
      },
      scale: {
        130: '1.3',
      },
      transitionProperty: {
        opacity: 'opacity',
        transform: 'transform',
      },
      transitionDuration: {
        300: '300ms',
      },
      fontFamily: {
        SamsungOne: ['SamsungOne', 'sans-serif'],
        SamsungSharpSans: ['SamsungSharpSans', 'sans-serif'],
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { transform: 'translateX(0)', opacity: '1' },
          '80%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideInOut: 'slideInOut 5s forwards',
        slideInOut: 'slideInOut 5s forwards',
        slideInOut: 'slideInOut 5s forwards',
      },
    },
  },
  plugins: [],
};
