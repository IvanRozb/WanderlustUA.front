import Link from "next/link";
import {Tab, Tabs} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    tabs: {
        width: "40%",
        marginRight: "auto",
        marginLeft: "1rem"
    },
    tab: {
        textAlign: "center",
        width: "33% !important",
        color: "#fff !important",
        cursor: "pointer",
    }
})

export default function NavTabs(){
    const classes = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return <Tabs variant={"fullWidth"} value={value} onChange={handleChange} className={classes.tabs}>
        <Link href={"/"}>
            <Tab label={"Home"} value={0} className={classes.tab}/>
        </Link>
        <Link href={"/tourist-places"}>
            <Tab label={"Tourist Places"} value={1} className={classes.tab}/>
        </Link>
        <Link  href={"/trips"}>
            <Tab label={"Trips"} value={2} className={classes.tab}/>
        </Link>
    </Tabs>
}