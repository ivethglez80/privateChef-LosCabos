/** @type {import('tailwindcss').Config} */
export default {
  content: [    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  
      "node_modules/flowbite-react/lib/esm/**/*.js"  
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Kollektiff", "sans-serif"],
        signature:["Brittany", "sans-serif"],
        txt: ["ArialUnicode", "sans-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

