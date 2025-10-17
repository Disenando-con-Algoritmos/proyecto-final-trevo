import { Outlet } from "react-router";

export default function AuthLayout () {
    return(
        <div id="auth-page">
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}
