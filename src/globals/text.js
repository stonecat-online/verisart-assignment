import { css } from "styled-components"
import { mediaQueries } from "./mediaQueries"

const poppins = "Poppins, sans-serif"

const HeadingBase = {
  fontSize: "2.5rem",
  mq: {
    atTablet: {
      fontSize: "3.13rem",
    },
    atDesktop: {
      fontSize: "3.13rem",
    },
  },
}

const MediumBase = {
  fontSize: "1.25rem",
  mq: {
    atTablet: {
      fontSize: "1.56rem",
    },
    atDesktop: {
      fontSize: "1.56rem",
    },
  },
}

const SmallBase = {
  fontSize: "0.93rem",
  mq: {
    atTablet: {
      fontSize: "0.93rem",
    },
    atDesktop: {
      fontSize: "0.93rem",
    },
  },
}

const XSmallBase = {
  fontSize: "0.75rem",
  mq: {
    atTablet: {
      fontSize: "0.75rem",
    },
    atDesktop: {
      fontSize: "0.75rem",

    },
  },
}

const standardTextStyles = {
  heading: {
    ...HeadingBase,
    fontFamily: poppins,
    fontWeight: "700",

  },
  medium: {
    ...MediumBase,
    fontFamily: poppins,
    fontWeight: "400",
  },
  small: {
    ...SmallBase,
    fontFamily: poppins,
    fontWeight: "400",
  },
  xSmall: {
    ...XSmallBase,
    fontFamily: poppins,
    fontWeight: "400",
  },

}

//
// Custom Text Styling
//
const customTextStyles = {
  // cus1: {
  //   ...largeProject,
  //   fontFamily: avertaBold,
  // },
}

const textStyles = {
  ...customTextStyles,
  ...standardTextStyles,
}

const generateTextMediaQueries = textStyleMediaQueries =>
  css`
    ${() => mediaQueries.atTablet`
    font-size: ${textStyleMediaQueries.atTablet.fontSize};
    line-height: ${textStyleMediaQueries.atTablet.lineHeight};
    letter-spacing: ${textStyleMediaQueries.atTablet.letterSpacing};
  `}
    ${() => mediaQueries.atDesktop`
    font-size: ${textStyleMediaQueries.atDesktop.fontSize};
    line-height: ${textStyleMediaQueries.atDesktop.lineHeight};
    letter-spacing: ${textStyleMediaQueries.atDesktop.letterSpacing};
  `}
  `

export const text = Object.keys(textStyles).reduce((accum, label) => {
  const textCss = () => css`
    font-family: ${textStyles[label].fontFamily};
    font-size: ${textStyles[label].fontSize};
    line-height: ${textStyles[label].lineHeight};
    letter-spacing: ${textStyles[label].letterSpacing};
    font-weight: ${textStyles[label].fontWeight};
    font-style: ${textStyles[label].fontStyle};
    ${generateTextMediaQueries(textStyles[label].mq)}
  `
  return { ...accum, [label]: textCss }
}, {})
