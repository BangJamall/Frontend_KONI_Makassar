import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function FloatingInput({ label, type, value, onChange }) {
    const isFilled = value.trim().length > 0;

    return (
        <div className="relative">
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder=" "
                className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pb-3 pt-6 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-transparent focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
            />

            <label
                htmlFor={label}
                className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 transition-all duration-200 peer-focus:top-3 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-600 ${isFilled ? "top-3 -translate-y-0 text-xs text-blue-600" : ""
                    }`}
            >
                {label}
            </label>
        </div>
    );
}

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
        <div className="flex items-center justify-center px-4 m-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <FloatingInput
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <FloatingInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                    >
                        {loading ? "Login..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;