import Image from "next/image";

export default function WavyPatternBackground() {
    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background-home1.png')" }}
            />
            <div className="absolute inset-0 bg-gray-light opacity-[97%]" />
            <div className="h-full 2xl:w-[30%] xl:w-[35%] w-[55%] absolute right-0 bottom-0 sm:visible invisible bg-blue-300--">
                <Image src="/right-background-home1.webp" alt="Logo" fill={true} />
            </div>
        </>
    );
}