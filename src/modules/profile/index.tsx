import Box from "@mui/material/Box";
import Title from "@/ui/submit-title";
import SignInForm from "@/modules/sign-in/components/sign-in-form";
import Container from "@mui/material/Container";

// @ts-ignore
export default function Profile({user}) {
    return <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Title text={"Hello, " + user.username}/>
            <SignInForm/>
        </Box>
    </Container>
}

