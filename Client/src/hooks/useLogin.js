import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (userName, password) => {
        const success = handleInputErrors(userName, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("https://chatiee.onrender.com/api/v1/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include', // Include credentials to send cookies
                body: JSON.stringify({ userName, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}

function handleInputErrors(userName, password) {
    if (!userName || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}
