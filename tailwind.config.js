module.exports = {
   content: [
      // Example content paths...
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
   theme: {
      extend: {},
      screens: {
         tablet: '640px',
         // => @media (min-width: 640px) { ... }

         laptop: '1024px',
         // => @media (min-width: 1024px) { ... }

         desktop: '1280px',
         // => @media (min-width: 1280px) { ... }
      },
   },
   plugins: [],
};
