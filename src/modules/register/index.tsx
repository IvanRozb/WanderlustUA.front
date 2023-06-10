import Box from "@mui/material/Box";
import Title from "@/ui/submit-title";
import Container from "@mui/material/Container";

export default function Register(){
    return <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Title />
            <SignInForm/>
        </Box>
    </Container>
}