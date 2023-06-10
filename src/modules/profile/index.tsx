import {useEffect, useState} from "react";

export default function Profile() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, [])

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return <>1</>
}