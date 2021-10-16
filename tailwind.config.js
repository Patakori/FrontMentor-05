module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "desk":"1440px",
      },
      textColor:{
        "veryDarkDesBlue": "hsl(238, 29%, 16%)",
        "softRed": "hsl(14, 88%, 65%)",
        "veryDarkGrayishBlue": "hsl(237, 12%, 33%)",
        "darkGrayishBlue": "hsl(240, 6%, 50%)",
      },
      backgroundColor:{
        "softViolet": "hsl(273, 75%, 66%)",
        "softBlue": "hsl(240, 73%, 65%)",
      },
      gradientColorStops: theme => ({
        "softViolet": "hsl(273, 75%, 66%)",
        "softBlue": "hsl(240, 73%, 65%)",
      }),
      divideColor: theme => ({
        "lightGrayishBlue": "hsl(240, 5%, 91%)",
      }),
      fontSize:{
        "12px": "12px",
        "16px": "14px",
        "26px": "26px",
        "30px": "30px",
      },
      fontFamily:{
        "kumbhSans": ["Kumbh Sans", "sans-serif"],
      },
      padding:{
        "22px": "22px",
        "24px": "24px",
        "27px": "27px",
        "47px": "47px",
        "49px": "49px",
        "85px": "85px",
        "128px": "128px",
        "138px": "138px",
        "184px": "184px",
        "280px": "280px",
      },
      width:{
        "280px": "280px",
        "242px": "242px",
        "350px": "350px"
      },
      height:{
        "768px": "768px"
      },
      translate:{
        "75px": "75px",
        "200px": "200px",
        "220px": "220px",
        "250px": "100px",
        "260px": "280px",
        "325px": "325px",
        "22rem": "22.5rem",
        "12rem": "11.7rem",
      },
        spacing: {
         '100': '27.5rem',
        },
      scale:{
        "64%": "64%",
        "80%": "90%",
        "100%": "190%",
      },
      backgroundImage:{
        "patternDesk": "url('/svg/bg-pattern-desktop.svg')",
        "illuWoman": "url('/svg/illustration-woman-online-desktop.svg')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      },  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
