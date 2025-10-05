import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";

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
        <div id="login-page" className="flex flex-col justify-center items-end text-white p-24 min-h-screen">
            <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
            <h4 className="text-gray-400 mb-1">Ready to continue your fitness journey?</h4>
            <h4 className="text-gray-400 mb-6">Your path is right here</h4>
            
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
                <TextField label="Username" variant="outlined" name="username"  sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "0.75rem",
                        fontFamily: "2px"//No funciono
                    },
                    "& fieldset": {
                        borderColor: "#9b7ff5", 
                    },
                    "& .MuiInputBase-input": {
                        color: "#aaa", 
                    },
                    "& .MuiInputLabel-root": {
                        color: "#aaa", 
                    }
                }}/>
                <TextField type="password" label="Password" variant="outlined" name="password" sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "0.75rem",
                        fontFamily: "2px"//No funciono
                    },
                    "& fieldset": {
                        borderColor: "#9b7ff5", 
                    },
                    "& .MuiInputBase-input": {
                        color: "#aaa", 
                    },
                    "& .MuiInputLabel-root": {
                        color: "#aaa", 
                    }
                }}/>
                <Button type="submit" variant="contained" sx={{
                    borderRadius: "0.75rem",
                    backgroundColor: "#9b7ff5",
                    color: "white",
                    paddingY: "10px",
                    paddingX: "30px"
                }}>
            Log in
                </Button>
            </form>
        </div>
    );
}