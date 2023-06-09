import SignIn from "@/modules/sign-in";
import useProtection from "@/hooks/useProtection";

export default function SignInPage() {
    const res = useProtection();
    if(res)
        return res;

    return <SignIn />;
}
