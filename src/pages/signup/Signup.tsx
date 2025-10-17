import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { TextField,  InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { BtnSignUp } from "../../components/BtnSignUp";

import fondoLogin from "./FondoL.png";

export default function Login() {
    const formRef = useRef(null);
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formResponse = formRef.current;
        if (formResponse) {
            const formData = new FormData(formResponse);
            localStorage.setItem("username", formData.get("username") as string);
            nav("/auth/home");
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div
                className="w-full md:w-1/2 h-64 md:h-auto bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${fondoLogin})`,
                    backgroundPosition: "center 92%",
                }}
            ></div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#111] text-white p-8 md:p-24">
                <h1 className="text-4xl md:text-5xl font-medium mb-4 font-[Neulis] text-center md:text-left">
                    Create account
                </h1>
                <h4 className="text-white mb-1 font-[poppins] text-center md:text-left text-sm">
                    We are here to help you reach the peaks
                </h4>
                <h4 className="text-white mb-6 font-[poppins] text-center md:text-left text-sm">
                    of fitness. Are you ready?
                </h4>
                <div className="mb-[15px]">
                </div>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3 w-[90%] md:w-[400px] max-w-md font-[poppins]"
                >
                    <TextField
                        fullWidth
                        label="Enter email or username"
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
                    <div className="mb-[15px]">
                    </div>

                    <BtnSignUp />

                    <p className="text-white pt-2 text-[11px] font-[poppins]">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="pt-2 text-purple-500 underline font-[poppins]">
                            Sign Up
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}
