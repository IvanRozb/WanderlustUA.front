import useAdminProtection from "@/hooks/useAdminProtection";

export default function UsersPage(){
    const res = useAdminProtection();
    if(res)
        return res;
    return <></>
}