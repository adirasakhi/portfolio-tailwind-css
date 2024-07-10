/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding :'16px',
    },
    extend: {
      colors : {
        info :'#0ea5e9',
        dark :'#0f172a',
        abu :'#64748b',
      },
      screens : {
        '2xl' : "1320px",
      }
    },
  },
  plugins: [],
}

