import Typography from "typography"

const mytheme = {
  title: "My Theme",
  baseFontSize: "15px",
  baseLineHeight: 1.6,
  scaleRatioOLD: 1.7333,
  scaleRatio: 2,
  headerFontFamily: ["Libre Baskerville", "Georgia", "serif"],
  bodyFontFamily: ["Libre Baskerville", "Georgia", "serif"],
  headerColor: "hsla(0,0%,0%,0.87)",
  bodyColor: "hsla(0,0%,0%,0.78)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: "bold",
  googleFonts: [
    {
      name: "Libre Baskerville",
      styles: ["400", "700"],
    },
  ],
}

const typography = new Typography(mytheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
