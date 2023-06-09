import useProtection from "@/hooks/useProtection";

export default function TripsPage() {
    const res = useProtection();
    if(res)
        return res;

    return (
       <></>
    )
}
