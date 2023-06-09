import Button from "@mui/material/Button";

export default function SignInButton(){
    return <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
    >
        Sign In
    </Button>;
}