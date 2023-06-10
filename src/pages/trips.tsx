import Header from "@/modules/header";
import useNonExistProtection from "@/hooks/useNonExistProtection";

export default function TripsPage() {
    const res = useNonExistProtection();
    if(res)
        return res;

    return (
        <Header />
    )
}
