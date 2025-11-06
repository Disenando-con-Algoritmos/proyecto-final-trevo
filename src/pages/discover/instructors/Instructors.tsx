import { useMediaQuery } from "@mui/material";
import { Link } from "react-router";
import { useEffect, useState } from "react";

import NavBar from "../../../components/NavBar";
import NavBarResponsive from "../../../components/NavBarResponsive";
import { getInstructors } from "../../../services/instructorServices";
import type { instructorType } from "../../../types/instructorTypes";
import InstructorCard from "../../../components/InstructorCard";

export default function Instructors() {
    const matches = useMediaQuery("(min-width:600px)");
    const [instructors, setInstructors] = useState<instructorType[]>([]);

    useEffect(() => {
        const fetchInstructors = async () => {
            const data = await getInstructors();
            setInstructors(data);
        };
        fetchInstructors();
    }, []);

    return (
        <div id="instructors-page" style={{ backgroundImage: "url('/public/assets/backgroundProfile.png')" }}>
            {matches && (
                <div id="navbar" className="fixed top-0 left-0 h-full w-[330px] z-10">
                    <NavBar />
                </div>
            )}

            {!matches && (
                <div id="navbar-responsive" className="fixed bottom-0 left-0 w-full z-10">
                    <NavBarResponsive />
                </div>
            )}

            <div className=" gap-8 mr-[900px] mt-[300px] flex flex-col text-white font-[neulis]">
                <Link to="/auth/discover/instructors" className="text-[16px] flex items-center gap-5 px-4 py-2 hover:text-[#6e6e6e] rounded-lg transition">
                    <h1 className="text-[20px] font-[neulis] font-medium">Instructors</h1>
                </Link>
                <Link to="/auth/discover/workouts" className="text-[16px] flex items-center gap-5 px-4 py-2 hover:text-[#6e6e6e] rounded-lg transition">
                    <h1 className="text-[20px] font-[neulis] font-medium">Workouts</h1>
                </Link>
            </div>

            <div>
                <div className="flex gap-5 flex-col">
                    {instructors.slice(0, 2).map((instructor, index) => (
                        <InstructorCard key={index} instructor={instructor} />
                    ))}
                </div>
            </div>
        </div>
    );
}
