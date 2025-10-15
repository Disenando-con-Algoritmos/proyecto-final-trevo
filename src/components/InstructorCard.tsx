import { Star } from "lucide-react";

export default function InstructorCard() {
    return (
        <div className="bg-[#151515] h-min w-[300px] p-4 rounded-2xl shadow-2xl flex flex-row gap-2 items-center  cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div>
                <img src="../public/images/instructorhome1.png" alt="" className="w-[200px] h-[90px] rounded-full object-cover" />
            </div>

            <div className="font-[poppins] flex flex-col gap-1">
                <h1 className="text-[10px]">Kayla Manousselis</h1>
                <p className="text-[8px]">$20.00/month</p>
                <div className="flex flex-row">
                    <Star size={15} color="#CAD83B" fill="#CAD83B"/>
                    <Star size={15} color="#CAD83B" fill="#CAD83B"/>
                    <Star size={15} color="#CAD83B" fill="#CAD83B"/>
                    <Star size={15} color="#CAD83B" fill="#CAD83B"/>
                    <Star size={15} color="#CAD83B" fill="#CAD83B"/>
                </div>
                <p className="text-[8px]">Transform your body and mind with personalized, high-energy workouts...</p>
            </div>
        </div>
    );
}
