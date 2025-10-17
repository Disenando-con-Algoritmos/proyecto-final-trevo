import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { TextField, InputAdornment, IconButton,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { BtnLogin } from "../../components/BtnLogin";

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
                        color="secondary" focused 
                        name="username"
                        sx={{input: { color: "white" }
                        }}
                    />

                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        variant="outlined"
                        color="secondary" focused
                        className="font-[poppins]"
                        name="password"
                        sx={{
                            input: { color: "white" },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    //handleClickShowPassword
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        //handleMouseDownPassword
                                        edge="end">
                                        {showPassword ? (
                                            <Visibility sx={{ color: "purple" }} />
                                        ) : (
                                            <VisibilityOff sx={{ color: "white" }} />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
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

                    <BtnLogin />
                    
                </form>
            </div>
        </div>
    );
}
