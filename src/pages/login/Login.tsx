import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { BtnLogin } from "../../components/BtnLogin";
import { getUsers } from "../../services/userServices";
import type { userType } from "../../types/userTypes";

export default function Login() {
    const formRef = useRef<HTMLFormElement>(null);
    const nav = useNavigate();
    const matches = useMediaQuery("(min-width:768px)"); 

    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState<userType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchData();
    }, []);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formResponse = formRef.current;
        if (!formResponse) return;

        const formData = new FormData(formResponse);
        const usernameOrEmail = formData.get("username") as string;
        const password = formData.get("password") as string;

        const user = users.find(
            (u) => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
        );

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            nav("/auth/home");
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    };

    return (
        <div className={`flex min-h-screen overflow-hidden ${matches ? "flex-row" : "flex-col bg-[#111]"}`}>
            {matches && (
                <div
                    className="w-1/2 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: "url(/trevo/assets/backgroundlogin.png)",
                    }}
                ></div>
            )}

            {!matches && (
                <div className="relative w-full bg-[#9872F0] h-[220px] flex flex-col justify-center items-center rounded-b-[40px]">
                    <img src="/trevo/assets/arrowleft.png" alt="back" className="absolute left-6 top-8 w-5" />
                    <h1 className="text-[36px] font-[Neulis] text-[#CAD83B] mt-10">Trevo</h1>
                </div>
            )}

            <div className={`flex flex-col justify-center items-center text-white ${matches ? "w-1/2 p-24 bg-[#111]" : "w-full px-8 py-10 bg-[#111]"}`}>
                <h1 className={`${matches ? "text-5xl mb-4" : "text-3xl mb-2"} font-medium font-[Neulis] text-center`}>
                    Welcome Back
                </h1>
                <p className="text-white mb-1 text-sm font-[poppins] text-center">
                    Ready to continue your fitness journey?
                </p>
                <p className="text-white text-sm font-[poppins] text-center mb-6">Your path is right here</p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3 w-[90%] md:w-[400px] max-w-md font-[poppins]"
                >
                    <TextField
                        fullWidth
                        label="Enter email or username"
                        variant="outlined"
                        name="username"
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: "transparent",
                                "& fieldset": { borderColor: "#9b7ff5" },
                                "&:hover fieldset": { borderColor: "#9b7ff5" },
                                "&.Mui-focused fieldset": { borderColor: "#9b7ff5" },
                            },
                            "& .MuiInputLabel-root": { color: "gray" },
                        }}
                    />

                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        name="password"
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: "transparent",
                                "& fieldset": { borderColor: "#9b7ff5" },
                                "&:hover fieldset": { borderColor: "#9b7ff5" },
                                "&.Mui-focused fieldset": { borderColor: "#9b7ff5" },
                            },
                            "& .MuiInputLabel-root": { color: "gray" },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? (
                                            <Visibility sx={{ color: "purple" }} />
                                        ) : (
                                            <VisibilityOff sx={{ color: "white" }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <div className="flex justify-between items-center w-full mb-4 mt-1">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-[#00f328] border-green-500 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 text-sm font-medium text-green-100 font-[poppins]"
                            >
                                Remember me
                            </label>
                        </div>

                        <a href="" className="text-sm text-purple-500 underline font-[poppins]">
                            Forgot password?
                        </a>
                    </div>

                    <BtnLogin />

                    <p className="text-white pt-2 text-[12px] font-[poppins] text-center">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-[#9872F0] underline font-[poppins]">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
