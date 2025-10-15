export default function ContainerHashtag ({ text }: { text: string }) {
    return (
        <div className="">
            <input className="btn font-medium font-[neulis] rounded-4xl h-[30px] bg-white border-0 text-black" type="radio" aria-label= { text }/>
        </div>
    );
}