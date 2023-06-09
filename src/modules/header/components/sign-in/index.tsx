import Link from "next/link";
import {Button, Typography} from "@mui/material";
import useToken from "@/hooks/useToken";

export default function SignIn(){
    const token = useToken();
    return !token && <Button variant="contained" color={"secondary"}>
        <Link href={"/sign-in"}>
            <Typography variant={"h4"} sx={{cursor: "pointer"}}>Sign In</Typography>
        </Link>
    </Button>
}