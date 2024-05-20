import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://chatiee.onrender.com/api/v1/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include' // Ensure credentials (cookies) are included
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            // Clear local storage
            localStorage.removeItem("chat-user");
            setAuthUser(null);

            // Optionally, delete cookies here (e.g., session cookies)
            deleteCookie("jwt"); // Replace with your actual cookie name

            // Notify user
            toast.success("Successfully logged out");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}
