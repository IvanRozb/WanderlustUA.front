import Register from "@/modules/register";
import useProtection from "@/hooks/useProtection";

export default function RegisterPage(){
    const res = useProtection();
    if(res)
        return res;
    return <Register />
}