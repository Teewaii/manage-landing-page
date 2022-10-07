/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      BrightRed: '#f25f3a',
      DarkBlue: '	#242d52',
      DarkGrayishBlue: '#9095a7',
      VeryDarkBlue: '#1d1e25',
      VeryPaleRed: '#ffefeb',
      VeryLightGray: '#fafafa'
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
      center: true,
    },

    fontFamily: {
      'VietnamPro': ['Be Vietnam Pro', 'system-ui']
    },
    fontWeight: {
      normal: 400,
      bold: 500,
      semibold: 700,
    },
    extend: {},
  },
  plugins: [],
}
