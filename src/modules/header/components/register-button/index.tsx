import {Button, Typography} from "@mui/material";

export default function RegisterButton(){
    return <Button variant="outlined" color={"secondary"} sx={{marginRight: "1rem"}}>
        <Typography variant={"h4"} sx={{cursor: "pointer"}}>Register</Typography>
    </Button>
}