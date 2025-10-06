import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";
import fondoLogin from "./fongoL.png";

export default function Login() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formResponse = formRef.current;
        if (formResponse) {
            const formData = new FormData(formResponse);
            localStorage.setItem("username", formData.get("username") as string);//No funciono

            nav("/home");
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
                <h4 className="text-gray-400 mb-1 font-[poppins]">
            Ready to continue your fitness journey?
                </h4>
                <h4 className="text-gray-400 mb-6 font-[poppins]">Your path is right here</h4>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center gap-3 w-[400px] max-w-md font-[poppins]">
                    <TextField
                        fullWidth
                        label="Enter email or username"
                        variant="outlined"
                        className="font-[poppins]"
                        name="username" sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                            },
                            "& fieldset": {
                                borderColor: "#9b7ff5",
                            },
                            "& .MuiInputBase-input": {
                                color: "#aaa",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#aaa",
                            },
                        }}/>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        variant="outlined"
                        className="font-[poppins]"
                        name="password" sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "0.75rem",
                            },
                            "& fieldset": {
                                borderColor: "#9b7ff5",
                            },
                            "& .MuiInputBase-input": {
                                color: "#aaa",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#aaa",
                            },
                        }}/>
                    <div className="flex items-center mb-2 self-start">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="w-4 h-4 text-[#9b7ff5] bg-gray-100 border-gray-300 rounded focus:ring-[#9b7ff5] focus:ring-2"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 text-sm font-medium text-gray-300">
                    Remember me
                        </label>
                    </div>

                    <Button
                        type="submit"
                        variant="contained" 
                        
                        sx={{
                            fontFamily: "Poppins",
                            borderRadius: "1    rem",
                            backgroundColor: "#9b7ff5",
                            color: "white",
                            paddingY: "10px",
                            paddingX: "90px",
                            "&:hover": {
                                backgroundColor: "#b28eff",
                            },
                        }}>
                    Log in
                    </Button>
                    
                </form>
            </div>
        </div>
    );
}
