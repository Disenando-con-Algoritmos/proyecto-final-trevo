import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useMediaQuery } from "@mui/material";

import NavBar from "../../../components/NavBar";
import NavBarResponsive from "../../../components/NavBarResponsive";
import { getInstructors } from "../../../services/instructorServices";
import type { instructorType } from "../../../types/instructorTypes";
import InstructorCard from "../../../components/InstructorCard";

export default function Instructors() {
    const [instructors, setInstructors] = useState<instructorType[]>([]);
    const matches = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        const fetchInstructors = async () => {
            const data = await getInstructors();
            setInstructors(data);
        };
        fetchInstructors();
    }, []);

    return (
        <div
            className={`min-h-screen text-white flex ${matches ? "flex-row" : "flex-col"}`}
            style={{
                backgroundImage: "url(/trevo/assets/backgroundProfile.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            {matches && (
                <div className="fixed top-0 left-0 h-full w-[330px] z-10">
                    <NavBar />
                </div>
            )}

            {!matches && (
                <div className="fixed bottom-0 left-0 w-full z-10">
                    <NavBarResponsive />
                </div>
            )}

            <div className={`flex-1 flex flex-col ${matches ? "ml-[330px] pt-0 pb-0 justify-center" : "pt-4 pb-20 px-4 mt-5"}`}>
                <div className={`${matches ? "pb-50 w-[260px] h-[900px]  border-r-2 border-gray-400 flex flex-col justify-center pl-8 gap-8" : "flex justify-center gap-10 mb-8"}`}>
                    <Link to="/auth/discover/instructors" className=" text-white text-[22px] font-medium font-[neulis]">
                        Instructors
                    </Link>
                    <Link to="/auth/discover/workouts" className="text-gray-400 text-[22px] font-medium hover:text-white transition-colors font-[neulis]">
                        Workouts
                    </Link>
                </div>

                <div className={`${matches ? "grid grid-cols-2 gap-6 max-w-4xl" : "grid grid-cols-1 gap-6 max-w-sm"} mx-auto`}>
                    {instructors.map((instructor, index) => {
                        console.info(`Rendering instructor ${index}:`, instructor);
                        return <InstructorCard key={index} instructor={instructor} />;
                    })}
                </div>
            </div>
        </div>
    );
}
