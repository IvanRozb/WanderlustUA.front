import Box from "@mui/material/Box";
import {FormEvent, useState} from "react";
import useTokenCookies from "@/hooks/useTokenCookies";
import SignInTextField from "@/modules/sign-in/components/sign-in-form/ui/text-field";
import ErrorText from "@/modules/sign-in/components/sign-in-form/ui/error-text";
import SignInButton from "@/modules/sign-in/components/sign-in-form/ui/sign-in-button";
import Footer from "@/modules/sign-in/components/sign-in-form/footer";

export default function SignInForm(){
    const [cookies, setCookie, removeCookie] = useTokenCookies();
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
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

    return <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <SignInTextField
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={error}
        />
        <SignInTextField
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            error={error}
            type={"password"}
        />
        <ErrorText error={error}/>
        <SignInButton />
        <Footer />
    </Box>
}