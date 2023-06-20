/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "portal-pink": "#FF00FC",
        "portal-red": "#F70201",
        "portal-blue": "#0461CA",
        "miles-red": "#E51925",
        "glitch-green": "#02FCB6",
        "glitch-blue": "#0106F1",
        "credits-pink": "#D74A85",
        "credits-yellow": "#DBC130",
        "credits-green": "#39AF72",
        "credits-aqua": "#0AFFEB",
        "miles-blue": "#141F40",
        "gwen-pink": "#D7427D",
        "miguel-blue": "#001144",
        "miguel-red": "#C51021",
        "comic-yellow": "#F6C634",
        "comic-brown": "#210D03",
        "comic-bg": "#DED2CC"
      },
      height: {
        "videoBG": "95vh",
        "trailerLG": "19rem"
      },
      width: {
        "trailerLG": "40rem"
      },
      spacing: {
        "titleTop": "55vh",
        "milesImg": "24vh"
      },
      gridTemplateColumns: {
        'cast': 'repeat(auto-fit, minmax(10rem, 1fr))',
      }
    },
  },
  plugins: [],
}

