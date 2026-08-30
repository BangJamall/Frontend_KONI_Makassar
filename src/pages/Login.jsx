import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            await login(username, password);

            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-red-500">
            <h1 className="font-bold">Login</h1>

            <form onSubmit={handleSubmit} className="bg-blue-500 space-y-3 p-2">
                <div className="bg-slate-200 p-2 rounded-lg">
                    <label>Username: </label>

                    <input
                        type="text"
                        value={username}
                        onChange={(event) =>
                            setUsername(event.target.value)
                        }
                        className="border"
                    />
                </div>

                <div className="bg-slate-200 p-2 rounded-lg">
                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        className="border"
                    />
                </div>

                {error && (
                    <p>{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-400 p-2 rounded-lg"
                >
                    {loading ? "Login..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;