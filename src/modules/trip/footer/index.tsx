import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Joint from "@/modules/trip/joint";
import {useEffect, useState} from "react";
import useTokenCookies from "@/hooks/useTokenCookies";
import JointItem from "@/modules/trip/footer/ui/jointItem";

// @ts-ignore
export default function Footer({trip, handleDeleteTrip}) {
    const [showJoint, setShowJoint] = useState(false);
    const [{token}] = useTokenCookies();
    const [joints, setJoints] = useState<any[]>();

    useEffect(() => {
        fetch(`http://localhost:5199/api/routes/${trip.id}/joints`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(data => setJoints(data))
    }, [])

    if(!joints)
        return <p>Loading...</p>
    const handleShowJoint = () => {
        setShowJoint(p => !p)
    }
    return <>
        <Box display={"flex"}>
            <Button color={"secondary"} onClick={handleShowJoint}>
                <AddCircleOutlineOutlinedIcon fontSize={"medium"}/>
            </Button>
            <Button onClick={() => handleDeleteTrip(trip)}><DeleteOutlineOutlinedIcon/></Button>
        </Box>
        {joints.map((joint, index) => {
            return <JointItem key={index} joint={joint} index={index + 1}
                              setJoints={setJoints}/>

        })}
        {showJoint && <Joint trip={trip} joints={joints} setJoints={setJoints}/>}
    </>
}