import { Home, Search, Dumbbell, User, Plus } from "lucide-react";

export default function Navbar() {
    return (
        <div className="relative">

            <button className="absolute right-6 -top-42 w-17 h-17 rounded-full bg-[#CAD83B] text-black flex items-center justify-center shadow-lg z-10">
                <Plus size={38} />
            </button>

            <nav className="fixed bottom-0 w-full bg-[#9872F0] h-22 flex justify-center gap-13 items-center rounded-t-[60px] shadow-lg">
                <Home size={34} className="text-white" />
                <Search size={34} className="text-white" />
                <Dumbbell size={34} className="text-white" />
                <User size={34} className="text-white" />
            </nav>
        </div>
    );
}
