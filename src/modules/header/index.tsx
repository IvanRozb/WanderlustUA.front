import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from "@/modules/header/components/logo";
import NavTabs from "@/modules/header/components/navTabs";
import Login from "src/modules/header/components/login";

export default function Header() {
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Logo />
                    <NavTabs/>
                    <Login/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
