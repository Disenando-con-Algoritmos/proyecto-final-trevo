import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { TextField,  InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { BtnSignUp } from "../../components/BtnSignUp";

import fondoLogin from "./fongoL.png";

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
            nav("/home");
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
                <h4 className="text-white mb-1 font-[poppins] text-center md:text-left">
                    We are here to help you reach the peaks
                </h4>
                <h4 className="text-white mb-6 font-[poppins] text-center md:text-left">
                    of fitness. Are you ready?
                </h4>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3 w-[90%] md:w-[400px] max-w-md font-[poppins]"
                >
                    <TextField
                        fullWidth
                        label="Enter full name"
                        variant="outlined"
                        className="font-[poppins]"
                        color="secondary"
                        focused
                        name="username"
                        sx={{
                            input: { color: "white" },
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Enter email"
                        variant="outlined"
                        className="font-[poppins]"
                        color="secondary"
                        focused
                        name="email"
                        sx={{
                            input: { color: "white" },
                        }}
                    />

                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        focused
                        className="font-[poppins]"
                        name="password"
                        sx={{
                            input: { color: "white" },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
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

                    <div className="flex items-center mb-2 self-start">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="w-4 h-4 text-[#9b7ff5] bg-gray-100 border-gray-300 rounded focus:ring-[#9b7ff5] focus:ring-2"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 text-sm font-medium text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>

                    <BtnSignUp />

                    <div className="mt-3">
                        <h6 className="text-[14px] text-center">
                            Already have an account
                        </h6>
                    </div>
                </form>
            </div>
        </div>
    );
}

