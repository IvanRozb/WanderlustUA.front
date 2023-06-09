import Link from "next/link";
import {Button, Typography} from "@mui/material";

export default function Login(){
    return <Button variant="contained" color={"secondary"}>
        <Link href={"/login"}>
            <Typography variant={"h4"} sx={{cursor: "pointer"}}>Log in</Typography>
        </Link>
    </Button>
}