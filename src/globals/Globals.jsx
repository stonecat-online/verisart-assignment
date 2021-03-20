import React from "react"
import { ThemeProvider } from "styled-components"
import "./globals.css"
import { mediaQueries } from "./mediaQueries"
import { text } from "./text"

const theme = {
  mq: mediaQueries,
  text: text,
}

const Globals = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Globals
