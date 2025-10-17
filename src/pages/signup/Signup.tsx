import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { BtnSignUp } from "../../components/BtnSignUp";
import { getUsers } from "../../services/userServices";
import type { userType } from "../../types/userTypes";

export default function Signup() {
    const formRef = useRef<HTMLFormElement>(null);
    const nav = useNavigate();

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
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const existingUser = users.find((u) => u.username === username || u.email === email);

        if (existingUser) {
            alert("Este usuario o correo ya está registrado");
            return;
        }

        const newUser: userType = {
            id: Date.now(),
            username,
            email,
            password,
            posts: 0,
            followers: 0,
            workouts: 0,
            profilePic: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
        };

        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("user", JSON.stringify(newUser));

        nav("/auth/home");
    };

    return (
        <div className="flex min-h-screen overflow-hidden">
            <div
                className="w-1/2 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: "url(/trevo/assets/fondop.png)",
                }}
            ></div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#111] text-white p-8 md:p-24">
                <h1 className="text-4xl md:text-5xl font-medium mb-4 font-[Neulis] text-center md:text-left">Create account</h1>
                <h4 className="text-white mb-1 font-[poppins] text-center md:text-left text-sm">We are here to help you reach the peaks</h4>
                <h4 className="text-white mb-6 font-[poppins] text-center md:text-left text-sm">of fitness. Are you ready?</h4>
                <div className="mb-[15px]"></div>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 w-[90%] md:w-[400px] max-w-md font-[poppins]">
                    <TextField
                        fullWidth
                        label="Enter username"
                        variant="outlined"
                        className="font-[poppins]"
                        name="username"
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                "& fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "gray",
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Enter email"
                        variant="outlined"
                        className="font-[poppins]"
                        name="email"
                        type="email"
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                "& fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "gray",
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        className="font-[poppins]"
                        name="password"
                        sx={{
                            input: { color: "white" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "15px",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                "& fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#9b7ff5",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "gray",
                            },
                        }}
                        //InputProps sirve para personalizar el campo de entrada interno
                        InputProps={{
                            //endAdornment sirve para agregar elementos visuales al final de un campo de entrada
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <Visibility sx={{ color: "purple" }} /> : <VisibilityOff sx={{ color: "white" }} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="mb-[15px]"></div>

                    <BtnSignUp />

                    <p className="text-white pt-2 text-[12px] font-[poppins]">
                        Already have an account?{" "}
                        <Link to="/login" className="pt-2 text-[#9872F0] underline font-[poppins]">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
