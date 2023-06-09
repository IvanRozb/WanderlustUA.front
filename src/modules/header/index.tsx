import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from "@/modules/header/components/logo";
import NavTabs from "@/modules/header/components/navTabs";
import SignIn from "src/modules/header/components/sign-in";

export default function Header() {
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Logo />
                    <NavTabs/>
                    <SignIn/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
