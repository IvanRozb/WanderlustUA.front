import useProtection from "@/hooks/useProtection";
import Header from "@/modules/header";

export default function TripsPage() {
    const res = useProtection();
    if(res)
        return res;

    return (
        <Header />
    )
}
