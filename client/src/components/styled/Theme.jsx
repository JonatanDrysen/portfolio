import React from "react"
import { ThemeProvider } from "styled-components"

const mainTheme = {
    fonts: [
        "Roboto",
        "Helvetica",
        "sans-serif",
    ],
    colors: {
        offBlack: "#2A2827",
        powderWhite: "#FFFDF9",
        papayaWhip: "#ffefd5"
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={mainTheme}>{ children }</ThemeProvider>
}
