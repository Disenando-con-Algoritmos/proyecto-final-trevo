export default function NavBar() {
    return (
        <div>
            <div className="min-h-screen w-[300px] bg-[#121212] flex flex-col">
                <h1>Trevo</h1>
                <ul className="menu flex-1 p-4 flex flex-col justify-center w-full">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Discover</a>
                    </li>
                    <li>
                        <a>My workouts</a>
                    </li>
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Create</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
