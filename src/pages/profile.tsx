import useNonExistProtection from "@/hooks/useNonExistProtection";
import Profile from "@/modules/profile";

export default function ProfilePage(){
    const isLoading = useNonExistProtection();
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <Profile />;
}