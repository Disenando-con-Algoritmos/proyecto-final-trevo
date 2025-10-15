export default function WorkoutCard() {
    return (
        <div className="w-35 h-40 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg text-white font-sans cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="relative">
                <img src="../public/images/image 42.png" alt="Pilates workout" className="w-full h-25 object-cover" />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-[10px]">Pilates</h2>
                <p className="text-sm text-gray-400 text-[10px]">28 workouts</p>
            </div>
        </div>
    );
}
