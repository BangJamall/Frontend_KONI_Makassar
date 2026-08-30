import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMe, logout } from "../services/auth";

function Dashboard() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const data = await getMe();

                console.log("Data /me:", data);

                setUser(data.user);
            } catch (error) {
                console.error("Gagal mendapatkan user:", error);

                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await logout();

            navigate("/login");
        } catch (error) {
            console.error("Logout gagal:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Dashboard</h1>

            <p>
                Selamat datang, {user.username}
            </p>

            <p>
                Anda login sebagai admin.
            </p>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;