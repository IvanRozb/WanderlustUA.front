import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, {useState} from "react";
import {styled} from "@mui/styles";
import theme from "@/helpers/theme";
import {useCookies} from "react-cookie";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
});

export default function SignIn() {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dataForm = new FormData(event.currentTarget);
        const data = {
            email: dataForm.get("email"),
            password: dataForm.get("password"),
        };

        const res = await fetch("http://localhost:5199/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(data => data.json())

        if(res.error){
            setError(res.error);
            return;
        }
        setCookie('token', res.token, {
            path: "/",
            sameSite: "none"
        })
    };

    const [error, setError] = useState<string>();

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <CssTextField
                        margin="normal"
                        error={!(error === null || error === undefined)}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        color={"primary"}
                        sx={{ input: { color: theme.palette.primary.main } }}
                    />
                    <CssTextField
                        margin="normal"
                        error={!(error === null || error === undefined)}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color={"primary"}
                        sx={{ input: { color: theme.palette.primary.main } }}
                    />
                    <Typography color={theme.palette.error.main} textAlign={"center"}>{error}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent={"center"}>
                        <Grid item>
                            <Link href="#" variant="body2">
                                <Box sx={{"&:hover":{color: theme.palette.secondary.dark}}}>"Don't have an account? Sign Up"</Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
