/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      qr_code:{
        light_gray: "hsl(212, 45%, 89%)",
        grayish_blue: "hsl(220, 15%, 55%)",
        dark_blue: "hsl(218, 44%, 22%)"
      },
      results_summary:{
        primary: {
          light_red: 'hsl(0, 100%, 67%)',
          light_red_t: 'hsla(0, 100%, 67%, .05)',
          orangey_yellow: 'hsl(39, 100%, 56%)',
          orangey_yellow_t: 'hsla(39, 100%, 56%, .05)', 
          green_teal: 'hsl(166, 100%, 37%)',
          green_teal_t: 'hsla(166, 100%, 37%, .05)',
          cobalt_blue: 'hsl(234, 85%, 45%)',
          cobalt_blue_t: 'hsla(234, 85%, 45%, .05)'
        },
        neutral: {
            white: '#ffffff',
            pale_blue: '#ebf1ff',
            light_lavender: '#c8c7ff',
            dark_gray_blue: '#303b5a',
            dark_gray_blue_t: 'hsla(224, 30%, 27%, .5)',
        }
      },
      stats_preview_card:{
        primary:{
          main_background: '#090b1a',
          card_background: '#1b1938',
          accent: '#aa5cdb',
        },
        neutral:{
          main_heading_stats: '#ffffff',
          // '#ffffff' but with different alpha values
          main_paragraph: 'hsla(0, 0%, 100%, 0.75)',
          stat_headings: 'hsla(0, 0%, 100%, 0.6)'
        } 
      },
      design_portfolio:{
        galactic_blue: "#755CDE",
        summer_yellow: "#F6A560",
        pink: "#F39E9E",
        light_red: "#EB7565",
        cyan: "#61C4B7",
        dark_purple: "#552049",
        black: "#030303",
        medium_brown: "#7A746E",
        light_cream: "#FFF7F0",
      }
    },
    extend: {},
  },
  plugins: [],
}
