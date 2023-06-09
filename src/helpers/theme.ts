import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#2c2c2c"
        }
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h2: {
            fontSize: "2.5rem",
            fontWeight: 700
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 400
        }
    }
})