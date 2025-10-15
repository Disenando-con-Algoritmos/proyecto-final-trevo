import background from "./background.png";

export default function Profile () {
    return(
        <div id="full-page" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        </div>
    );
}
