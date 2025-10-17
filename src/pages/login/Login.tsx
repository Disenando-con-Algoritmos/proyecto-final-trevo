import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { TextField, InputAdornment, IconButton, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { BtnLogin } from "../../components/BtnLogin";

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
            localStorage.setItem("username", formData.get("username") as string);//No funciono

            nav("/auth/home");
        }
    };

    return (

        <div className="flex min-h-screen">
            <div
                className="w-1/2 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${fondoLogin})`,
                    backgroundPosition: "center 92%",
                }}
            ></div>

            <div className="w-1/2 flex flex-col justify-center items-center bg-[#111] text-white p-24">
                <h1 className="text-5xl font-medium mb-4 font-[Neulis]">Welcome Back</h1>
                <h4 className="text-white mb-1 text-sm font-[poppins]">
                    Ready to continue your fitness journey?
                </h4>
                <h4 className="text-white text-sm font-[poppins]">Your path is right here</h4>
                <div className="mb-[15px]">
                </div>
                <div className="mb-[15px]">
                </div>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3 w-[400px] max-w-md font-[poppins] ">

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

                    <div className="mb-[2px]">
                    </div>
                    <div className="flex justify-between items-center w-full mb-6">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-[#00f328] bg-green-500 border-green-500 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 text-sm font-medium text-green-100 font-[poppins]"
                            >
                                Remember me
                            </label>
                        </div>

                        <a href="" className="text-sm text-white  font-[poppins]">
                            Forgot password?
                        </a>
                    </div>

                    <BtnLogin />

                </form>
                <div className="mb-[15px]">
                </div>
                <p className="text-white pt-2 text-[15px] font-[poppins]">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="pt-2 text-purple-500 underline font-[poppins]">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
