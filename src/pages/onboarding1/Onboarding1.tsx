
import { Link } from "react-router";

import ContinueButton from "../../components/ContinueButton";

export default function Onboarding1 () {
    return(
        <div id="full-page">
            <div id="boarding-container">
                <div id="boarding2-continer">
                    <ContinueButton />
                    <p>
                        <Link to="entrypoint">
                            skip
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
