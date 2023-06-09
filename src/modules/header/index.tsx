import {AppBar, Container, Toolbar} from "@mui/material";
import Logo from "@/modules/header/components/logo";
import NavTabs from "@/modules/header/components/navTabs";


export default function Header() {
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Logo />
                    <NavTabs/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
