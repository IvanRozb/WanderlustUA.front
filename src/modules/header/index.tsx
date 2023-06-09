import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from "@/modules/header/components/logo";

export default function Header() {
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Logo />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
