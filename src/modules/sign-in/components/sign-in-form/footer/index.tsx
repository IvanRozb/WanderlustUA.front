import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import theme from "@/helpers/theme";

export default function Footer(){
    return <Grid container justifyContent={"center"}>
        <Grid item>
            <Link href="#" variant="body2">
                <Box sx={{"&:hover":{color: theme.palette.secondary.dark}}}>"Don't have an account? Sign Up"</Box>
            </Link>
        </Grid>
    </Grid>;
}